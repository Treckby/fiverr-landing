"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const faqs = [
  {
    question: "¿Cuánto tarda el desarrollo?",
    answer:
      "Normalmente entre 5 y 10 días dependiendo de la complejidad del proyecto.",
  },
  {
    question: "¿La página será responsive?",
    answer:
      "Sí. Todas nuestras páginas funcionan perfectamente en celular, tablet y computadora.",
  },
  {
    question: "¿Incluye SEO?",
    answer:
      "Sí. Todas las landing pages incluyen una optimización SEO básica.",
  },
  {
    question: "¿Pueden publicar mi página?",
    answer:
      "Sí. Podemos realizar el despliegue en Vercel, Netlify o el hosting de tu preferencia.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionTitle
        subtitle="PREGUNTAS FRECUENTES"
        title="Resolvemos tus dudas"
        description="Estas son algunas de las preguntas que más recibimos."
      />

      <div className="mx-auto mt-16 max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-slate-200 bg-white"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="font-semibold text-slate-900">
                {faq.question}
              </span>

              <ChevronDown
                className={`transition-transform ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-slate-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}