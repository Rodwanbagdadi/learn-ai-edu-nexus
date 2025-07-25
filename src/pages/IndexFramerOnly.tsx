import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, BarChart3, Settings, FileText } from "lucide-react";
import { motion } from "framer-motion";

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
                Education with AI
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing learning experiences through intelligent teaching methods, 
            data-driven governance, and seamless administration.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gray-800 hover:bg-gray-700 text-white" asChild>
                <Link to="/teaching">Start Learning Journey</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold" asChild>
                <Link to="/proposal">View Implementation Plan</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "95%", label: "Student Engagement Increase" },
              { value: "60%", label: "Administrative Time Saved" },
              { value: "40%", label: "Learning Outcome Improvement" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            AI-Powered Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: BookOpen, 
                title: "AI-Powered Teaching", 
                description: "Personalized learning experiences with intelligent content recommendations and adaptive assessments.",
                href: "/teaching" 
              },
              { 
                icon: BarChart3, 
                title: "Smart Governance", 
                description: "Data-driven insights for educational leadership with predictive analytics and performance tracking.",
                href: "/governance" 
              },
              { 
                icon: Settings, 
                title: "Automated Administration", 
                description: "Streamlined school management with AI chatbots, smart scheduling, and attendance tracking.",
                href: "/administration" 
              },
              { 
                icon: FileText, 
                title: "Implementation Proposal", 
                description: "Comprehensive cost analysis, ROI projections, and technology roadmap for AI integration.",
                href: "/proposal" 
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={feature.href}>
                    <motion.div 
                      className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 h-full"
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-8 w-8" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {feature.title}
                          </h3>
                          <motion.div 
                            className="w-12 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mt-2"
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <motion.div 
                        className="mt-4 flex items-center text-blue-600 font-medium"
                        whileHover={{ x: 10 }}
                      >
                        Explore Solution
                        <motion.svg 
                          className="w-4 h-4 ml-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 5 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Transform Your Institution Today
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of educators already using AI to create more engaging, 
            efficient, and effective learning environments.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white text-gray-800 hover:bg-gray-100 shadow-xl" 
                asChild
              >
                <Link to="/proposal">View Implementation Roadmap</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm" 
                asChild
              >
                <Link to="/governance">Live Analytics Demo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
