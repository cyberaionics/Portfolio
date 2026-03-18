import Hero from '@components/Hero';
import About from '@components/About';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Achievements from '@components/Achievements';
import BlogSection from '@components/Blog';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import { getSortedPosts } from '@lib/posts';

export default function Home() {
  const posts = getSortedPosts().slice(0, 3);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <BlogSection posts={posts} />
      <Contact />
      <Footer />
    </main>
  );
}
