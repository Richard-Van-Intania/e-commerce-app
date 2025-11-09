const items: ItemData[] = [{ source: "/items/image 7.png", label: "T-SHIRT WITH TAPE DETAILS", rating: 4.5, price: 120, discounted: null }];

export default defineEventHandler((event) => {
  return items;
});
