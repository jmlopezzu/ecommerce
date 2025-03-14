"use client";
import Container from "../Container";
import Image from "next/image";
import { useEffect } from "react";
// import { LiaUser } from "react-icons/lia";
import { MdFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import Link from "next/link";
import { logo } from "@/assets";
import { RiMenu3Fill } from "react-icons/ri";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "@/redux/shofySlice";
import { StateType } from "../../../type";
import SearchInput from "./SearchInput";
import UserIcon from "./UserIcon";

const MiddleHeader = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: StateType) => state?.shopy);

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      dispatch(addUser(session?.user));
    } else {
      dispatch(removeUser());
    }
  }, [session?.user]);

  return (
    <div className="border-b-[1px] border-b-gray-400">
      <Container className="py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-28" />
        </Link>
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-3">
          {/* User */}
          {session?.user ? (
            <Link
              href={"/profile"}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="border border-gray-500 w-10 h-10 rounded-full text-xl">
                <Image
                  src={session?.user?.image!}
                  alt="userImage"
                  width={200}
                  height={200}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <p className="text-xs">Hola, {session?.user?.name}</p>
                <Link href={"/profile"} className="text-sm">
                  Ver Perfil
                </Link>
              </div>
            </Link>
          ) : (
              <div>
                <Link href={"/register"} className="text-sm">
                <p className="text-sm"> Registra tu Laboratorio en Testlab</p>
                </Link>
              </div>
          )}
          {/* Favorite Icon */}
          <Link href={"/favorite"} className="text-2xl relative">
            <MdFavoriteBorder />
            <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          {/* Cart Icon */}
          <Link href="/cart" className="text-2xl relative">
            <BiShoppingBag />
            <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
              {cart?.length > 0 ? cart?.length : "0"}
            </span>
          </Link>
          {/* <div
              onClick={() => signIn()}
              className="flex items-center gap-2 cursor-pointer"
            > */}
          {/* <div className="border-2 border-gray-700 p-1.5 rounded-full text-xl">
                <LiaUser />
              </div> */}
              <UserIcon/>
          {/* </div> */}
        </div>
        
        <div className="text-3xl md:hidden text-gray-500 hover:text-themeColor duration-200 cursor-pointer">
          <RiMenu3Fill />
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
