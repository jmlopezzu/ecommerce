import Container from "@/components/Container";
import Title from "@/components/Title";
import Button from "@/components/ui/Button";
import React from "react";

const CancelPage = () => {
  return (
    <Container className="py-10">
      <Title>El proceso de pago ha sido cancelado</Title>
      <p className="text-base tracking-wide max-w-3xl mt-1">
        Estaremos disponibles en cualquier otro momento, continua el proceso de pago o vuelve a intentar cuando gustes!
      </p>
      <div className="mt-5 flex items-center gap-x-5">
        <Button href="/" className=" rounded-md">
          Continuar compra
        </Button>
        <Button href="/cart" className=" rounded-md">
          Ver Carrito
        </Button>
      </div>
    </Container>
  );
};

export default CancelPage;
