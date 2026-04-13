export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number, options?: Intl.NumberFormatOptions) {
  if (Number.isNaN(value) || !Number.isFinite(value)) return "£0";
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
    ...options,
  }).format(value);
}

export function formatNumber(value: number, fractionDigits = 2) {
  if (Number.isNaN(value) || !Number.isFinite(value)) return "0";
  return new Intl.NumberFormat("en-GB", {
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export const siteBaseUrl = "https://www.ukjobtools.co.uk";

export function buildCanonical(path: string) {
  const safePath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBaseUrl}${safePath}`;
}
