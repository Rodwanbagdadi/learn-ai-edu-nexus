import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, BarChart3, Settings, FileText, Brain, Users, TrendingUp, Zap, Shield, Globe } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "AI-Powered Teaching",
      description: "Personalized learning experiences with intelligent content recommendations and adaptive assessments.",
      href: "/teaching",
      color: "text-gray-600"
    },
    {
      icon: BarChart3,
      title: "Smart Governance",
      description: "Data-driven insights for educational leadership with predictive analytics and performance tracking.",
      href: "/governance",
      color: "text-gray-700"
    },
    {
      icon: Settings,
      title: "Automated Administration",
      description: "Streamlined school management with AI chatbots, smart scheduling, and attendance tracking.",
      href: "/administration",
      color: "text-gray-600"
    },
    {
      icon: FileText,
      title: "Implementation Proposal",
      description: "Comprehensive cost analysis, ROI projections, and technology roadmap for AI integration.",
      href: "/proposal",
      color: "text-gray-700"
    }
  ];

  const benefits = [
    { icon: Brain, title: "Intelligent Analytics", description: "AI-powered insights for better decision making" },
    { icon: Users, title: "Personalized Learning", description: "Tailored education experiences for every student" },
    { icon: TrendingUp, title: "Improved Outcomes", description: "Higher student engagement and performance" },
    { icon: Zap, title: "Automation", description: "Reduced administrative workload and errors" },
    { icon: Shield, title: "Predictive Prevention", description: "Early identification of at-risk students" },
    { icon: Globe, title: "Global Standards", description: "World-class educational technology integration" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-rose-300/10 rounded-full animate-float blur-xl" style={{animationDelay: '-2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-green-300/10 rounded-full animate-float blur-xl" style={{animationDelay: '-4s'}}></div>
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8 animate-glow">
            <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-blue-600 font-medium text-sm">Next-Generation Education Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight font-display">
            <span className="block text-gray-900 text-shadow">Transform</span>
            <span className="block gradient-text">Education with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionizing learning experiences through intelligent teaching methods, 
            data-driven governance, and seamless administration. 
            <span className="block mt-2 font-medium text-gray-800">Welcome to the future of education.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gray-800 hover:bg-gray-700 text-white hover:scale-105 transition-transform shadow-lg" asChild>
              <Link to="/teaching" className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Start Learning Journey
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-transform" asChild>
              <Link to="/proposal" className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                </svg>
                View Implementation Plan
              </Link>
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift">
              <div className="text-3xl font-bold text-gray-700 mb-2">95%</div>
              <div className="text-gray-600">Student Engagement Increase</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift">
              <div className="text-3xl font-bold text-gray-700 mb-2">60%</div>
              <div className="text-gray-600">Administrative Time Saved</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift">
              <div className="text-3xl font-bold text-gray-700 mb-2">40%</div>
              <div className="text-gray-600">Learning Outcome Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-shadow">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial intelligence tools designed to enhance every aspect of educational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const gradientClasses = [
                'gradient-bg-1', 'gradient-bg-2', 'gradient-bg-3', 'gradient-bg-4'
              ];
              return (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm hover-lift card-glow">
                  <div className={`absolute inset-0 ${gradientClasses[index % 4]} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <Link to={feature.href} className="block relative z-10">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${gradientClasses[index % 4]} shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {feature.title}
                          </CardTitle>
                          <div className="w-12 h-1 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mt-2"></div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                        Explore Solution
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-shadow">
              Why Choose AI Integration?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience transformative benefits that revolutionize educational outcomes and operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = [
                'text-blue-400 bg-blue-100',
                'text-rose-400 bg-rose-100', 
                'text-green-400 bg-green-100',
                'text-yellow-400 bg-yellow-100',
                'text-purple-400 bg-purple-100',
                'text-teal-400 bg-teal-100'
              ];
              return (
                <div key={index} className="group text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors[index]} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-shadow font-display">
              Powered by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on enterprise-grade technologies trusted by millions worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Microsoft Azure", 
                type: "Cloud Infrastructure", 
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.379 23.343a1.62 1.62 0 0 1-1.536.002l-8.051-4.647a1.62 1.62 0 0 1-.812-1.405V9.707a1.62 1.62 0 0 1 .812-1.405l8.051-4.647a1.62 1.62 0 0 1 1.618 0l8.051 4.647a1.62 1.62 0 0 1 .812 1.405v7.586a1.62 1.62 0 0 1-.812 1.405l-8.051 4.647z"/></svg>, 
                color: "gray" 
              },
              { 
                name: "Google AI", 
                type: "Machine Learning", 
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, 
                color: "gray" 
              },
              { 
                name: "TensorFlow", 
                type: "Deep Learning", 
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.153-1.747zm21.416 5.716L12.46 24V0l4.095 2.378v14.019l6.153 1.747z"/></svg>, 
                color: "gray" 
              },
              { 
                name: "Hugging Face", 
                type: "AI Models", 
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 7.568l-2.12 2.12a1 1 0 11-1.415-1.414l2.12-2.12a1 1 0 111.415 1.414z"/></svg>, 
                color: "gray" 
              }
            ].map((tech, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-white transition-colors shadow-md hover:shadow-xl border border-gray-200">
                <div className="text-center">
                  <div className={`text-gray-500 mb-4 group-hover:scale-110 transition-transform flex justify-center group-hover:text-gray-600`}>{tech.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{tech.type}</p>
                  <div className={`mt-4 w-12 h-1 bg-gray-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-8">Trusted by educational institutions worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-semibold">SOC 2 Compliant</div>
              <div className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-semibold">GDPR Ready</div>
              <div className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-semibold">99.9% Uptime</div>
              <div className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-semibold">24/7 Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full pattern-grid opacity-10"></div>
        
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium text-sm">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-shadow font-display">
            Transform Your Institution Today
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of educators already using AI to create more engaging, 
            efficient, and effective learning environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white text-gray-800 hover:bg-gray-100 hover:scale-105 transition-transform shadow-xl" 
              asChild
            >
              <Link to="/proposal" className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                View Implementation Roadmap
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all shadow-lg" 
              asChild
            >
              <Link to="/governance" className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Live Analytics Demo
              </Link>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <span>Free consultation available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>Quick 30-day implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
