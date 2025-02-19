
import { Button } from "@/components/ui/button";
import { MessageCircle, Database, User, Server } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary">welcomy.ai</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 animate-reveal [animation-delay:200ms]">
              Automate Your Guest Inquiries 24/7
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-reveal [animation-delay:400ms]">
              Transform your property management with AI-powered guest support that never sleeps
            </p>
            <div className="animate-reveal [animation-delay:600ms]">
              <Button className="bg-primary hover:bg-primary-hover text-white text-lg px-8 py-6">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-16">
            Why Choose welcomy.ai?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-reveal"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-16">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex flex-col md:flex-row items-center gap-8 animate-reveal"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Guest Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join property managers who are already saving time and delighting guests with welcomy.ai
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-4">welcomy.ai</h3>
              <p className="text-sm">
                Automated guest support for modern property managers
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 welcomy.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "AI-powered responses to guest inquiries around the clock",
  },
  {
    icon: Database,
    title: "Centralized Management",
    description: "All guest communications in one organized dashboard",
  },
  {
    icon: User,
    title: "Personalized Service",
    description: "Tailored responses based on guest preferences and history",
  },
  {
    icon: Server,
    title: "Easy Integration",
    description: "Seamless connection with your existing systems",
  },
];

const steps = [
  {
    title: "Connect Your Properties",
    description: "Easily integrate welcomy.ai with your property management system",
  },
  {
    title: "Customize Responses",
    description: "Set up AI responses that match your brand voice and requirements",
  },
  {
    title: "Activate Automation",
    description: "Let our AI handle guest inquiries while you focus on what matters",
  },
];

export default Index;
