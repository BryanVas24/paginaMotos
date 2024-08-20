import Link from "next/link";
import { cardsInfo } from "@/src/utils/HomeInfo";
import Card from "@/components/ui/Card";
import Image from "next/image";
import {
  FaThumbsUp,
  FaDollarSign,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header className=" bg-blend-multiply bg-no-repeat bg-cover bg-center bg-[url(/Banner.PNG)] h-[70vh] bg-gray-500">
        <div className=" flex  justify-center items-center md:items-end flex-col gap-5 h-full ">
          <h1 className=" text-center text-5xl  font-bold text-alice-blue md:w-1/2 ">
            Define tu ruta, nosotros la haremos inolvidable.
          </h1>
          <p className="md:w-2/4 text-center text-xl font-bold text-alice-blue  ">
            Ingresa para adquirir tu próxima aventura sobre dos ruedas.
          </p>
          <Link
            className="border border-davys-gray p-2 rounded-sm font-bold mx-5 w-4/5 hover:shadow  bg-platinum text-center hover:bg-slate-300 text-davys-gray mb-5  md:w-1/2"
            href={"/auth/register"}
          >
            Registrarse
          </Link>
        </div>
      </header>
      <h2 className=" text-center text-4xl  font-bold text-davys-gray my-5 ">
        Estos son algunos de los servicios que ofrecemos
      </h2>
      <section className="flex flex-wrap w-full justify-evenly  bg-platinum">
        {cardsInfo.map((service) => (
          <Card key={service.title} card={service} />
        ))}
      </section>
      <section className="flex flex-wrap w-full justify-evenly ">
        <div className="w-full md:w-1/2 ">
          <h2 className="text-center text-4xl font-bold text-davys-gray my-5 ">
            ¿Por qué comprar con nosotros?
          </h2>

          <div className="flex flex-col space-y-4 px-14 gap-5 mb-5">
            <div className="flex items-center">
              <FaThumbsUp className="text-4xl text-primary mr-3  text-davys-gray" />
              <p className="text-lg text-davys-gray">
                <strong>Calidad garantizada:</strong> Nuestros productos son
                seleccionados y probados para asegurarnos de que recibas lo
                mejor.
              </p>
            </div>

            <div className="flex items-center">
              <FaDollarSign className="text-4xl text-primary mr-3  text-davys-gray" />
              <p className="text-lg text-davys-gray">
                <strong>Precios competitivos:</strong> Ofrecemos las mejores
                ofertas del mercado sin comprometer la calidad.
              </p>
            </div>

            <div className="flex items-center ">
              <FaShippingFast className="text-4xl text-primary mr-3  text-davys-gray" />
              <p className="text-lg text-davys-gray">
                <strong>Envíos rápidos:</strong> Recibe tus compras en tiempo
                récord con nuestro servicio de entrega eficiente.
              </p>
            </div>

            <div className="flex items-center">
              <FaHeadset className="text-4xl text-primary mr-3  text-davys-gray" />
              <p className="text-lg text-davys-gray">
                <strong>Atención al cliente:</strong> Nuestro equipo de soporte
                está disponible para resolver tus dudas en cualquier momento.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            alt="imagen de motocicleta"
            width={500}
            height={500}
            src={"/homeImage.jpg"}
          />
        </div>
      </section>
      <section className="flex flex-wrap w-full justify-evenly bg-platinum flex-col-reverse md:flex-row ">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            alt="imagen de motocicleta"
            width={500}
            height={500}
            src={"/homeImage2.webp"}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3 mb-5 ">
          <h2 className="text-center text-4xl font-bold text-davys-gray my-5 ">
            ¿Quienes somos?
          </h2>
          <p className="text-justify text-xl px-10">
            Somos una empresa apasionada por el mundo de las motocicletas,
            dedicada a proporcionar a nuestros clientes los mejores repuestos y
            motocicletas del mercado.
          </p>
          <p className="text-justify text-xl px-10">
            {" "}
            Con años de experiencia en el sector, entendemos las necesidades de
            los motociclistas y nos esforzamos por ofrecer productos de alta
            calidad que aseguren tu seguridad y rendimiento en la carretera.
          </p>
          <p className="text-justify text-xl px-10">
            Nos enorgullece brindar un servicio excepcional, asesoramiento
            experto y soluciones que se adaptan a todos los presupuestos,
            garantizando que cada cliente encuentre exactamente lo que necesita
            para mantener su moto en perfecto estado.
          </p>
        </div>
      </section>
      <section className="flex flex-wrap w-full justify-evenly  py-10">
        <div className="w-1/3 text-center">
          <div className="text-5xl font-bold text-davys-gray mb-2">3</div>
          <p className="text-xl ">Regiones a nivel nacional.</p>
        </div>

        <div className="w-1/3 text-center">
          <div className="text-5xl font-bold text-davys-gray mb-2">∞</div>
          <p className="text-xl ">Motos de toda marca y diseños.</p>
        </div>

        <div className="w-1/3 text-center">
          <div className="text-5xl font-bold text-davys-gray mb-2">100%</div>
          <p className="text-xl ">Calidad garantizada.</p>
        </div>
      </section>
    </>
  );
}
