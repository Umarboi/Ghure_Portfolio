
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
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
    <header className="bg-tech-blue text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border-2 border-white">
              <img 
                src='/lovable-uploads/efd7d867-116b-432e-871b-4cdc6525979a.png' 
                alt="Ghure Mohd Umar" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold font-poppins">Ghure Mohd Umar</h1>
              <p className="text-blue-200 text-sm text-center">Engineer</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleSmoothScroll('about')} className="hover:text-blue-200 transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => handleSmoothScroll('projects')} className="hover:text-blue-200 transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => handleSmoothScroll('skills')} className="hover:text-blue-200 transition-colors cursor-pointer">
              Skills
            </button>
            <button onClick={() => handleSmoothScroll('certifications')} className="hover:text-blue-200 transition-colors cursor-pointer">
              Certifications
            </button>
            <button onClick={() => handleSmoothScroll('contact')} className="hover:text-blue-200 transition-colors cursor-pointer">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-2">
  <a
    href="mailto:ghuremohdumar@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
      <Mail className="w-4 h-4" />
    </Button>
  </a>
  <a
    href="https://www.linkedin.com/in/gmumar"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
      <Linkedin className="w-4 h-4" />
    </Button>
  </a>
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;
