import Link from "next/link";
import { appConfig } from "@/app.config";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <p className="max-w-xl text-base text-black/60">
        Do gato ao cavalo: calcule doses por peso e espécie em segundos, com
        menos contas de cabeça e mais segurança no atendimento.
      </p>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Quero acesso antecipado →
      </Link>
      <p className="text-sm text-black/50">
        Crie sua conta grátis para entrar na lista de acesso antecipado.
      </p>
    </section>
  );
}
