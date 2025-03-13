'use client'; // Necesario para usar hooks en componentes del App Router

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Este es el hook para redirigir en el App Router
import { LiaUser } from 'react-icons/lia';

const UserIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(); // Hook de redirección para el App Router

  // Función para abrir el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Redirigir a la página de login de laboratorios
  const handleLaboratoryLogin = () => {
    router.push('/login/laboratorio'); // Cambia esta ruta según la estructura en tu carpeta app
    setIsModalOpen(false); // Cierra el modal
  };

  // Redirigir a la página de login de clientes
  const handleClientLogin = () => {
    router.push('/login/cliente'); // Cambia esta ruta según la estructura en tu carpeta app
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <div>
      {/* Ícono de usuario */}
      <div onClick={handleOpenModal} className="text-2xl relative cursor-pointer">
        <div className="border-2 border-gray-700 p-1.5 rounded-full text-xl">
          <LiaUser />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center mt-4 mr-4">
            <h2 className="text-xl mb-4">¿Eres laboratorio o buscas un servicio de analisis?</h2>
            <div className="flex gap-4 justify-center">
              <button
                className="bg-themeColor text-white py-2 px-4 rounded-full hover:bg-blue-600"
                onClick={handleLaboratoryLogin}
              >
               Soy un Laboratorio
              </button>
              <button
                className="bg-themeColor text-white py-2 px-4 rounded-full hover:bg-green-600"
                onClick={handleClientLogin}
              >
                Servicio de analisis
              </button>
            </div>
            <button
              className="mt-4 text-gray-500 underline"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserIcon;
