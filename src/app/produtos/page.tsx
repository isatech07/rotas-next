import Link from "next/link";

const produtos = [
  { id: 1, nome: "Notebook" },
  { id: 2, nome: "Mouse" },
  { id: 3, nome: "Teclado" },
];

export default function ProdutosPage() {
  return (
    <section className="bg-white p-8 rounded-xl shadow text-green-900">
      <h1 className="text-3xl font-bold mb-6">Produtos</h1>

      <div className="space-y-4">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <span className="text-lg">{produto.nome}</span>

            <Link
              href={`/produtos/${produto.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}