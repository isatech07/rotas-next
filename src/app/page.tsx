import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4 color text-gray-900">Página Inicial</h1>
      <p className="text-lg text-black">
        Bem-vindo à aula prática de rotas com Next.js, Tailwind e TypeScript.
      </p>
    </section>
  );
} 