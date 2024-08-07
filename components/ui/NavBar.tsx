import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="flex flex-col gap-10 md:flex-row justify-between bg-platinum">
      <Link href={"/"}>
        <Logo />
      </Link>

      <div>
        <Link href={"/"}>Inicio</Link>
        <Link href={"/motos"}>Motos</Link>
        <Link href={"/contacto"}>Contacto</Link>
      </div>
    </nav>
  );
}
