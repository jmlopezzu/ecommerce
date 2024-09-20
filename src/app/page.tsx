import Banner from "@/components/pages/home/Banner";
import ProductList from "@/components/ProductList";
import productsData from "./products/bd-json/categorias.json";

export default async function Home() {
  const { categorias } = productsData;
  return (
    <main>
      <Banner />
      <ProductList product={{categorias}} />
    </main>
  );
}
