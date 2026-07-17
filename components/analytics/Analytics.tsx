import Script from "next/script";
import { AnalyticsClient } from "./AnalyticsClient";

const CONSENT_STORAGE_KEY = "724tesisatci-analytics-consent";

function getAnalyticsSettings() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
  return {
    gaId,
    enabled: process.env.NODE_ENV === "production" && gaId.length > 0,
  };
}

export function AnalyticsHead() {
  const { enabled } = getAnalyticsSettings();
  if (!enabled) return null;

  return (
    <script
      id="google-consent-default"
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
window.__analyticsConsent = "pending";
window.gtag("consent", "default", {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  wait_for_update: 500
});
try {
  var storedConsent = window.localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)});
  if (storedConsent === "granted") {
    window.__analyticsConsent = "granted";
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
  } else if (storedConsent === "denied") {
    window.__analyticsConsent = "denied";
  }
} catch (_) {}
        `.trim(),
      }}
    />
  );
}

export function Analytics() {
  const { gaId, enabled } = getAnalyticsSettings();

  return (
    <>
      {enabled && (
        <>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
window.gtag("js", new Date());
if (window.__analyticsConsent === "granted") {
  window.gtag("config", ${JSON.stringify(gaId)}, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
}
              `.trim(),
            }}
          />
        </>
      )}
      <AnalyticsClient enabled={enabled} gaId={enabled ? gaId : undefined} />
    </>
  );
}
