import Image from "next/image";

export default function ContactoPage() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-black text-davys-gray ml-4 mb-5 ">
            Contacta con nosotros
          </h1>
          <p className="text-xl  text-davys-gray mx-7 text-justify">
            Estamos aquí para ayudarte. Si tienes alguna pregunta, sugerencia o
            necesitas asistencia, no dudes en comunicarte con nosotros. Nuestro
            equipo está disponible para brindarte la mejor atención posible.
            Puedes escribirnos a través de nuestras redes sociales, enviarnos un
            correo electrónico, o llamarnos directamente. ¡Tu opinión es muy
            importante para nosotros!
          </p>
          <div>aca redes sociales</div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Imagen de mecanico de motos"
            src={"/contactImage1.jpg"}
            width={600}
            height={600}
          />
        </div>
      </section>
    </main>
  );
}
