import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

type IndexProps = {
  toggleTheme: () => void;
};

const Index: React.FC<IndexProps> = ({ toggleTheme }) => {
  return (
    <div className="min-h-screen font-inter">
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
