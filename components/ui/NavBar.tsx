import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="flex flex-col gap-10 md:flex-row justify-evenly items-center bg-platinum ">
      <Link href={"/"}>
        <Logo />
      </Link>

      <div className="flex gap-5 flex-col md:flex-row  items-center text-xl font-medium">
        <Link className="hover:text-davys-gray " href={"/"}>
          Inicio
        </Link>
        <Link className="hover:text-davys-gray" href={"/motos"}>
          Motos
        </Link>
        <Link className="hover:text-davys-gray" href={"/contacto"}>
          Contacto
        </Link>
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
      </div>
    </nav>
  );
}
