const mockProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999 },
  { id: 2, name: "Headphones", category: "Electronics", price: 199 },
  { id: 3, name: "Shoes", category: "Fashion", price: 120 },
  { id: 4, name: "Backpack", category: "Fashion", price: 80 }
];

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 300);
  });
}

