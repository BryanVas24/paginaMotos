"use client";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserSchema } from "@/src/schemas";
import { createUser } from "@/actions/register-action";

export default function RegisterPage() {
  const router = useRouter();

  const RegistUserFunc = async (formData: FormData) => {
    //tomando los datos del formData
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    };
    //comparandolos con el esquema de usuario
    const userData = UserSchema.safeParse(data);
    //si algo no cuadra tira error
    if (!userData.success) {
      userData.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    const response = await createUser(data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    toast.success("Usuario creado correctamente");
    router.push("/auth/login");
  };

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
      <section className="flex flex-col gap-5 items-center">
        <h1 className="text-5xl font-black text-davys-gray ">Registrate</h1>
        <p className="text-2xl font-light text-davys-gray ">
          Para adquirir una motocicleta {""}
          <span className=" text-paynes-gray font-bold">
            {" "}
            Regístrate llenando el formulario
          </span>
        </p>
        <form
          action={RegistUserFunc}
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
                name="name"
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
                name="phone"
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
                name="email"
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
                name="password"
                id="password"
                type="password"
                placeholder="Password de Registro"
                className="w-full p-3 border-gray-300 border"
              />
            </div>
          </div>

          <input
            type="submit"
            value="Registrarse"
            className="bg-stone-700 hover:bg-stone-800 w-full p-3 text-white font-black text-xl cursor-pointer"
          />
        </form>
        <nav className="flex flex-col space-y-4 mb-3">
          <Link
            className="text-center  text-davys-gray  font-normal"
            href={"/auth/login"}
          >
            ¿Ya tienes una cuenta?{" "}
            <span className=" text-paynes-gray font-bold">Iniciar sesión</span>
          </Link>
        </nav>
      </section>
    </main>
  );
}
