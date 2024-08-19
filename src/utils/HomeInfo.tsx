import { FaMotorcycle, FaCogs, FaWrench } from "react-icons/fa";

export const cardsInfo = [
  {
    id: "1",
    title: "Venta de Motocicletas",
    description:
      "Encuentra una amplia variedad de motocicletas nuevas y usadas de todas las marcas y modelos.",
    icon: <FaMotorcycle />,
    link: "/servicios/venta-motocicletas",
  },
  {
    id: "2",
    title: "Repuestos y Accesorios",
    description:
      "Compra repuestos originales y accesorios para personalizar y mantener tu motocicleta en perfectas condiciones.",
    icon: <FaCogs />,
    link: "/servicios/repuestos-accesorios",
  },
  {
    id: "3",
    title: "Taller de Reparación",
    description:
      "Servicios de reparación y mantenimiento por mecánicos expertos para asegurar que tu motocicleta funcione como nueva.",
    icon: <FaWrench />,
    link: "/servicios/taller-reparacion",
  },
];
