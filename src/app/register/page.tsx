"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  razonSocial: string;
  nit: string;
  ubicacion: string;
  direccion: string;
  telefono: string;
  correo: string;
  representante: string;
  identificacionRepresentante: string;
  correoRepresentante: string;
  directorLaboratorio: string;
  identificacionDirector: string;
  correoDirector: string;
  encargadoPlataforma: string;
  correoEncargado: string;
  telefonoEncargado: string;
  terminos: boolean;
  documentos: FileList | null;
}

const PrincipalForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    razonSocial: '',
    nit: '',
    ubicacion: '',
    direccion: '',
    telefono: '',
    correo: '',
    representante: '',
    identificacionRepresentante: '',
    correoRepresentante: '',
    directorLaboratorio: '',
    identificacionDirector: '',
    correoDirector: '',
    encargadoPlataforma: '',
    correoEncargado: '',
    telefonoEncargado: '',
    terminos: false,
    documentos: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (e.target instanceof HTMLInputElement) {
      if (type === 'checkbox') {
        setFormData({
          ...formData,
          [name]: e.target.checked,
        });
      } else if (type === 'file') {
        setFormData({
          ...formData,
          [name]: e.target.files,
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Implement your form submission logic here
  };

  return (
    <div className="container mx-auto p-6">
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Formulario de registro de laboratorios</h2>
        <h4 className="text-gray-600">Bienvenido al Laboratorio N°1 más grande del mundo</h4>
      </header>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primera Columna */}
          <div className="p-4">
            <section>
              <h3 className="font-semibold">Datos de la Empresa (Laboratorio)</h3>

              <label htmlFor="razonSocial" className="block font-medium">Nombre o Razón Social:</label>
              <input
                type="text"
                id="razonSocial"
                name="razonSocial"
                value={formData.razonSocial}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="nit" className="block font-medium">NIT:</label>
              <input
                type="text"
                id="nit"
                name="nit"
                value={formData.nit}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="ubicacion" className="block font-medium">Ubicación Dirección:</label>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="direccion" className="block font-medium">Dirección:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="telefono" className="block font-medium">Teléfono:</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="correo" className="block font-medium">Correo Electrónico:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
            </section>
          </div>

          {/* Segunda Columna */}
          <div className="p-4">
            <section>
              <h3 className="font-semibold">Datos de Contacto</h3>

              <label htmlFor="representante" className="block font-medium">Nombre Representante Legal:</label>
              <input
                type="text"
                id="representante"
                name="representante"
                value={formData.representante}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="identificacionRepresentante" className="block font-medium">Identificación:</label>
              <input
                type="text"
                id="identificacionRepresentante"
                name="identificacionRepresentante"
                value={formData.identificacionRepresentante}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="correoRepresentante" className="block font-medium">Correo Representante:</label>
              <input
                type="email"
                id="correoRepresentante"
                name="correoRepresentante"
                value={formData.correoRepresentante}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="directorLaboratorio" className="block font-medium">Director del Laboratorio:</label>
              <input
                type="text"
                id="directorLaboratorio"
                name="directorLaboratorio"
                value={formData.directorLaboratorio}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="identificacionDirector" className="block font-medium">Identificación:</label>
              <input
                type="text"
                id="identificacionDirector"
                name="identificacionDirector"
                value={formData.identificacionDirector}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="correoDirector" className="block font-medium">Correo Director:</label>
              <input
                type="email"
                id="correoDirector"
                name="correoDirector"
                value={formData.correoDirector}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
            </section>
          </div>
        </div>

        <div className="form-row-custom mt-6">
          <div className="p-4">
            <section>
              <h3 className="font-semibold">Datos del Encargado</h3>

              <label htmlFor="encargadoPlataforma" className="block font-medium">Encargado Plataforma:</label>
              <input
                type="text"
                id="encargadoPlataforma"
                name="encargadoPlataforma"
                value={formData.encargadoPlataforma}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="correoEncargado" className="block font-medium">Correo Encargado:</label>
              <input
                type="email"
                id="correoEncargado"
                name="correoEncargado"
                value={formData.correoEncargado}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full rounded"
              />

              <label htmlFor="telefonoEncargado" className="block font-medium">Teléfono Encargado:</label>
              <input
                type="text"
                id="telefonoEncargado"
                name="telefonoEncargado"
                value={formData.telefonoEncargado}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full rounded"
              />
              
              <div className="terms-custom mt-6">
              <h2>Operador de muestreo</h2>
                <input
                  type="checkbox"
                  id="terminos"
                  name="terminos"
                  checked={formData.terminos}
                  onChange={handleInputChange}
                  required
                  className="mr-2"
                />
                <label htmlFor="terminos">Si</label>
              </div>
              <div className="terms-custom mt-6">
                <input
                  type="checkbox"
                  id="terminos"
                  name="terminos"
                  checked={formData.terminos}
                  onChange={handleInputChange}
                  required
                  className="mr-2"
                />
                <label htmlFor="terminos">No</label>
              </div>
            </section>
          </div>
        </div>

        <div className="upload-section-custom mt-6">
          <h2 className="font-semibold">Cargar Documentos:</h2>
          <div className="mt-4">
            <label htmlFor="documentosCedulaRepresentante" className="block font-medium">Cédula Representante Legal:</label>
            <input
              type="file"
              id="documentosCedulaRepresentante"
              name="documentos"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="border border-gray-300 p-2 w-full rounded"
            />

            <label htmlFor="documentosCedulaLaboratorio" className="block font-medium mt-4">Cédula Dip. Laboratorio:</label>
            <input
              type="file"
              id="documentosCedulaLaboratorio"
              name="documentos"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="border border-gray-300 p-2 w-full rounded"
            />

            <label htmlFor="documentosRUT" className="block font-medium mt-4">RUT:</label>
            <input
              type="file"
              id="documentosRUT"
              name="documentos"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="border border-gray-300 p-2 w-full rounded"
            />

            <label htmlFor="documentosCamaraComercio" className="block font-medium mt-4">Cámara de Comercio:</label>
            <input
              type="file"
              id="documentosCamaraComercio"
              name="documentos"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="border border-gray-300 p-2 w-full rounded"
            />

            <label htmlFor="documentosCertificadoAcreditacion" className="block font-medium mt-4">Certificado Acreditación:</label>
            <input
              type="file"
              id="documentosCertificadoAcreditacion"
              name="documentos"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="border border-gray-300 p-2 w-full rounded"
            />

            <label htmlFor="documentosCertificadoDT" className="block font-medium mt-4">Certificado DT:</label>
            <input
              type="file"
              id="documentosCertificadoDT"
              name="documentos"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="border border-gray-300 p-2 w-full rounded"
            />

            <label htmlFor="documentosLogo" className="block font-medium mt-4">Logo:</label>
            <input
              type="file"
              id="documentosLogo"
              name="documentos"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
        </div>

        <div className="terms-custom mt-6">
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            checked={formData.terminos}
            onChange={handleInputChange}
            required
            className="mr-2"
          />
          <label htmlFor="terminos">Aceptar términos y condiciones</label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-themeColor hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default PrincipalForm;
