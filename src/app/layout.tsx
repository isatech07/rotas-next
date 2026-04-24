import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aula de Rotas",
  description: "Exemplo prático de rotas com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-purple-600 text-white shadow-md">
          <nav className="max-w-6xl mx-auto flex gap-6 p-4">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <Link href="/produtos" className="hover:underline">
              Produtos
            </Link>
            <Link href="/contato" className="hover:underline">
              Contato
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
      