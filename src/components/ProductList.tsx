import Image from "next/image";
import Container from "./Container";
import { ProductType } from "../../type";
import { MdStar } from "react-icons/md";
import ProductCard from "./ProductCard";

interface Props {
  product: {
    laboratorios?: ProductType[];  // Opción para laboratorios
    categorias?: ProductType[];    // Opción para categorías
  };
}

const ProductList = ({ product }: Props) => {
  // Comprobar si existen laboratorios o categorías
  const productsArray = product?.laboratorios || product?.categorias;

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {productsArray?.map((item: ProductType) => (
        <ProductCard key={item?.id} product={item} />
      ))}
    </Container>
  );
};

export default ProductList;
