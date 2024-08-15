import Image from "next/image";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactoPage() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <h1 className="text-5xl font-black text-davys-gray ml-4 mb-5">
            Contacta con nosotros
          </h1>
          <p className="text-xl text-davys-gray mx-7 text-justify">
            Estamos aquí para ayudarte. Si tienes alguna pregunta, sugerencia o
            necesitas asistencia, no dudes en comunicarte con nosotros. Nuestro
            equipo está disponible para brindarte la mejor atención posible.
            Puedes escribirnos a través de nuestras redes sociales, enviarnos un
            correo electrónico, o llamarnos directamente. ¡Tu opinión es muy
            importante para nosotros!
          </p>
          <div className="flex space-x-4 ml-7 mt-10 justify-center gap-10 mb-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-paynes-gray text-6xl transition-colors duration-300 hover:text-blue-600" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="text-paynes-gray text-6xl transition-colors duration-300 hover:text-black" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="text-paynes-gray text-6xl transition-colors duration-300 hover:text-pink-600" />
            </a>
            <a
              href="https://wa.me/tu-numero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="text-paynes-gray text-6xl transition-colors duration-300 hover:text-green-500" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Imagen de mecánico de motos"
            src={"/contactImage1.jpg"}
            width={600}
            height={600}
          />
        </div>
      </section>
    </main>
  );
}
