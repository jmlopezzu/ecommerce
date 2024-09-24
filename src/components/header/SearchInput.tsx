"use client";

import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { ProductType } from "../../../type";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import productsData from "../../app/products/bd-json/labs.json"; // Ajusta la ruta según corresponda
import DatePicker from "react-datepicker"; // Importa DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Importa los estilos de DatePicker

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const [isConMuestreo, setIsConMuestreo] = useState(false);
  const [isSinMuestreo, setIsSinMuestreo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Estado para la fecha seleccionada

  useEffect(() => {
    setProducts(productsData.laboratorios || []);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div ref={searchContainerRef} className="flex flex-col space-y-4 relative">
      <div ref={searchContainerRef} className="flex flex-col space-y-4 relative">
        {/* Contenedor de la barra de búsqueda y el botón */}
        <div className="flex items-center space-x-4">
          {/* Input Field */}
          <div className="relative flex-grow flex items-center">
            <input
              type="text"
              placeholder="¿Análisis o muestreo de laboratorio que buscas?"
              className="w-[400px] h-10 pl-4 pr-12 outline-none border-2 border-themeColor rounded-full transition duration-300 ease-in-out focus:ring-2 focus:ring-themeColor focus:border-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
            />
            {search && (
              <RiCloseLine
                onClick={() => setSearch("")}
                className="absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer transition duration-200"
              />
            )}
            <button className="absolute right-0 top-0 w-10 h-10 bg-themeColor flex items-center justify-center text-white rounded-full hover:bg-themeColor/90 transition duration-200 border border-transparent hover:border-themeColor">
              <RiSearchLine />
            </button>
          </div>
        </div>
      </div>


      {/* Checkboxes */}
      <div className="flex space-x-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="con-muestreo"
            name="muestreo"
            checked={isConMuestreo}
            onChange={() => handleCheckboxChange("con")}
            className="form-checkbox"
          />
          <label htmlFor="con-muestreo" className="ml-2">Con muestreo</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="sin-muestreo"
            name="muestreo"
            checked={isSinMuestreo}
            onChange={() => handleCheckboxChange("sin")}
            className="form-checkbox"
          />
          <label htmlFor="sin-muestreo" className="ml-2">Sin muestreo</label>
        </div>
        {/* Botón para abrir el modal */}
        <button
          onClick={openModal}
          className="relative h-10 px-4 bg-themeColor/80 flex items-center justify-center text-white rounded-full hover:bg-themeColor duration-200 border border-themeColor"
          style={{ marginLeft: "15px" }}
        >
          Búsqueda avanzada
        </button>
      </div>

      {/* Calendario para seleccionar la fecha (solo si "Con muestreo" está seleccionado) */}
      {isConMuestreo && (
        <div className="mt-2">
          <label className="block mb-1">Selecciona la fecha de la muestra:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="border border-gray-300 p-2 rounded"
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecciona una fecha"
            isClearable
          />
        </div>
      )}

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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖️
            </button>

            <form onSubmit={(e) => e.preventDefault()} className="p-4">
              <h2 className="text-xl font-bold mb-4">Búsqueda Avanzada</h2>
              {/* Añade tus campos del formulario aquí */}
              <button
                type="submit"
                className="bg-themeColor text-white px-6 py-2 rounded-full hover:bg-opacity-80 w-full"
              >
                Buscar 🔍
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
