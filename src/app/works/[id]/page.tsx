import { notFound } from "next/navigation";
import Image from "next/image";
import { works } from "@/data/works";
import Link from "next/link";

export default function WorkDetail({ params }: { params: { id: string } }) {
  const work = works.find((w) => w.id === params.id);
  if (!work) return notFound();

  return (
    <section className="min-h-screen px-4 py-20 max-w-3xl mx-auto">
      <div className="relative w-full aspect-video mb-8">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover rounded-lg shadow"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
      <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {work.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {work.tech.map((tag, i) => (
          <span
            key={i}
            className="text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {work.content && (
        <div className="prose dark:prose-invert mb-10 max-w-none">
          {work.content}
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        {work.url && (
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 transition"
          >
            🔗 サイトを見る
          </a>
        )}

        <Link
          href="/#works"
          className="inline-block text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded px-4 py-2 transition"
        >
          ← Works一覧へ戻る
        </Link>
      </div>
    </section>
  );
}