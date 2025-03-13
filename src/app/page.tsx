import Banner from "@/components/pages/home/Banner";
import productsData from "./products/bd-json/categorias.json";
import CategoryList from "@/components/CategoryList";
import Carrusel from "@/components/icon-carrousel/Carrousel";
import Header from "@/components/header/Header";

export default async function Home() {
  const { categorias } = productsData;
  return (
    <main> 
      <Header />   
      <Carrusel/>
      <Banner />
      <CategoryList product={{categorias}} />
    </main>
  );
}
