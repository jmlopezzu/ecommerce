"use client";

import { useState } from 'react';

const AdvancedSearch = () => {
  // Estado para cada campo del formulario
  const [searchData, setSearchData] = useState({
    keyword: '',
    methodCode: '',
    matrix: '',
    city: '',
    accreditationBody: '',
    variable: ''
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value
    });
  };

  // Manejar la acción de búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos de búsqueda:', searchData);
    // Aquí puedes agregar la lógica para realizar la búsqueda
  };

  return (
    <form onSubmit={handleSearch} className="p-4">
      <h2 className="text-xl font-bold mb-4">Búsqueda Avanzada</h2>

      {/* Palabra Clave */}
      <div className="mb-4">
        <label htmlFor="keyword" className="block font-medium">
          Palabra Clave:
        </label>
        <input
          type="text"
          id="keyword"
          name="keyword"
          value={searchData.keyword}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full"
        />
      </div>

      {/* Código Método (Estándar) */}
      <div className="mb-4">
        <label htmlFor="methodCode" className="block font-medium">
          Código Método (Estándar):
        </label>
        <input
          type="text"
          id="methodCode"
          name="methodCode"
          value={searchData.methodCode}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full"
        />
      </div>

      {/* Matriz */}
      <div className="mb-4">
        <label htmlFor="matrix" className="block font-medium">
          Matriz:
        </label>
        <input
          type="text"
          id="matrix"
          name="matrix"
          value={searchData.matrix}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full"
        />
      </div>

      {/* Ciudad del Servicio */}
      <div className="mb-4">
        <label htmlFor="city" className="block font-medium">
          Ciudad del Servicio:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={searchData.city}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full"
        />
      </div>

      {/* Ente Acreditador */}
      <div className="mb-4">
        <label htmlFor="accreditationBody" className="block font-medium">
          Ente Acreditador:
        </label>
        <input
          type="text"
          id="accreditationBody"
          name="accreditationBody"
          value={searchData.accreditationBody}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full"
        />
      </div>

      {/* Variable */}
      <div className="mb-4">
        <label htmlFor="variable" className="block font-medium">
          Variable:
        </label>
        <input
          type="text"
          id="variable"
          name="variable"
          value={searchData.variable}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full"
        />
      </div>

      {/* Botón de búsqueda */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Buscar 🔍
      </button>
    </form>
  );
};

export default AdvancedSearch;