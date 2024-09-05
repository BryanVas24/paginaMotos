import Image from "next/image";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactoPage() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 mb-10">
        <div>
          <h1 className="text-5xl font-black text-davys-gray text-center mb-5">
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
            className="mt-5"
            height={600}
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 bg-platinum ">
        <div className="mt-5">
          <h2 className="text-5xl font-black text-davys-gray text-center mb-5">
            Nuestros horarios
          </h2>
          <p className="text-center text-davys-gray text-2xl  mb-5">
            Lunes a viernes{" "}
            <span className=" text-paynes-gray font-bold">
              {" "}
              8:00 am - 7:00 pm
            </span>
          </p>
          <p className="text-center text-davys-gray text-2xl mb-5">
            Sabado y Domingo{" "}
            <span className=" text-paynes-gray font-bold">
              {" "}
              10:00 am - 4:00 pm
            </span>
          </p>
          <p className="text-center text-davys-gray text-2xl ">
            Miercoles{" "}
            <span className=" text-paynes-gray font-bold"> CERRADO</span>
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-5xl font-black text-davys-gray text-center mb-5">
            Otras de nuestras redes sociales
          </h2>
          <p className=" text-davys-gray text-2xl text-justify mb-5">
            Estas son otras de las redes sociales con las que contamos para que
            puedas estar informado con nuestros productos o promociones.
          </p>
          <div className="flex space-x-4 ml-7 mt-10 justify-center gap-10 mb-5">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutubeSquare className="text-paynes-gray text-6xl transition-colors duration-300 hover:text-red-600" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok className="text-paynes-gray text-6xl transition-colors duration-300 hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-paynes-gray text-6xl transition-colors duration-300 hover:text-blue-700" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestSquare className="text-paynes-gray text-6xl transition-colors duration-300 hover:text-red-600" />
            </a>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-5xl font-black text-davys-gray text-center mb-5 mt-10">
          Puedes encontrarnos acá
        </h2>
        <div className="w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.6010935214226!2d-89.55025832514015!3d13.982333691914896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e62036825a69%3A0xec68b49f92513893!2sUniversidad%20Cat%C3%B3lica%20de%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1723784215829!5m2!1ses-419!2ssv"
            width="600"
            height="450"
            style={{ border: 0, width: "80%", height: "55vh" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
