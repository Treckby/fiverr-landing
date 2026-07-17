import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              DevStudio
            </h2>

            <p className="mt-2 text-slate-500">
              Landing Pages modernas con Next.js y Tailwind CSS.
            </p>
          </div>

          <nav className="flex gap-6 text-slate-600">
            <a href="#services">Servicios</a>
            <a href="#portfolio">Portafolio</a>
            <a href="#pricing">Precios</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} DevStudio. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}