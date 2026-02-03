// src/data/products.js

export const PRODUCTS = [
  {
    id: "fresh-tomatoes-1kg",
    name: "Fresh Tomatoes (1 kg)",
    category: "Fresh Produce",
    price: 45,
    currency: "INR",
    brand: "Local Farm Select",
    inStock: true,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/8390/food-wood-tomatoes.jpg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "Ripe, juicy tomatoes ideal for curries, gravies, salads and sauces.",
    specs: {
      weight: "1 kg",
      type: "Vegetable",
      origin: "Local farms",
      storage: "Refrigerated, use within 3–4 days"
    }
  },
  {
    id: "basmati-rice-5kg",
    name: "Premium Basmati Rice (5 kg)",
    category: "Grains & Staples",
    price: 520,
    currency: "INR",
    brand: "Royal Harvest",
    inStock: true,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "Long‑grain aged basmati rice with consistent length and aroma for biryanis and daily meals.",
    specs: {
      weight: "5 kg",
      type: "Basmati rice",
      origin: "India",
      storage: "Cool, dry place in airtight container"
    }
  },
  {
    id: "sunflower-oil-5l",
    name: "Refined Sunflower Oil (5 L)",
    category: "Oils & Fats",
    price: 780,
    currency: "INR",
    brand: "SunLite Pro",
    inStock: true,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/3735151/pexels-photo-3735151.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "Light refined sunflower oil suitable for deep‑frying and everyday cooking in commercial kitchens.",
    specs: {
      volume: "5 L",
      type: "Sunflower oil",
      packaging: "Jar",
      storage: "Cool, dark place away from direct sunlight"
    }
  },
  {
  id: "paneer-1kg",
  name: "Fresh Paneer Block (1 kg)",
  category: "Dairy & Chilled",
  price: 360,
  currency: "INR",
  brand: "Chef’s Choice",
  inStock: true,
  rating: 4.5,
  image:
    "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800", // new paneer-ish plate image [web:139]
  shortDescription:
    "Soft, fresh paneer block ideal for gravies, tikkas and snacks in Indian menus.",
  specs: { /* same as before */ }
},
  {
    id: "frozen-peas-2kg",
    name: "Frozen Green Peas (2 kg)",
    category: "Frozen",
    price: 260,
    currency: "INR",
    brand: "FrostFresh",
    inStock: true,
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "Individually quick frozen green peas to reduce prep time and ensure year‑round availability.",
    specs: {
      weight: "2 kg",
      type: "Frozen vegetables",
      storage: "Frozen at -18°C or below",
      usage: "Use directly from frozen, do not refreeze thawed product"
    }
  },
  {
    id: "masala-marinade-2kg",
    name: "Ready Marinade – Tandoori Masala (2 kg)",
    category: "Ready-to-Cook",
    price: 540,
    currency: "INR",
    brand: "KitchenPrep Pro",
    inStock: false,
    rating: 4.2,
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "Pre‑mixed tandoori marinade for quick, consistent flavour in grills and starters.",
    specs: {
      weight: "2 kg",
      type: "Marinade paste",
      storage: "Refrigerated after opening",
      shelfLife: "See pack, typically 3–4 months unopened"
    }
  }
];
