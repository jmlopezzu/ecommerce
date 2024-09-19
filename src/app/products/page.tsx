import Container from "@/components/Container";
import ProductsSideNav from "@/components/products/ProductsSideNav";
import PaginationProductList from "@/components/products/PaginationProductList";
import productsData from "./bd-json/labs.json";  // Adjust the path accordingly

const ProductsPage = () => {
  const { laboratorios } = productsData;

  return (
    <Container className="py-10">
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden md:inline-flex h-full">
          <ProductsSideNav />
        </div>
        <PaginationProductList products={laboratorios} />
      </div>
    </Container>
  );
};

export default ProductsPage;
