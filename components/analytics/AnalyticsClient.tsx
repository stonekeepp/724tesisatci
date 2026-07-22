"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReportWebVitals } from "next/web-vitals";

const CONSENT_STORAGE_KEY = "724tesisatci-analytics-consent";
const CONSENT_EVENT = "724tesisatci:analytics-consent";
const OPEN_PREFERENCES_EVENT = "724tesisatci:open-cookie-preferences";
const WEB_VITAL_NAMES = new Set(["CLS", "LCP", "INP", "FCP", "TTFB"]);

type AnalyticsConsent = "pending" | "granted" | "denied";

interface WebVitalMetric {
  name: string;
  id: string;
  value: number;
  delta: number;
  rating?: string;
  navigationType?: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __analyticsConsent?: AnalyticsConsent;
  }
}

function readStoredConsent(): AnalyticsConsent {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "granted" || stored === "denied") return stored;
  } catch {
    // Storage erişimi engellense bile varsayılan izin reddedilmiş kalır.
  }
  return "pending";
}

function updateConsent(
  consent: Exclude<AnalyticsConsent, "pending">,
  gaId?: string
) {
  const wasGranted = window.__analyticsConsent === "granted";
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // Tercih kalıcı kaydedilemese de mevcut sayfa için uygulanır.
  }

  window.__analyticsConsent = consent;
  window.gtag?.("consent", "update", {
    analytics_storage: consent,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  if (consent === "granted" && !wasGranted && gaId) {
    window.gtag?.("config", gaId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
}

function getNavigationType(metric: WebVitalMetric): string {
  if (metric.navigationType) return metric.navigationType;
  const navigation = performance.getEntriesByType(
    "navigation"
  )[0] as PerformanceNavigationTiming | undefined;
  return navigation?.type ?? "navigate";
}

function toGaInteger(metricName: string, value: number): number {
  return Math.round(metricName === "CLS" ? value * 1000 : value);
}

function CookieConsent({ gaId }: { gaId?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedConsent = readStoredConsent();
    window.__analyticsConsent = storedConsent;
    setVisible(storedConsent === "pending");
    window.dispatchEvent(
      new CustomEvent(CONSENT_EVENT, { detail: storedConsent })
    );

    const openPreferences = () => setVisible(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () =>
      window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
  }, []);

  if (!visible) return null;

  return (
    <aside
      className="fixed inset-x-4 bottom-24 z-[70] mx-auto max-w-lg rounded-xl border border-outline-variant bg-surface-container-lowest p-4 shadow-2xl md:inset-x-8 md:bottom-4"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <p
        id="cookie-consent-title"
        className="font-headline-md text-lg text-primary"
      >
        Analitik çerez tercihi
      </p>
      <p
        id="cookie-consent-description"
        className="mt-2 font-body-md text-sm leading-relaxed text-on-surface-variant"
      >
        Site performansını ve kullanımını anlamak için Google Analytics 4
        kullanıyoruz. Analitik çerezler yalnızca izninizle etkinleşir; reklam
        kişiselleştirmesi yapılmaz.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-lg border border-outline-variant bg-surface-container px-5 py-2.5 font-label-md text-primary transition-colors hover:bg-surface-variant"
          onClick={() => {
            updateConsent("denied", gaId);
            setVisible(false);
          }}
        >
          Reddet
        </button>
        <button
          type="button"
          className="rounded-lg bg-secondary px-5 py-2.5 font-label-md text-on-secondary shadow-md transition-colors hover:bg-on-secondary-container"
          onClick={() => {
            updateConsent("granted", gaId);
            setVisible(false);
          }}
        >
          Analitiğe izin ver
        </button>
      </div>
    </aside>
  );
}

function WebVitalsReporter() {
  const pendingMetrics = useRef(new Map<string, WebVitalMetric>());

  const sendMetric = useCallback((metric: WebVitalMetric) => {
    if (
      window.__analyticsConsent !== "granted" ||
      typeof window.gtag !== "function"
    ) {
      return false;
    }

    window.gtag("event", "web_vital", {
      metric_name: metric.name,
      metric_id: metric.id,
      metric_value: toGaInteger(metric.name, metric.value),
      metric_delta: toGaInteger(metric.name, metric.delta),
      metric_rating: metric.rating ?? "unknown",
      navigation_type: getNavigationType(metric),
      page_path: window.location.pathname,
    });
    return true;
  }, []);

  const reportWebVital = useCallback(
    (metric: WebVitalMetric) => {
      if (!WEB_VITAL_NAMES.has(metric.name)) return;
      if (sendMetric(metric)) return;

      if (window.__analyticsConsent !== "denied") {
        pendingMetrics.current.set(`${metric.name}:${metric.id}`, metric);
      }
    },
    [sendMetric]
  );

  useReportWebVitals(reportWebVital);

  useEffect(() => {
    const handleConsent = (event: Event) => {
      const consent = (event as CustomEvent<AnalyticsConsent>).detail;
      if (consent === "denied") {
        pendingMetrics.current.clear();
        return;
      }
      if (consent !== "granted") return;

      for (const [key, metric] of pendingMetrics.current) {
        if (sendMetric(metric)) pendingMetrics.current.delete(key);
      }
    };

    window.addEventListener(CONSENT_EVENT, handleConsent);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsent);
  }, [sendMetric]);

  return null;
}

function ConsentGatedGaScripts({ gaId }: { gaId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const sync = (consent: AnalyticsConsent) => {
      setShouldLoad(consent === "granted");
    };

    sync(readStoredConsent());

    const onConsent = (event: Event) => {
      sync((event as CustomEvent<AnalyticsConsent>).detail);
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://www.googletagmanager.com";
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, [shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
        strategy="lazyOnload"
      />
      <Script
        id="google-analytics-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
window.gtag("js", new Date());
window.gtag("config", ${JSON.stringify(gaId)}, {
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});
          `.trim(),
        }}
      />
    </>
  );
}

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="text-secondary font-label-md hover:text-primary transition-colors"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
    >
      Çerez tercihlerini değiştir
    </button>
  );
}

export function AnalyticsClient({
  enabled,
  gaId,
}: {
  enabled: boolean;
  gaId?: string;
}) {
  return (
    <>
      {enabled && gaId ? <ConsentGatedGaScripts gaId={gaId} /> : null}
      {enabled && <WebVitalsReporter />}
      <CookieConsent gaId={gaId} />
    </>
  );
}
