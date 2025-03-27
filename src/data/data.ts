import { Category } from "../models/Category";
import { Product } from "../models/Product";

export const CATEGORIES: Category[] = [
	{ id: 0, name: "Yemekler" },
	{ id: 1, name: "İçecekler" },
	{ id: 2, name: "Tatlılar" },
	{ id: 3, name: "Aperatifler" },
	{ id: 4, name: "Salatalar" },
	{ id: 5, name: "Çorbalar" },
	{ id: 6, name: "Kahvaltılıklar" },
	{ id: 7, name: "Atıştırmalıklar" }
];


export const PRODUCTS: Product[] = [
	{
		id: 0,
		categoryId: 0,
		name: "Izgara Tavuk",
		price: 120,
		description: "Özel baharatlarla marine edilmiş ızgara tavuk.",
		image: "https://i.lezzet.com.tr/images-xxlarge-secondary/izgara-tavuk-yapmanin-6-puf-noktasi-c2d269b7-9979-4f0d-b3dc-74771101f813.jpg",
		ingredients: "Tavuk göğsü, zeytinyağı, kekik, tuz, karabiber"
	},
	{
		id: 1,
		categoryId: 1,
		name: "Taze Portakal Suyu",
		price: 50,
		description: "Taze sıkılmış %100 doğal portakal suyu.",
		image: "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/x53ynKl0.jpg",
		ingredients: "Portakal"
	},
	{
		id: 2,
		categoryId: 2,
		name: "Sufle",
		price: 75,
		description: "Akışkan çikolata dolgulu lezzetli sufle.",
		image: "https://image.hurimg.com/i/hurriyet/75/750x422/5c370abe0f25440ee07ea224.jpg",
		ingredients: "Un, yumurta, şeker, çikolata, tereyağı"
	},
	{
		id: 3,
		categoryId: 3,
		name: "Patates Kızartması",
		price: 60,
		description: "Dışı çıtır, içi yumuşak patates kızartması.",
		image: "https://image.hurimg.com/i/hurriyet/75/750x422/5eca5464d3806c225429d41f.jpg",
		ingredients: "Patates, tuz, ayçiçek yağı"
	},
	{
		id: 4,
		categoryId: 4,
		name: "Sezar Salata",
		price: 85,
		description: "Izgara tavuklu, parmesan peynirli Sezar salata.",
		image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/tavuklu-sezar-salata-sunum-yemekcom.jpg",
		ingredients: "Marul, tavuk, parmesan, Sezar sos, kruton"
	}
];
