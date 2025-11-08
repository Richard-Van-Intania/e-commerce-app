export const { format: formatNumber } = Intl.NumberFormat("en-GB", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function onClick(): void {
  alert("clicked jaaa!");
}
