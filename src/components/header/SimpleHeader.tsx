"use client";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets";

const SimpleHeader = () => {


  return (
    <div className="border-b-[0px] border-b-gray-400">
      <Container className="py-5 flex items-right gap-4 md:gap-6 lg:gap-20 justify-end ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-16" />
        </Link>
      </Container>
      </div>
  );
};

export default SimpleHeader;
