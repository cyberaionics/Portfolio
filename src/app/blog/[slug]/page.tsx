import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@lib/posts';
import type { Metadata } from 'next';
import FadeIn from '@components/FadeIn';
import Footer from '@components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Ankush Tarafdar`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <main className="pt-24 pb-16 px-4 min-h-screen">
        <article className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-dark transition-colors mb-8"
            >
              <span aria-hidden="true">&larr;</span>
              All Posts
            </Link>
          </FadeIn>

          <FadeIn delay={100}>
            <header className="mb-10">
              <time className="text-sm font-mono text-accent/70 block mb-3">
                {post.date}
              </time>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </header>
          </FadeIn>

          <FadeIn delay={200}>
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-white
                prose-p:text-gray-400 prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-code:font-mono prose-code:text-accent prose-code:bg-dark-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-dark-200 prose-pre:border prose-pre:border-dark-border prose-pre:rounded-xl
                prose-blockquote:border-accent/50 prose-blockquote:text-gray-400
                prose-li:text-gray-400"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </FadeIn>
        </article>
      </main>
      <Footer />
    </>
  );
}
