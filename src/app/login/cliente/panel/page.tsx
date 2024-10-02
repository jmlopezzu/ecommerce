'use client';

import React from 'react';
import './PortalCliente.css';
import Header from '@/components/header/Header';

const PortalCliente = ({  }) => {
  return (
    <>
    <Header />
    <div className="portal-container">
      <header className="portal-header">
        <h1>Bienvenido, {cliente.nombre}</h1>
        <p>Accede a los servicios disponibles a continuación:</p>
      </header>
      
      <section className="portal-servicios">
        <div className="servicio-item">
          <h2>Historial de Pedidos</h2>
          <p>Revisa tus pedidos anteriores y el estado de entrega.</p>
          <button className="btn-servicio">Ver historial</button>
        </div>
        
        <div className="servicio-item">
          <h2>Soporte Técnico</h2>
          <p>Contacta a nuestro equipo de soporte para resolver problemas.</p>
          <button className="btn-servicio">Solicitar soporte</button>
        </div>

        <div className="servicio-item">
          <h2>Servicios de Laboratorio</h2>
          <p>Accede a los servicios de laboratorio disponibles para ti.</p>
          <button className="btn-servicio">Ver servicios</button>
        </div>
      </section>
      
      <footer className="portal-footer">
        <button className="btn-cerrar-sesion">Cerrar Sesión</button>
      </footer>
    </div>
    </>
  );
};

// Ejemplo de cliente que inicia sesión
const cliente = {
  nombre: 'Juan Pérez',
  email: 'juan.perez@example.com',
};

export default function App() {
  return <PortalCliente />
  //cliente={cliente} />;
}
