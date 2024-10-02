import React from 'react';
import './PanelLaboratorios.css'; // Archivo CSS para el estilo
import SimpleHeader from '@/components/header/SimpleHeader';

const laboratorios = [
  { id: 1, nombre: 'Laboratorio Químico', estado: 'Disponible' },
  { id: 2, nombre: 'Laboratorio Biológico', estado: 'Mantenimiento' },
  { id: 3, nombre: 'Laboratorio Físico', estado: 'Disponible' },
];

const PanelLaboratorios = () => {
  return (
    <div className="panel-container">
      <SimpleHeader />
      <h1>Panel de Laboratorios</h1>
      <p>Bienvenido, aquí puedes gestionar los servicios de laboratorio autorizados:</p>
      <div className="laboratorios-lista">
        {laboratorios.map(laboratorio => (
          <div key={laboratorio.id} className="laboratorio-item">
            <h2>{laboratorio.nombre}</h2>
            <p>Estado: <span className={laboratorio.estado === 'Disponible' ? 'estado-disponible' : 'estado-mantenimiento'}>{laboratorio.estado}</span></p>
            <button className="btn-gestion">Gestionar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelLaboratorios;
