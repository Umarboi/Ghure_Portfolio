import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:enquire.umar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-tech-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Let's Connect</h2>
            <p className="text-xl text-blue-200">
              Ready to collaborate on instrumentation and automation projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:ghuremohdumar@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                      enquire.umar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <a href="https://linkedin.com/in/gmumar" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                      linkedin.com/in/gmumar
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold mb-4">Extra Involvement</h3>
                  <div className="space-y-2 text-blue-200">
                    <p>• Associated with MESCO since 2017</p>
                    <p>• Academic & student outreach programs</p>
                    <p>• Mentorship and technical group activities</p>
                    <p>• Mini-project development support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right card (form) */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSend} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 min-h-[120px]"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-white text-tech-blue hover:bg-gray-100 font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Resume Card */}
          <Card className="mt-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border-white/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Available for Opportunities</h3>
              <p className="mb-6 text-slate-500">Seeking Instrumentation Engineer positions in oil & gas or energy sectors</p>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
