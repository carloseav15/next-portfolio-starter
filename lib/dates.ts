export function formatUtcDate(
  isoDate: string,
  options: Intl.DateTimeFormatOptions,
  locale = "en-US",
) {
  const date = new Date(`${isoDate}T00:00:00Z`);

  return new Intl.DateTimeFormat(locale, {
    ...options,
    timeZone: "UTC",
  }).format(date);
}
