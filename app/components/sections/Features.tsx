import {
  Zap,
  Smartphone,
  Search,
  ShieldCheck,
  Clock,
  Headphones,
} from "lucide-react";

import Card from "@/app/components/ui/Card";
import Section from "@/app/components/ui/Section";
import SectionTitle from "@/app/components/ui/SectionTitle";

const features = [
  {
    icon: Zap,
    title: "Carga Ultra Rápida",
    description:
      "Páginas optimizadas para cargar en segundos y mejorar la experiencia del usuario.",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description:
      "Tu sitio lucirá perfecto en computadoras, tablets y teléfonos.",
  },
  {
    icon: Search,
    title: "SEO Optimizado",
    description:
      "Preparado para aparecer en Google y atraer tráfico orgánico.",
  },
  {
    icon: ShieldCheck,
    title: "Código Seguro",
    description:
      "Desarrollado con buenas prácticas para ofrecer estabilidad y seguridad.",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description:
      "Cumplimos los tiempos de entrega sin sacrificar calidad.",
  },
  {
    icon: Headphones,
    title: "Soporte",
    description:
      "Te acompañamos incluso después de publicar tu sitio web.",
  },
];

export default function Features() {
  return (
    <Section id="features">
      <SectionTitle
        subtitle="¿POR QUÉ ELEGIRNOS?"
        title="Creamos páginas web pensadas para vender"
        description="Cada proyecto está diseñado para ofrecer velocidad, confianza y una excelente experiencia para tus clientes."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title}>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <Icon
                  className="text-blue-600"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}