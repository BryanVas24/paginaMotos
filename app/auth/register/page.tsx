"use client";
import ErrorMessage from "@/components/ErrorMessage";
import { UserRegisterForm } from "@/src/types";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const initialValues: UserRegisterForm = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterForm>({
    defaultValues: initialValues,
  });

  const router = useRouter();

  const RegistUserFunc = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      categoryId: formData.get("categoryId"),
      image: formData.get("image"),
    };
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Usuario registrado correctamente");
        reset();
        router.push("/auth/login"); // Redirige al login después de registrar
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Error al registrar el usuario");
      }
    } catch (error) {
      toast.error("Error al registrar el usuario");
    }
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
          onSubmit={handleSubmit(RegistUserFunc)}
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
                {...register("name", {
                  required: "El Nombre de usuario es obligatorio",
                })}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
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
                {...register("phone", {
                  required: "El teléfono de registro es obligatorio",
                  minLength: {
                    value: 8,
                    message: "El teléfono debe ser mínimo de 8 caracteres",
                  },
                  maxLength: {
                    value: 8,
                    message: "El teléfono debe ser máximo de 8 caracteres",
                  },
                })}
              />
              {errors.phone && (
                <ErrorMessage>{errors.phone.message}</ErrorMessage>
              )}
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
                {...register("email", {
                  required: "El Email de registro es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  },
                })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
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
                {...register("password", {
                  required: "El Password es obligatorio",
                  minLength: {
                    value: 8,
                    message: "El Password debe ser mínimo de 8 caracteres",
                  },
                })}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-stone-700 hover:bg-stone-800 w-full p-3 text-white font-black text-xl cursor-pointer"
          />
        </form>
        <nav className="flex flex-col space-y-4">
          <Link
            className="text-center  text-davys-gray  font-normal"
            href={"/auth/login"}
          >
            ¿Ya tienes una cuenta?{" "}
            <span className=" text-paynes-gray font-bold">Iniciar sesión</span>
          </Link>
          <Link
            className="text-center text-davys-gray  font-normal"
            href={"/auth/forgot-password"}
          >
            ¿Olvidaste tu contraseña?{" "}
            <span className=" text-paynes-gray font-bold">Restablecer</span>
          </Link>
        </nav>
      </section>
    </main>
  );
}
