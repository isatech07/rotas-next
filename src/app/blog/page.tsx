import Link from "next/link";

const posts = [
  { slug: "html-basico", titulo: "HTML Básico" },
  { slug: "css-flexbox", titulo: "CSS Flexbox" },
  { slug: "javascript-dom", titulo: "JavaScript DOM" },
];

export default function BlogPage() {
  return (
    <section className="bg-white text-fuchsia-700 p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <span className="text-lg">{post.titulo}</span>

            <Link
              href={`/blog/${post.slug}`}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500"
            >
              Ler post
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}