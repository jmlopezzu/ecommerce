"use client";

import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { ProductType } from "../../../type";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import productsData from "../../app/products/bd-json/labs.json"; // Adjust the path accordingly

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const [isConMuestreo, setIsConMuestreo] = useState(false);
  const [isSinMuestreo, setIsSinMuestreo] = useState(false);

  useEffect(() => {
    setProducts(productsData.laboratorios || []); // Assuming productsData has a products field
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) =>
      item?.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsInputFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckboxChange = (checkbox: string) => {
    if (checkbox === "con") {
      setIsConMuestreo(!isConMuestreo);
    } else {
      setIsSinMuestreo(!isSinMuestreo);
    }
  };

  return (
    <div ref={searchContainerRef} className="flex items-center space-x-4 relative">
      {/* Input Field */}
      <div className="relative flex-grow flex items-center">
        <input
          type="text"
          placeholder="¿Análisis o muestreo de laboratorio que buscas?"
          className="w-[400px] h-10 pl-4 pr-12 outline-none border-2 border-themeColor rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
        />
        {search && (
          <RiCloseLine
            onClick={() => setSearch("")}
            className="absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
          />
        )}
        <button className="absolute right-0 top-0 w-10 h-10 bg-themeColor/80 flex items-center justify-center text-white rounded-full hover:bg-themeColor duration-200 border border-themeColor">
          <RiSearchLine />
        </button>
      </div>

      

      {/* Checkboxes */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="con-muestreo"
            name="muestreo"
            checked={isConMuestreo}
            onChange={() => handleCheckboxChange("con")}
            className="form-checkbox"
          />
          <label htmlFor="con-muestreo">Con muestreo</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="sin-muestreo"
            name="muestreo"
            checked={isSinMuestreo}
            onChange={() => handleCheckboxChange("sin")}
            className="form-checkbox"
          />
          <label htmlFor="sin-muestreo">Sin muestreo</label>
        </div>
      </div>
      {/* Botón de redirección */}
      <a href="/otra-pagina">
        <button className="relative w-30 h-15 bg-themeColor/80 flex items-center justify-center text-white rounded-full hover:bg-themeColor duration-200 border border-themeColor">
          Busqueda avanzada
        </button>
      </a>
  

      {/* Filtered Results Dropdown */}
      {isInputFocused && search && (
        <div className="absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
          {filteredProducts?.length > 0 ? (
            <div className="flex flex-col">
              {filteredProducts?.map((item) => (
                <Link
                  key={item?.id}
                  href={`/products/${item?.id}`}
                  onClick={() => setSearch("")}
                  className="flex items-center gap-x-2 text-base font-medium hover:bg-lightText/30 px-3 py-1.5"
                >
                  <CiSearch className="text-lg" /> {item?.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-10 px-5">
              <p className="text-base">
                No encontramos coincidencias en la búsqueda de:{" "}
                <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                  {search}
                </span>{" "}
                Por favor intenta de nuevo.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
