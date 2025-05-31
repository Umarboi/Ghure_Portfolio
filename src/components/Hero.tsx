
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-tech-blue to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl overflow-hidden border-white">
              <img 
                src="/lovable-uploads/efd7d867-116b-432e-871b-4cdc6525979a.png" 
                alt="Ghure Mohd Umar" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 font-poppins">
              Ghure Mohd Umar
            </h1>
            <p className="text-xl text-blue-200 mb-2">
              Aspiring Instrumentation Engineer
            </p>
            <p className="text-lg text-blue-300">
              Trainee Apprentice at Aker Solutions | Offshore Project Experience
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 mb-8">
            <p className="text-lg font-medium italic">
              "Engineering systems that think, respond, and evolve."
            </p>
          </Card>

          <a
            href="/resume.pdf"
            download
            className="inline-block"
          >

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100 font-semibold">
              📄 Download Resume
            
            </Button>
            
            <Button size="lg" variant="outline" onClick={() => handleSmoothScroll('projects')} className="border-white hover:bg-white hover:text-tech-blue text-slate-900">
              View Projects
            </Button>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
