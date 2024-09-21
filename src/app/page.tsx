import Banner from "@/components/pages/home/Banner";
import productsData from "./products/bd-json/categorias.json";
import CategoryList from "@/components/CategoryList";
import Carrusel from "@/components/icon-carrousel/Carrousel";

export default async function Home() {
  const { categorias } = productsData;
  return (
    <main>     
      <Carrusel/>
      <CategoryList product={{categorias}} />
      <Banner />
    </main>
  );
}
