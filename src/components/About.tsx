import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const highlights = [
    "CGPA 8.86 from Thadomal Shahani Engineering College",
    "Worked on Johan Castberg FPSO & Valhall PWP Projects", 
    "Expert in SmartPlant Instrumentation & AVEVA E3D",
    "Strong foundation in industrial automation"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-tech-blue mb-4 font-poppins">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Electronics & Telecommunications Engineer with hands-on offshore project experience 
              and expertise in industrial automation and control systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-tech-blue">Professional Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Currently working as a <strong>Trainee Apprentice at Aker Solutions</strong>, 
                  where I've gained valuable experience on major offshore projects including 
                  Johan Castberg FPSO and Valhall PWP – Fenris.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My expertise spans across instrumentation documentation, cable routing, 
                  and quality control processes. I have a solid understanding of sensors, 
                  valves, and loop documentation essential for offshore operations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left" style={{
            animationDelay: '0.2s'
          }}>
              <CardHeader>
                <CardTitle className="text-tech-blue">Key Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">▸</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-tech-light shadow-lg animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-tech-blue mb-4">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['SmartPlant Instrumentation (SPI)', 'Excel', 'AVEVA E3D', 'NavisWorks', 'Industrial Automation', 'Control Systems', 'Networking', 'Sensor Technology', 'Cable Routing', 'Quality Control', 'Documentation'].map(skill => (
                  <Badge key={skill} variant="secondary" className="bg-tech-blue text-white">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-gradient-to-r from-tech-blue to-blue-700 text-white shadow-lg animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Career Goal</h3>
              <p className="text-blue-100">To grow into a Engineer in the oil & gas or energy sector, contributing to innovative automation solutions.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
