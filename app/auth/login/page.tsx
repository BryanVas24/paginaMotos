"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl font-black text-davys-gray ">Iniciar sesion</h1>
      <p className="text-2xl font-light text-davys-gray mt-5 mb-5">
        Para adquirir una motocileta {""}
        <span className=" text-paynes-gray font-bold">
          {" "}
          inicia sesion en este formulario
        </span>
      </p>
      <form
        onSubmit={() => {}}
        className="space-y-8 p-10 bg-white w-3/4 md:w-1/2 shadow-md"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Email</label>

          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full p-3  border-gray-300 border"
          />
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>

          <input
            type="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border"
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-stone-700 hover:bg-stone-800 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>
      <nav className="flex flex-col space-y-4">
        <Link
          className="text-center  text-davys-gray  font-normal"
          href={"/auth/register"}
        >
          ¿No tienes una cuenta?{" "}
          <span className=" text-paynes-gray font-bold">Crear una</span>
        </Link>
        <Link
          className="text-center text-davys-gray  font-normal"
          href={"/auth/forgot-password"}
        >
          ¿Olvidaste tu contraseña?{" "}
          <span className=" text-paynes-gray font-bold">Restablecer</span>
        </Link>
      </nav>
    </main>
  );
}
