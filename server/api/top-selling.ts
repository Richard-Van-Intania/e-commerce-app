const items: ItemData[] = [
  { source: "/items/image 7 2.png", label: "Vertical Striped Shirt", rating: 5.0, price: 232, discounted: 212 },
  { source: "/items/image 8 2.png", label: "Courage Graphic T-Shirt", rating: 4.0, price: 145, discounted: null },
  { source: "/items/image 9 2.png", label: "Loose Fit Bermuda Shorts", rating: 3.0, price: 80, discounted: null },
  { source: "/items/image 10 2.png", label: "Faded Skinny Jeans", rating: 4.5, price: 210, discounted: null },
];

export default defineEventHandler((event) => {
  return items;
});
