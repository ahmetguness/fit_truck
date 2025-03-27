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
  {
    id: 5,
    categoryId: 6,
    name: "Mercimek Çorbası",
    price: 55,
    description:
      "Limon ve pul biber ile servis edilen klasik mercimek çorbası.",
    image:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/mercimek-corbasi-yemekcom.jpg",
    ingredients: "Yeşil mercimek, soğan, havuç, un, baharatlar",
    isBestseller: true,
  },
  {
    id: 6,
    categoryId: 7,
    name: "Menemen",
    price: 70,
    description: "Domates, biber ve yumurtayla yapılan geleneksel kahvaltılık.",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/10/soganli-menemen-yemekcom.jpg",
    ingredients: "Yumurta, domates, biber, zeytinyağı, tuz, baharat",
    isBestseller: false,
  },
  {
    id: 7,
    categoryId: 8,
    name: "Cips",
    price: 40,
    description: "İnce kesilmiş ve kızartılmış patates cipsi.",
    image:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/firinlanmis-patates-cips-d9f9d356-e261-4d30-986d-ce1dfdd9dc73.jpg",
    ingredients: "Patates, tuz, ayçiçek yağı",
    isBestseller: false,
  },
  {
    id: 8,
    categoryId: 3,
    name: "Tiramisu",
    price: 90,
    description: "Kahveli ve mascarpone kremalı hafif İtalyan tatlısı.",
    image:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/yalanci-tiramisu-fa41ff76-2e52-4d05-9b13-6c8b236e378b.jpg",
    ingredients: "Mascarpone, kahve, kedi dili bisküvi, kakao, şeker",
    isBestseller: true,
  },
  {
    id: 9,
    categoryId: 2,
    name: "Limonata",
    price: 45,
    description: "Taze limon suyu ve nane ile hazırlanan serinletici içecek.",
    image:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-konsantre-limonata-01e50b99-5890-411f-a4c2-997a71e8a5cc.jpg",
    ingredients: "Limon, su, şeker, nane",
    isBestseller: false,
  },
  {
    id: 10,
    categoryId: 4,
    name: "Soğan Halkası",
    price: 65,
    description: "Kızartılmış çıtır soğan halkaları.",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/02/sogan-halkasi-yemekcom.jpg",
    ingredients: "Soğan, un, yumurta, galeta unu, ayçiçek yağı",
    isBestseller: false,
  },
  {
    id: 11,
    categoryId: 1,
    name: "Kuzu Pirzola",
    price: 180,
    description:
      "Izgara edilmiş, özel baharatlarla marine edilmiş kuzu pirzola.",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/05/tavada-kuzu-pirzola-yemekcom.jpg",
    ingredients: "Kuzu pirzola, kekik, zeytinyağı, tuz, karabiber",
    isBestseller: true,
  },
  {
    id: 12,
    categoryId: 1,
    name: "Mantı",
    price: 95,
    description:
      "El yapımı hamurun içinde kıyma dolgulu mantı, yoğurt ve tereyağ soslu.",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/01/manti-yemekcom.jpg",
    ingredients: "Un, kıyma, soğan, yoğurt, tereyağı, pul biber",
    isBestseller: false,
  },
  {
    id: 13,
    categoryId: 1,
    name: "Lahmacun",
    price: 60,
    description:
      "İncecik hamur üzerine özel baharatlarla harmanlanmış kıymalı harç.",
    image:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/04/lahmacun-yemekcom-1.jpg",
    ingredients: "Un, kıyma, domates, soğan, maydanoz, baharatlar",
    isBestseller: true,
  },
  {
    id: 14,
    categoryId: 1,
    name: "Etli Kuru Fasulye",
    price: 85,
    description: "Dana etiyle pişirilmiş geleneksel Türk mutfağı klasiği.",
    image:
      "https://www.ardaninmutfagi.com/wp-content/uploads/2024/02/acili-etli-kuru-fasulye-t2.jpg",
    ingredients: "Fasulye, dana eti, soğan, domates salçası, tereyağı",
    isBestseller: false,
  },
  {
    id: 15,
    categoryId: 1,
    name: "Karnıyarık",
    price: 90,
    description:
      "Kızarmış patlıcan içinde kıymalı harç ile hazırlanan geleneksel lezzet.",
    image:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2014/10/karniyarik-yemekcom.jpg",
    ingredients: "Patlıcan, kıyma, domates, biber, soğan, baharatlar",
    isBestseller: false,
  },
];
