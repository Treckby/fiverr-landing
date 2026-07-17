import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-blue-600 py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-black text-white">
            ¿Listo para hacer crecer tu negocio?
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Cuéntanos tu idea y creemos juntos una landing page
            moderna, rápida y enfocada en resultados.
          </p>

          <div className="mt-10">
            <Button href="#">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}