import { productImgs } from "contains/fakeData";
import productVariantImg2 from "images/products/v2.jpg";
import productVariantImg3 from "images/products/v3.jpg";
import productVariantImg4 from "images/products/v4.jpg";
import productVariantImg5 from "images/products/v5.jpg";
import productVariantImg6 from "images/products/v6.jpg";
//
import productSport1 from "images/products/sport-1.png";
import productSport2 from "images/products/sport-2.png";
import productSport3 from "images/products/sport-3.png";
import productSport4 from "images/products/sport-4.png";
import productSport5 from "images/products/sport-5.png";
import productSport6 from "images/products/sport-6.png";
import productSport7 from "images/products/sport-7.png";
import productSport8 from "images/products/sport-8.png";

//

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: string;
  color?: string;
  featuredImage: string;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  tags: string[];
  link: "/product-detail/";
  variants?: ProductVariant[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
  fleg?: string;
}

const DEMO_VARIANTS: ProductVariant[] = [
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "White",
    thumbnail: productVariantImg2,
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    thumbnail: productVariantImg3,
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    thumbnail: productVariantImg4,
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Natural",
    thumbnail: productVariantImg5,
    featuredImage: productImgs[4],
  },
];
const DEMO_VARIANT_COLORS: ProductVariant[] = [
  {
    id: 1,
    name: "Violet",
    color: "bg-violet-400",
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "Yellow",
    color: "bg-yellow-400",
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    color: "bg-orange-400",
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    color: "bg-sky-400",
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-400",
    featuredImage: productImgs[4],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Rey Nylon Backpack",
    description: "Brown cockroach wings",
    price: 74,
    image: "https://firebasestorage.googleapis.com/v0/b/one-of-many-c94a4.appspot.com/o/s.d%2Fflag%2FScreenshot%202024-04-29%20221906.png?alt=media&token=51418e75-d6f4-4a7e-bd79-cc5b2605fc08",

    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
  },
  {
    id: 2,
    name: 'Round Buckle 1" Belt',
    description: "Classic green",
    price: 68,
    image: "https://firebasestorage.googleapis.com/v0/b/one-of-many-c94a4.appspot.com/o/s.d%2Fflag%2F%D7%95%D7%95%D7%A8%D7%95%D7%93.png?alt=media&token=4990ffca-43ac-4a33-a7cf-0de7d5612f71",
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
  },
  {
    id: 3,
    name: "Waffle Knit Beanie",
    description: "New blue aqua",
    price: 132,
    image: "https://firebasestorage.googleapis.com/v0/b/one-of-many-c94a4.appspot.com/o/s.d%2Fflag%2F%D7%A9%D7%97%D7%95%D7%A8.png?alt=media&token=fb0179e0-bb50-48ad-8227-f604f3bf073a",

    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["S", "M", "L", "XL"],
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 4,
    name: "איחוד אירופאי",
    description: "לוחית זיהוי ארופאית",
    price: 28,
    image: "https://www.muschard24.de/images/product_images/popup_images/002-001.jpg",
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
    fleg: "eru",
  },
  {
    id: 5,
    name: "שוויץ הקטנה",
    description: "Perfect mint green",
    price: 42,
    image: "https://firebasestorage.googleapis.com/v0/b/one-of-many-c94a4.appspot.com/o/s.d%2Fflag%2F%D7%A9%D7%95%D7%95%D7%99%D7%A5.png?alt=media&token=a8c0d87b-03f0-4769-acc5-7b3cab5b453f",
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    fleg: "bc794e79-b245-44ba-9fcd-624c0dcfce71",
  },
  {
    id: 6,
    name: "Dubi",
    description: "New design 2023",
    price: 30,
    image: "https://firebasestorage.googleapis.com/v0/b/one-of-many-c94a4.appspot.com/o/s.d%2Fflag%2FScreenshot%202024-04-29%20221906.png?alt=media&token=cd2d69ad-23b7-406b-b2eb-031b61b7e4e3",
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
    fleg: "6d82cec8-9cd1-4d98-b2bc-7e49560b297a",
  },
  {
    id: 7,
    name: "Wool Cashmere Jacket",
    description: "Matte black",
    price: 12,
    image: "https://firebasestorage.googleapis.com/v0/b/one-of-many-c94a4.appspot.com/o/s.d%2Fflag%2FScreenshot%202024-04-29%20162647.png?alt=media&token=42141c11-2f25-43dc-9280-413d9ed13d0e",
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
  },
  {
    id: 8,
    name: "Ella Leather Tote",
    description: "Cream pink",
    price: 145,
    image: "https://firebasestorage.googleapis.com/v0/b/one-of-many-c94a4.appspot.com/o/s.d%2Fflag%2F%D7%9B%D7%AA%D7%95%D7%9D.png?alt=media&token=2c18955b-8a30-426e-9be3-9d1ce2f76378",
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
  },
];
export const SPORT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mastermind Toys",
    description: "Brown cockroach wings",
    price: 74,
    image: productSport1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
  },
  {
    id: 2,
    name: "Jump Rope Kids",
    description: "Classic green",
    price: 68,
    image: productSport2,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
  },
  {
    id: 3,
    name: "Tee Ball Beanie",
    description: "New blue aqua",
    price: 132,
    image: productSport3,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["S", "M", "L", "XL"],
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 4,
    name: "Rubber Table Tennis",
    description: "Dark pink 2023",
    price: 28,
    image: productSport4,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
  },
  {
    id: 5,
    name: "Classic Blue Rugby",
    description: "Perfect mint green",
    price: 42,
    image: productSport5,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
  },
  {
    id: 6,
    name: "Manhattan Toy WRT",
    description: "New design 2023",
    price: 30,
    image: productSport6,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
  },
  {
    id: 7,
    name: "Tabletop Football ",
    description: "Matte black",
    price: 12,
    image: productSport7,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
  },
  {
    id: 8,
    name: "Pvc Catching Toy",
    description: "Cream pink",
    price: 145,
    image: productSport8,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
  },
];
