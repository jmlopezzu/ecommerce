'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SimpleHeader from '@/components/header/SimpleHeader';

const LaboratoryLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para procesar el login
    console.log('Login para laboratorios:', { email, password });
    // Redirige o realiza la autenticación
    router.push('/dashboard/laboratorio'); // Redirigir a la página del dashboard del laboratorio
  };

  return (
    <>
    <SimpleHeader/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login Laboratorio</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mt-1"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-themeColor text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default LaboratoryLogin;
