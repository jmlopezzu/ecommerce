"use client";
import Container from "../Container";
import { useSession } from "next-auth/react";

const BottomHeader = () => {
  const { data: session } = useSession();

  return (
    <div className="Bottomheader">
      <Container className="flex items-center justify-between py-1">
        <p></p>
      </Container>
    </div>
  );
};

export default BottomHeader;
