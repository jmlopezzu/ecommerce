import Image from "next/image";
import Container from "./Container";
import { logo } from "@/assets";
import SocialLink from "./SocialLink";
import Title from "./Title";
import { FaFacebook } from "react-icons/fa";
import { navigation } from "@/constants";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-lightBg py-10 lg:py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col items-start gap-y-5">
          <Link href={"/"}>
            <Image src={logo} style={{width:'150px', margin:'20px'}} alt="logo" />
          </Link>
          <p>
            El laboratorio mas grande del mundo,
          </p>
          <p> a tu medida.</p>
          <SocialLink />
        </div>
        <div>
          <Title>Mi perfil</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Information</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Talk to Us</Title>
          <div className="mt-3">
            <div>
              <p className="text-sm">Alguna pregunta? Llamanos</p>
              <Title>+57 313 7374103</Title>
            </div>
            <div className="mt-3">
              <p className="text-base flex items-center gap-x-3 text-gray-600">
                <BsEnvelopeAt /> companytestlab@gmail.com
              </p>
              <p className="text-base flex items-center gap-x-3 text-gray-600">
                <GrLocation /> Colombia, Manizales
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
