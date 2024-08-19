import Link from "next/link";
import { cardsInfo } from "@/src/utils/HomeInfo";
import Card from "@/components/ui/Card";

export default function Home() {
  console.log(cardsInfo);
  return (
    <>
      <header className=" bg-blend-multiply bg-no-repeat bg-cover bg-center bg-[url(/Banner.PNG)] h-[70vh] bg-gray-500">
        <div className=" flex  justify-center items-center md:items-end flex-col gap-5 h-full ">
          <h1 className=" text-center md:text-5xl text-3xl font-bold text-alice-blue md:w-1/2 ">
            Marca tu estilo Nosotros lo haremos brillar
          </h1>
          <p className="md:w-2/4 text-center text-xl font-bold text-alice-blue  ">
            Ingresa para poder reservar tu corte
          </p>
          <Link
            className="border border-davys-gray p-2 rounded-sm font-bold mx-5 w-4/5 hover:shadow  bg-platinum text-center hover:bg-slate-300 text-davys-gray mb-5  md:w-1/2"
            href={"/auth/register"}
          >
            Registrarse
          </Link>
        </div>
      </header>
      <section className="flex flex-wrap w-full justify-evenly  bg-platinum">
        {cardsInfo.map((service) => (
          <Card key={service.title} card={service} />
        ))}
      </section>
    </>
  );
}
