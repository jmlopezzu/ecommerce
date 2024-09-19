import Banner from "@/components/pages/home/Banner";
import ProductList from "@/components/ProductList";
import productsData from "./products/bd-json/labs.json";

export default async function Home() {
  const { laboratorios } = productsData;
  return (
    <main>
      <Banner />
      <ProductList product={{laboratorios}} />
    </main>
  );
}
