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

          {/* Enhanced Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { 
                icon: Users, 
                value: "95%", 
                label: "Student Engagement",
                description: "Increased student participation and active learning",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: TrendingUp, 
                value: "60%", 
                label: "Administrative Efficiency",
                description: "Time saved through intelligent automation",
                color: "from-green-500 to-emerald-500"
              },
              { 
                icon: BarChart3, 
                value: "40%", 
                label: "Learning Outcomes",
                description: "Measurable improvement in student performance",
                color: "from-purple-500 to-violet-500"
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group-hover:border-gray-200">
                    <div className="flex items-center justify-center mb-4">
                      <motion.div 
                        className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:shadow-xl`}
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8" />
                      </motion.div>
                    </div>
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                    <motion.div 
                      className={`mt-4 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: index * 0.2 + 1, duration: 1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="max-w-5xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="text-yellow-700 font-semibold">Our Mission</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building the Future of Learning Through Innovation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe that every student deserves personalized, engaging, and effective education. 
              Our AI-powered platform transforms traditional learning environments into dynamic, 
              data-driven ecosystems that adapt to each learner's unique needs and pace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Personalized Learning", 
                  description: "AI algorithms that adapt to individual learning styles and preferences",
                  icon: "🎯"
                },
                { 
                  title: "Real-time Analytics", 
                  description: "Instant insights into student progress and institutional performance",
                  icon: "📊"
                },
                { 
                  title: "Seamless Integration", 
                  description: "Works with existing systems and scales with your institution",
                  icon: "🔗"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
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

      {/* Benefits Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose AI Integration?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience transformative benefits that revolutionize educational outcomes and operational efficiency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Intelligent Analytics", description: "AI-powered insights for better decision making" },
              { icon: Users, title: "Personalized Learning", description: "Tailored education experiences for every student" },
              { icon: TrendingUp, title: "Improved Outcomes", description: "Higher student engagement and performance" },
              { icon: Zap, title: "Automation", description: "Reduced administrative workload and errors" },
              { icon: Shield, title: "Predictive Prevention", description: "Early identification of at-risk students" },
              { icon: Globe, title: "Global Standards", description: "World-class educational technology integration" }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = [
                'text-blue-500 bg-blue-100',
                'text-purple-500 bg-purple-100', 
                'text-green-500 bg-green-100',
                'text-orange-500 bg-orange-100',
                'text-pink-500 bg-pink-100',
                'text-teal-500 bg-teal-100'
              ];
              return (
                <motion.div
                  key={index}
                  className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors[index]} mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  <motion.div 
                    className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{ delay: index * 0.1 + 1 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Powered by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on enterprise-grade technologies trusted by millions worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Microsoft Azure", 
                type: "Cloud Infrastructure", 
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.379 23.343a1.62 1.62 0 0 1-1.536.002l-8.051-4.647a1.62 1.62 0 0 1-.812-1.405V9.707a1.62 1.62 0 0 1 .812-1.405l8.051-4.647a1.62 1.62 0 0 1 1.618 0l8.051 4.647a1.62 1.62 0 0 1 .812 1.405v7.586a1.62 1.62 0 0 1-.812 1.405l-8.051 4.647z"/></svg>, 
                color: "blue" 
              },
              { 
                name: "Google AI", 
                type: "Machine Learning", 
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, 
                color: "green" 
              },
              { 
                name: "TensorFlow", 
                type: "Deep Learning", 
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.153-1.747zm21.416 5.716L12.46 24V0l4.095 2.378v14.019l6.153 1.747z"/></svg>, 
                color: "orange" 
              },
              { 
                name: "Hugging Face", 
                type: "AI Models", 
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 7.568l-2.12 2.12a1 1 0 11-1.415-1.414l2.12-2.12a1 1 0 111.415 1.414z"/></svg>, 
                color: "purple" 
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:from-white hover:to-gray-50 transition-all shadow-md hover:shadow-xl border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-gray-500 mb-4 group-hover:scale-110 transition-transform flex justify-center group-hover:text-gray-700"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.2 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{tech.type}</p>
                  <motion.div 
                    className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ delay: index * 0.1 + 1.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm mb-8">Trusted by educational institutions worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {[
                "SOC 2 Compliant", "GDPR Ready", "99.9% Uptime", "24/7 Support"
              ].map((badge, index) => (
                <motion.div 
                  key={badge}
                  className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg text-gray-700 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Hero Badge */}
      <motion.div 
        className="fixed top-4 right-4 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/90 backdrop-blur-sm border border-blue-200 shadow-lg">
          <motion.svg 
            className="w-4 h-4 text-blue-600 mr-2" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
          <span className="text-blue-600 font-medium text-sm">AI-Powered Platform</span>
        </div>
      </motion.div>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center text-white mb-16">
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-white font-semibold">🚀 Ready to Transform Education?</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Start Your AI Journey
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Today
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join <span className="font-bold text-blue-400">500+</span> educational institutions already using AI to create more engaging, 
              efficient, and effective learning environments.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl border-0 rounded-full group" 
                  asChild
                >
                  <Link to="/proposal">
                    Start Free Trial
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-10 py-5 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 backdrop-blur-sm rounded-full" 
                  asChild
                >
                  <Link to="/governance">Watch Demo</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Feature Highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { 
                title: "Quick Setup", 
                description: "Get started in 15 minutes with our guided onboarding",
                icon: Zap 
              },
              { 
                title: "24/7 Support", 
                description: "Expert assistance whenever you need it",
                icon: Shield 
              },
              { 
                title: "Proven Results", 
                description: "40% improvement in learning outcomes guaranteed",
                icon: TrendingUp 
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                    }}
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Info */}

        </div>
      </section>
    </div>
  );
};

export default Index;
