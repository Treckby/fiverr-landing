import { Star } from "lucide-react";

import Card from "../ui/Card";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    name: "Juan Pérez",
    company: "Restaurante El Sabor",
    review:
      "El resultado superó nuestras expectativas. La página carga muy rápido y nuestros clientes la aman.",
  },
  {
    name: "María González",
    company: "Fit Gym",
    review:
      "Excelente comunicación durante todo el proyecto. Muy recomendable.",
  },
  {
    name: "Carlos Ramírez",
    company: "Inmobiliaria CR",
    review:
      "Obtuvimos una landing moderna y profesional que transmite mucha confianza.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-slate-50">
      <SectionTitle
        subtitle="TESTIMONIOS"
        title="Lo que opinan nuestros clientes"
        description="La satisfacción de nuestros clientes es la mejor carta de presentación."
      />

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              "{item.review}"
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {item.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.company}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}