import Image from "next/image";
import Container from "./Container";
import { ProductType } from "../../type";
import { MdStar } from "react-icons/md";
import CategoryCard from "./CategoryCard";

interface Props {
  product: {
    categorias?: ProductType[];    // Opción para categorías
  };
}

const CategoryList = ({ product }: Props) => {
  // Comprobar si existen laboratorios o categorías
  const productsArray = product?.categorias;

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {productsArray?.map((item: ProductType) => (
        <CategoryCard key={item?.id} product={item} />
      ))}
    </Container>
  );
};

export default CategoryList;
