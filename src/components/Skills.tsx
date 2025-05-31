
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Software & Tools",
      skills: [
        "SmartPlant Instrumentation (SPI)",
        "AVEVA E3D",
        "NavisWorks", 
        "Microsoft Excel",
        "ProArc"
      ]
    },
    {
      category: "Technical Expertise",
      skills: [
        "Instrumentation Design",
        "Cable Routing & Layout",
        "Industrial Automation",
        "Control Systems", 
        "Quality Control",
        "Technical Documentation"
      ]
    },
    {
      category: "Core Engineering",
      skills: [
        "Sensor Technology",
        "Valve Systems",
        "Loop Documentation",
        "Networking Fundamentals",
        "Project Coordination"
      ]
    }
  ];

  const certifications = [
    {
      title: "Computer Networking Fundamentals",
      issuer: "NVIDIA (Coursera)",
      status: "Completed",
      url: "https://www.coursera.org/account/accomplishments/verify/YBZGGZ277BT7"
    },
    {
      title: "Instrumentation Engineering MasterClass",
      issuer: "Professional Training",
      status: "Completed",
      url: "https://www.udemy.com/certificate/UC-9d008eeb-47c5-4dd2-a383-93687574342a/"
    },
    {
      title: "SmartPlant Instrumentation Training",
      issuer: "Aker Solutions",
      status: "Completed"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-tech-blue mb-4 font-poppins">Technical Skills</h2>
            <p className="text-lg text-gray-600">
              Comprehensive expertise in instrumentation engineering and industrial automation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
                <CardHeader>
                  <CardTitle className="text-tech-blue">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-50 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 border-l-4 border-tech-blue">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div id="certifications">
            <h3 className="text-2xl font-semibold text-tech-blue mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${(index + 3) * 0.2}s`}}>
                  <CardHeader>
                    <CardTitle className="text-tech-blue text-lg">{cert.title}</CardTitle>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-green-600 font-semibold">{cert.status}</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {cert.url && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full flex items-center gap-2"
                        onClick={() => window.open(cert.url, '_blank')}
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-8 bg-tech-blue text-white animate-fade-in" style={{animationDelay: '1.2s'}}>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Professional Tools Ecosystem</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">Design</div>
                  <div className="text-blue-200">SmartPlant</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">3D Modeling</div>
                  <div className="text-blue-200">AVEVA E3D</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">Analysis</div>
                  <div className="text-blue-200">NavisWorks</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">Documentation</div>
                  <div className="text-blue-200">Excel, ProArc</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
