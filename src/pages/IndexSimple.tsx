import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart3, Settings, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="block text-gray-900">Transform</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education with AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing learning experiences through intelligent teaching methods, 
            data-driven governance, and seamless administration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gray-800 hover:bg-gray-700 text-white" asChild>
              <Link to="/teaching">Start Learning Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/proposal">View Implementation Plan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Features Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            AI-Powered Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: BookOpen, title: "AI-Powered Teaching", href: "/teaching" },
              { icon: BarChart3, title: "Smart Governance", href: "/governance" },
              { icon: Settings, title: "Automated Administration", href: "/administration" },
              { icon: FileText, title: "Implementation Proposal", href: "/proposal" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.href}>
                  <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-blue-600 text-white">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Advanced AI solutions for modern education.
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
