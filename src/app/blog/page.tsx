import Link from 'next/link';
import { getSortedPosts } from '@lib/posts';
import type { Metadata } from 'next';
import FadeIn from '@components/FadeIn';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: 'Blog | Ankush Tarafdar',
  description: 'Articles on quantum computing, cryptography, cybersecurity, and more.',
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <>
      <main className="pt-24 pb-16 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-gray-400 mb-12 max-w-xl">
              Thoughts on quantum computing, cryptography, cybersecurity, and the
              mathematics behind them.
            </p>
          </FadeIn>

          {posts.length === 0 ? (
            <FadeIn>
              <p className="text-gray-500 font-mono text-sm">
                No posts yet. Check back soon!
              </p>
            </FadeIn>
          ) : (
            <div className="space-y-6">
              {posts.map((post, idx) => (
                <FadeIn key={post.slug} delay={idx * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-dark-100 border border-dark-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h2 className="font-heading text-xl font-semibold text-white group-hover:text-accent transition-colors duration-200">
                        {post.title}
                      </h2>
                      <time className="text-xs font-mono text-accent/70 whitespace-nowrap">
                        {post.date}
                      </time>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}

          <FadeIn delay={400}>
            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-dark transition-colors"
              >
                <span aria-hidden="true">&larr;</span>
                Back Home
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
