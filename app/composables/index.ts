export function useBanner() {
  return useState<boolean>("top-banner", () => true);
}
