"use client";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <section className="flex justify-center items-center">
        <Image
          width={500}
          height={500}
          src={"/fotoRegister.png"}
          alt="Imagen de registro"
        />
      </section>
      <section>
        <h1 className="text-5xl font-black text-davys-gray ">Registrate</h1>
        <p className="text-2xl font-light text-davys-gray mt-5 mb-5">
          Para adquirir una motocileta {""}
          <span className=" text-paynes-gray font-bold">
            {" "}
            Regitrate llenando el formulario
          </span>
        </p>
        <form
          onSubmit={() => {}}
          className="space-y-8 p-10 bg-white w-3/4 shadow-md grid "
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-normal text-2xl">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="nombre de Registro"
                className="w-full p-3 border-gray-300 border"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-normal text-2xl">
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Teléfono de Registro"
                className="w-full p-3 border-gray-300 border"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-normal text-2xl">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email de Registro"
                className="w-full p-3 border-gray-300 border"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-normal text-2xl">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password de Registro"
                className="w-full p-3 border-gray-300 border"
              />
            </div>
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-stone-700 hover:bg-stone-800 w-full p-3 text-white font-black text-xl cursor-pointer"
          />
        </form>
      </section>
    </main>
  );
}
