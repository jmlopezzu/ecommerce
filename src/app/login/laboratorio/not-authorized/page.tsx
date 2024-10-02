import React from 'react';
import './not-auth.css'; // Archivo CSS para el estilo
import SimpleHeader from '@/components/header/SimpleHeader';

const Bienvenida = () => {
  return (
    <>
    <SimpleHeader/>
    <div className="bienvenida-container">
      <div className="bienvenida-card">
        <h1>¡¡ BIENVENIDO A TEST !!</h1>
        <p>Nuestro equipo iniciará la verificación de la información suministrada.</p>
        <p>En dos días recibirás confirmación del registro al correo del encargado de la plataforma, para habilitar el registro de los servicios de laboratorio.</p>
      </div>
    </div>
    </>
  );
};

export default Bienvenida;
