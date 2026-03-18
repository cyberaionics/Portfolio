import FadeIn from './FadeIn';
import Link from 'next/link';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

interface BlogSectionProps {
  posts: PostMeta[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Blog
          </h2>
          <div className="w-16 h-1 bg-accent mb-12 rounded-full" />
        </FadeIn>

        {posts.length === 0 ? (
          <FadeIn>
            <p className="text-gray-500 font-mono text-sm">
              No posts yet. Check back soon!
            </p>
          </FadeIn>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <FadeIn key={post.slug} delay={idx * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-dark-100 border border-dark-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 h-full"
                >
                  <time className="text-xs font-mono text-accent/70 mb-2 block">
                    {post.date}
                  </time>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <FadeIn delay={400}>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-dark transition-colors"
              >
                View All Posts
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
