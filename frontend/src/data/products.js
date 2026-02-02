// src/data/products.js

export const PRODUCTS = [
  {
    id: "bearing-6205",
    name: "Deep Groove Ball Bearing 6205",
    category: "Bearings",
    price: 250,
    currency: "INR",
    brand: "SKF",
    inStock: true,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "High-precision deep groove ball bearing for general mechanical applications.",
    specs: {
      innerDiameter: "25 mm",
      outerDiameter: "52 mm",
      width: "15 mm",
      material: "Chrome steel",
      loadType: "Radial"
    }
  },
  {
    id: "v-belt-b42",
    name: "Industrial V-Belt B42",
    category: "Power Transmission",
    price: 430,
    currency: "INR",
    brand: "Fenner",
    inStock: true,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "Oil- and heat-resistant V-belt for heavy-duty drives.",
    specs: {
      profile: "B",
      length: "45 inch",
      temperatureRange: "-20°C to 80°C",
      material: "Rubber with polyester cord"
    }
  },
  {
    id: "coupling-jaw-l090",
    name: "Jaw Coupling L090",
    category: "Couplings",
    price: 980,
    currency: "INR",
    brand: "Lovejoy",
    inStock: false,
    rating: 4.2,
    image:
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b7861bf8-a8cd-5858-a41d-3f1548a71a73/d98a4b08-7f37-524b-b612-a561bde2688f.jpg",
    shortDescription:
      "Flexible jaw coupling for vibration damping and misalignment compensation.",
    specs: {
      bore: "24 mm",
      torque: "90 Nm",
      speed: "4000 RPM",
      material: "Cast iron with rubber spider"
    }
  },
  {
    id: "gearbox-helical-3kw",
    name: "Helical Gearbox 3 kW",
    category: "Gearboxes",
    price: 7250,
    currency: "INR",
    brand: "Bonfiglioli",
    inStock: true,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/191663/pexels-photo-191663.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "Compact helical gearbox for conveyor and mixer applications.",
    specs: {
      power: "3 kW",
      ratio: "1:20",
      mounting: "Foot mounted",
      lubrication: "Oil bath"
    }
  },
  {
    id: "roller-chain-08b",
    name: "Roller Chain 08B-1",
    category: "Power Transmission",
    price: 620,
    currency: "INR",
    brand: "Tsubaki",
    inStock: true,
    rating: 4.3,
    image:
      "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/7a602ce2-c098-5efa-b6f9-aba3f9c5a5af/eced148b-7ea2-5e93-a4f3-43e9b759a7fb.jpg",
    shortDescription:
      "Industrial roller chain for general purpose mechanical drives.",
    specs: {
      pitch: "12.7 mm",
      strand: "Single",
      material: "Carbon steel",
      compliance: "ISO 606"
    }
  },
  {
    id: "pillow-block-ucp206",
    name: "Pillow Block Bearing UCP206",
    category: "Bearings",
    price: 1150,
    currency: "INR",
    brand: "FAG",
    inStock: true,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/2965111/pexels-photo-2965111.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDescription:
      "Cast iron pillow block unit for shaft-mounted conveyor and fan drives.",
    specs: {
      shaftDiameter: "30 mm",
      housingMaterial: "Cast iron",
      sealType: "Double lip",
      lubrication: "Grease"
    }
  }
];
