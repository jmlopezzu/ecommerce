import { bannerImageOne } from "@/assets";

export const navigation = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Categories", href: "/categories" },
  { title: "Offers", href: "/offers" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const banner = {
  _id: 1001,
  priceText: "Desde $999.90",
  title: "Analisis internacionales de alta calidad",
  textOne: "Oferta",
  offerPrice: "-30%",
  textTwo: "off, sep 18",
  buttonLink: "/products",
  image: bannerImageOne,
};
