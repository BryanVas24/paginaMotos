"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    //aca se crea un nuevo elemento de formData
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    //validando que los campos lleven algo
    if (!data.email || !data.password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("tokenMotos", token);
        router.push("/");
      } else {
        const { message } = await response.json();
        toast.error(message);
      }
    } catch (error) {
      toast.error("Error en el inicio de sesión");
    }
  };
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
        onSubmit={handleLogin}
        className="space-y-8 p-10 bg-white w-3/4 md:w-1/2 shadow-md"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email de Registro"
            className="w-full p-3  border-gray-300 border"
          />
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Password de Registro"
            className="w-full p-3  border-gray-300 border"
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-stone-700 hover:bg-stone-800 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="bg-stone-700 hover:bg-stone-800 w-full p-3 mt-4 text-white font-black text-xl  flex justify-center items-center gap-5"
        >
          <FcGoogle />
          Iniciar sesión con Google
        </button>
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
