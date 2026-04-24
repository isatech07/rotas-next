type Post = {
  slug: string;
  titulo: string;
  conteudo: string;
};

const posts: Post[] = [
  { slug: "html-basico", titulo: "HTML Básico", conteudo: "HTML é a linguagem de marcação base da web." },
  { slug: "css-flexbox", titulo: "CSS Flexbox", conteudo: "Flexbox é um modelo de layout para alinhar elementos." },
  { slug: "javascript-dom", titulo: "JavaScript DOM", conteudo: "DOM é a interface que permite manipular elementos HTML com JS." },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-red-600">
          Post não encontrado
        </h1>
      </section>
    );
  }

  return (
    <section className="bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4 text-fuchsia-800">{post.titulo}</h1>
      <p className="text-lg text-amber-900">{post.conteudo}</p>
      <p className="mt-4 text-sm text-gray-500">Slug: {slug}</p>
    </section>
  );
}