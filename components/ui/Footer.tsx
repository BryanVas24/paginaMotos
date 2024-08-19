export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-platinum text-davys-gray py-4 text-center">
      <p className="text-sm">© {currentYear} Motos.</p>
      <p className="text-sm">Todos los derechos reservados.</p>
    </footer>
  );
}
