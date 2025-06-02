import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const majorProjects = [{
    title: "Johan Castberg FPSO Project",
    company: "Aker Solutions (Norway)",
    description: "Managed As-Built instrumentation documentation for major offshore project",
    tasks: [
      "Updated vendor drawings and reviewed technical datasheets",
      "Conducted quality checks and vendor coordination",
      "Managed engineering team collaboration"
    ],
    tools: ["SmartPlant Instrumentation", "Excel", "ProArc"],
    type: "Offshore Project",
    backgroundImage: `${import.meta.env.BASE_URL}Johan.jpg`,
  }, {
    title: "Valhall PWP – Fenris Project",
    company: "Aker Solutions (Norway)",
    description: "Comprehensive cable routing and layout support for offshore platform",
    tasks: [
      "Routed 800+ cables using AVEVA E3D",
      "Supported power, control, and instrumentation tray layouts",
      "Performed clash detection using NavisWorks",
      "Assisted in SmartPlant database management"
    ],
    tools: ["AVEVA E3D", "NavisWorks", "SmartPlant", "Wiring Schedules"],
    type: "Offshore Project",
    backgroundImage: `${import.meta.env.BASE_URL}PWP.jpg`,
  }];

  const technicalProjects = [
    {
      title: "Smart Irrigation System",
      description: "Water-saving automated control system using sensors",
      type: "Automation Project",
      url: "https://drive.google.com/file/d/1bRpWk4O8uAHK5hBMq5bMc4TYzAl4DGrb/view"
    },
    {
      title: "Automated Car Parking System",
      description: "Infrared and actuator-based parking model",
      type: "Control System"
    },
    {
      title: "AI Diagnostic Test Suggestion",
      description: "ML-based system to recommend pathology tests",
      type: "AI/ML Project",
      url: "https://jeevan-ddyr.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-tech-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-tech-blue mb-4 font-poppins">Projects</h2>
            <p className="text-lg text-gray-600">
              Real-world offshore experience and innovative technical solutions
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-tech-blue mb-6">Major Offshore Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {majorProjects.map((project, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-[1.01] group h-[440px] animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Background image + overlays */}
                  {project.backgroundImage && (
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-105"
                        style={{ backgroundImage: `url('${project.backgroundImage}')` }}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  )}

                  {/* Glassmorphism white blur overlay */}
                  <div className="absolute inset-0 bg-black/10 z-10"></div>

                  {/* Foreground content */}
                  <div className="relative z-20">
                    <CardHeader className="bg-slate-500 rounded-t-xl">
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-blue-600 text-white">{project.type}</Badge>
                      </div>
                      <CardTitle className="text-tech-blue">{project.title}</CardTitle>
                      <p className="font-semibold text-slate-200">{project.company}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white">{project.description}</p>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {project.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start space-x-2 text-sm text-white">
                              <span className="text-white mt-1">•</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Tools & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map(tool => (
                            <Badge key={tool} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-tech-blue mb-6">Technical Projects & Innovation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {technicalProjects.map((project, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                >
                  <CardHeader>
                    <Badge className="bg-green-600 text-white w-fit">{project.type}</Badge>
                    <CardTitle className="text-tech-grey text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                    {project.url ? (
                      <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => window.open(project.url, '_blank')}>
                        View Details
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        View Details
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card
            className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 animate-fade-in"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
