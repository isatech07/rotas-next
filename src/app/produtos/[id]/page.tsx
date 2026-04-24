type Produto = {
  id: number;
  nome: string;
  descricao: string;
};

const produtos: Produto[] = [
  { id: 1, nome: 'Notebook', descricao: 'Notebook para estudos e trabalho.' },
  { id: 2, nome: 'Mouse', descricao: 'Mouse sem fio com alta precisão.' },
  { id: 3, nome: 'Teclado', descricao: 'Teclado mecânico com LED.' },
];

export default async function ProdutoDetalhePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const produto = produtos.find((item) => item.id === Number(id));

  if (!produto) {
    return (
      <section className='bg-white p-8 rounded-xl shadow'>
        <h1 className='text-2xl font-bold text-red-600'>
          Produto não encontrado
        </h1>
      </section>
    );
  }

  return (
    <section className='bg-white p-8 rounded-xl shadow'>
      <h1 className='text-3xl font-bold mb-4'>{produto.nome}</h1>
      <p className='text-lg'>{produto.descricao}</p>
      <p className='mt-4 text-sm text-gray-500'>ID do produto: {id}</p>
    </section>
  );
}        