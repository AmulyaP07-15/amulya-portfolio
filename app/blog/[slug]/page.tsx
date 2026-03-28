import { compileMDX } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const { content } = await compileMDX({ source: post.content });

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-24">
      <Link
        href="/#blog"
        className="inline-flex items-center gap-2 font-mono text-sm text-[#8B949E] hover:text-[#E6EDF3] transition-colors mb-12"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#8B949E]">{post.date}</span>
        {post.readingTime && (
          <>
            <span className="text-[#30363D]">·</span>
            <span className="font-mono text-xs text-[#8B949E]">{post.readingTime}</span>
          </>
        )}
      </div>

      <h1 className="font-mono font-bold text-[#E6EDF3] text-2xl leading-snug mb-10">
        {post.title}
      </h1>

      <div className="mdx-content">{content}</div>
    </main>
  );
}
