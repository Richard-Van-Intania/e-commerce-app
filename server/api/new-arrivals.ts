const items: ItemData[] = [
  { source: "/items/image 7.png", label: "T-Shirt With Tape Details", rating: 4.5, price: 120, discounted: null },
  { source: "/items/image 8.png", label: "Skinny Fit Jeans", rating: 3.5, price: 260, discounted: 240 },
  { source: "/items/image 9.png", label: "Checkered Shirt", rating: 4.5, price: 180, discounted: null },
  { source: "/items/image 10.png", label: "Sleeve Striped T-Shirt", rating: 4.5, price: 160, discounted: 130 },
  { source: "/items/image 10.png", label: "Sleeve Striped T-Shirt", rating: 4.5, price: 160, discounted: 130 },
  { source: "/items/image 10.png", label: "Sleeve Striped T-Shirt", rating: 4.5, price: 160, discounted: 130 },
];

export default defineEventHandler((event) => {
  return items;
});
