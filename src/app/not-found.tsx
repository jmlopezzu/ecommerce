import { notFound } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container className="flex flex-col gap-2 items-center py-10">
      <Image src={notFound} alt="notFound-image" className="max-w-60" />
      <p className="text-xl font-semibold">Oops! Page not found</p>
      <p className="text-sm text-gray-500 max-w-80 text-center">
        Whoops,one moment. No encontramos la pagina que buscas
      </p>
      <Button href="/">Volver al inicio</Button>
    </Container>
  );
};

export default NotFoundPage;
