"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = (form.get("nome") as string) || "";
    const empresa = (form.get("empresa") as string) || "";
    const email = (form.get("email") as string) || "";
    const telefone = (form.get("telefone") as string) || "";
    const mensagem = (form.get("mensagem") as string) || "";
    const body =
      `Nome: ${nome}\nEmpresa: ${empresa}\nEmail: ${email}\nTelefone: ${telefone}\n\n${mensagem}`;
    const subject = `Pedido de orçamento — ${nome || "Site"}`;
    const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <Field label="Nome" name="nome" required />
        <Field label="Empresa" name="empresa" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Telefone" name="telefone" type="tel" />
      </div>
      <Field
        label="Descreva o seu projeto"
        name="mensagem"
        as="textarea"
        rows={4}
        required
      />
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className={cn(
            "inline-flex items-center gap-2 rounded-full bg-[--color-accent] px-7 py-3.5",
            "text-[#06121f] text-[15px] font-medium tracking-tight",
            "transition-all duration-300 hover:bg-[--color-accent-hover]",
            "shadow-[0_8px_24px_-12px_rgba(91,155,229,0.6)]"
          )}
        >
          Enviar pedido
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </button>
        {status === "sent" && (
          <span className="inline-flex items-center gap-2 text-sm text-[--color-accent]">
            <CheckCircle2 className="h-4 w-4" /> Cliente de email aberto
          </span>
        )}
        <span className="text-xs text-[--color-text-subtle]">
          Resposta em menos de 24 h úteis
        </span>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  rows,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  required?: boolean;
}) {
  const baseField = cn(
    "w-full bg-transparent text-[--color-text-primary] placeholder:text-[--color-text-subtle]",
    "border-0 border-b border-[--color-border] py-3 px-0",
    "focus:outline-none focus:border-[--color-accent] transition-colors duration-300",
    "text-[15px]"
  );
  return (
    <label className="group flex flex-col gap-1.5 col-span-1 last:[&:has(textarea)]:col-span-full">
      <span className="text-[11px] tracking-[0.18em] uppercase text-[--color-text-subtle] group-focus-within:text-[--color-accent] transition-colors">
        {label} {required && <span className="text-[--color-accent]">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows ?? 4}
          required={required}
          className={cn(baseField, "resize-none")}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={baseField}
        />
      )}
    </label>
  );
}
