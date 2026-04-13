"use client";

const STORAGE_KEY = "uk-job-tools:recent";
const MAX_ITEMS = 6;

export function saveRecentlyViewed(slug: string) {
  if (typeof window === "undefined") return;
  const existing = window.localStorage.getItem(STORAGE_KEY);
  const parsed = existing ? (JSON.parse(existing) as string[]) : [];
  const updated = [slug, ...parsed.filter((item) => item !== slug)].slice(
    0,
    MAX_ITEMS,
  );
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getRecentlyViewed(): string[] {
  if (typeof window === "undefined") return [];
  const existing = window.localStorage.getItem(STORAGE_KEY);
  if (!existing) return [];
  try {
    const parsed = JSON.parse(existing) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
