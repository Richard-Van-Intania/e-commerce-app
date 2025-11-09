export const { format: formatNumber } = Intl.NumberFormat("en-US", {
  style: "decimal",
  useGrouping: true,
});

export function onClick(message: string): void {
  alert(message);
}
