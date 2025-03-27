import { Category } from "../models/Category";
import { Product } from "../models/Product";

export const CATEGORIES: Category[] = [
  { id: 0, name: "Çok Satanlar" },
  { id: 1, name: "Yemekler" },
  { id: 2, name: "İçecekler" },
  { id: 3, name: "Tatlılar" },
  { id: 4, name: "Aperatifler" },
  { id: 5, name: "Salatalar" },
  { id: 6, name: "Çorbalar" },
  { id: 7, name: "Kahvaltılıklar" },
  { id: 8, name: "Atıştırmalıklar" },
];

export const PRODUCTS: Product[] = [
  {
    id: 0,
    categoryId: 1,
    name: "Izgara Tavuk",
    price: 120,
    description: "Özel baharatlarla marine edilmiş ızgara tavuk.",
    image:
      "https://i.lezzet.com.tr/images-xxlarge-secondary/izgara-tavuk-yapmanin-6-puf-noktasi-c2d269b7-9979-4f0d-b3dc-74771101f813.jpg",
    ingredients: "Tavuk göğsü, zeytinyağı, kekik, tuz, karabiber",
    isBestseller: false,
  },
  {
    id: 1,
    categoryId: 2,
    name: "Taze Portakal Suyu",
    price: 50,
    description: "Taze sıkılmış %100 doğal portakal suyu.",
    image:
      "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/x53ynKl0.jpg",
    ingredients: "Portakal",
    isBestseller: false,
  },
  {
    id: 2,
    categoryId: 3,
    name: "Sufle",
    price: 75,
    description: "Akışkan çikolata dolgulu lezzetli sufle.",
    image:
      "https://image.hurimg.com/i/hurriyet/75/750x422/5c370abe0f25440ee07ea224.jpg",
    ingredients: "Un, yumurta, şeker, çikolata, tereyağı",
    isBestseller: false,
  },
  {
    id: 3,
    categoryId: 4,
    name: "Patates Kızartması",
    price: 60,
    description: "Dışı çıtır, içi yumuşak patates kızartması.",
    image:
      "https://image.hurimg.com/i/hurriyet/75/750x422/5eca5464d3806c225429d41f.jpg",
    ingredients: "Patates, tuz, ayçiçek yağı",
    isBestseller: false,
  },
  {
    id: 4,
    categoryId: 5,
    name: "Sezar Salata",
    price: 85,
    description: "Izgara tavuklu, parmesan peynirli Sezar salata.",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/tavuklu-sezar-salata-sunum-yemekcom.jpg",
    ingredients: "Marul, tavuk, parmesan, Sezar sos, kruton",
    isBestseller: true,
  },
];
