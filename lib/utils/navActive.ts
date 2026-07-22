import type { NavItem } from "@/types";

/** Exact path or nested under href (e.g. /blog/slug under /blog). */
export function pathMatchesHref(activePath: string, href: string): boolean {
  return activePath === href || activePath.startsWith(`${href}/`);
}

/**
 * Top-level nav active state.
 * Prefers a longer peer href that also matches (e.g. Kağıthane over Bölgeler
 * when activePath is /hizmet-bolgeleri/kagithane).
 */
export function isNavActive(
  item: NavItem,
  activePath: string | undefined,
  peers: NavItem[] = []
): boolean {
  if (!activePath) return false;

  const matchesSelf = pathMatchesHref(activePath, item.href);
  const matchesChild =
    item.children?.some((child) => pathMatchesHref(activePath, child.href)) ??
    false;

  if (!matchesSelf && !matchesChild) return false;

  const beatenByMoreSpecificPeer = peers.some((peer) => {
    if (peer.href === item.href) return false;
    if (!pathMatchesHref(activePath, peer.href)) return false;
    return peer.href.length > item.href.length;
  });

  return !beatenByMoreSpecificPeer;
}

export function isNavChildActive(
  href: string,
  activePath: string | undefined
): boolean {
  if (!activePath) return false;
  return pathMatchesHref(activePath, href);
}
