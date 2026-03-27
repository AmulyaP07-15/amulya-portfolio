import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/mdx';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Blog posts={posts} />
      <Contact />
      <Footer />
    </main>
  );
}
