import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart3, Settings, FileText, Brain, Users, TrendingUp, Zap, Shield, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TypedText from "@/components/TypedText";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="block text-gray-900">Transform</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education with{" "}
                <TypedText 
                  strings={["AI Technology", "Smart Analytics", "Innovation", "Intelligence"]}
                  typeSpeed={100}
                  backSpeed={50}
                  backDelay={2000}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800"
                />
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to EduAI Nexus - the next-generation platform where artificial intelligence meets education. 
            Transform your teaching methods, streamline governance, and revolutionize educational administration 
            with cutting-edge AI technology.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/teaching">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg">
                Start Teaching <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/governance">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                Explore Platform
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Revolutionizing Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform combines innovative teaching methodologies, 
              intelligent governance systems, and streamlined administration tools.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                title: "AI-Powered Teaching",
                description: "Personalized learning experiences with intelligent content delivery and adaptive assessments.",
                link: "/teaching",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
                title: "Smart Governance",
                description: "Data-driven decision making with comprehensive analytics and performance insights.",
                link: "/governance",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Settings className="h-8 w-8 text-indigo-600" />,
                title: "Efficient Administration",
                description: "Streamlined workflows, automated processes, and intelligent resource management.",
                link: "/administration",
                gradient: "from-indigo-500 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <Link to={feature.link}>
                  <Button 
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Educators", icon: <Users className="h-6 w-6" /> },
              { number: "500K+", label: "Students Impacted", icon: <Brain className="h-6 w-6" /> },
              { number: "95%", label: "Satisfaction Rate", icon: <TrendingUp className="h-6 w-6" /> },
              { number: "24/7", label: "AI Support", icon: <Zap className="h-6 w-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of educators who are already revolutionizing their teaching with AI-powered tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/teaching">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-50">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/proposal">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                  View Proposal
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
