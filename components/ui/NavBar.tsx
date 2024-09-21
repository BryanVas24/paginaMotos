"use client";
import Link from "next/link";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  // Obteniendo la sesión actual
  const { data: sessionGoogle } = useSession();
  let userName = ``;
  //Tomando solo el primer nombre y apellido
  if (sessionGoogle?.user.name) {
    const fullName = sessionGoogle.user.name?.split(" ");
    userName = `${fullName[0]} ${fullName[2] || ""}`;
  }

  return (
    <nav className="flex flex-col gap-10 md:flex-row justify-evenly items-center bg-platinum ">
      <Link href={"/"}>
        <Logo />
      </Link>

      <div className="flex gap-5 flex-col md:flex-row  items-center text-xl font-medium">
        <Link className="hover:text-davys-gray " href={"/"}>
          Inicio
        </Link>
        <Link className="hover:text-davys-gray" href={"/servicios"}>
          Motos
        </Link>
        <Link className="hover:text-davys-gray" href={"/contacto"}>
          Contacto
        </Link>
        {!sessionGoogle ? (
          <>
            {" "}
            <Link
              className="border border-davys-gray bg-paynes-gray px-2 hover:bg-davys-gray text-alice-blue "
              href={"/auth/login"}
            >
              Iniciar sesión
            </Link>
            <Link
              className="border border-davys-gray bg-paynes-gray px-2 hover:bg-davys-gray text-alice-blue mb-5 md:mb-0 "
              href={"/auth/register"}
            >
              Registrarse
            </Link>
          </>
        ) : (
          <div className="flex flex-col">
            <p className="text-davys-gray">{userName}</p>
            <button
              className="border border-davys-gray bg-paynes-gray px-2 hover:bg-davys-gray text-alice-blue"
              onClick={() => signOut()}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
