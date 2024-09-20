"use client";
import Container from "../Container";
import { useSession } from "next-auth/react";
import Carrusel from "../icon-carrousel/Carrousel";

const BottomHeader = () => {
  const { data: session } = useSession();

  return (
    <div className="Bottomheader">
      <Container className="flex items-center justify-between py-1">
        <Carrusel/>
      </Container>
    </div>
  );
};

export default BottomHeader;
