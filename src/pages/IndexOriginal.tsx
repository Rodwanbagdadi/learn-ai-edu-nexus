import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, BarChart3, Settings, FileText, Brain, Users, TrendingUp, Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import ThreeBackground from "@/components/ThreeBackground";
import TypedText from "@/components/TypedText";
import ParticleEffect, { FloatingShapes, MagicCursor } from "@/components/ParticleEffect";
import { 
  AnimatedElement, 
  ScrollAnimatedElement, 
  HoverAnimatedElement, 
  StaggerContainer, 
  StaggerChild, 
  FloatingElement,
  PulseElement 
} from "@/components/AnimatedComponents";
import { useScrollAnimations } from "@/hooks/useAnimations";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  // Initialize scroll animations
  useScrollAnimations();

  useEffect(() => {
    // Hero entrance animation
    if (heroRef.current && titleRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(heroRef.current, 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      )
      .fromTo(titleRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
        "-=1"
      );
    }

    // Floating animation for background elements
    gsap.to(".floating-bg-1", {
      y: -30,
      x: 20,
      rotation: 5,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to(".floating-bg-2", {
      y: 20,
      x: -15,
      rotation: -3,
      duration: 5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

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
    <MagicCursor>
      <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <ThreeBackground />
      
      {/* Particle Effects */}
      <ParticleEffect particleCount={30} />
      <FloatingShapes shapeCount={6} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <FloatingElement className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-xl floating-bg-1">
        <div />
      </FloatingElement>
      <FloatingElement className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-rose-300/10 to-orange-400/10 rounded-full blur-xl floating-bg-2" amplitude={15} duration={4}>
        <div />
      </FloatingElement>
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center" ref={heroRef}>
        <div className="max-w-7xl mx-auto">
          <AnimatedElement type="slideUp" delay={0.3}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200 mb-8">
              <PulseElement scale={[1, 1.1]}>
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </PulseElement>
              <span className="text-blue-600 font-medium text-sm">Next-Generation Education Platform</span>
            </div>
          </AnimatedElement>
          
          <div ref={titleRef}>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight font-display">
              <span className="block text-gray-900 text-shadow">Transform</span>
              <span className="block gradient-text">
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
          </div>
          
          <AnimatedElement type="fadeIn" delay={1}>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Revolutionizing learning experiences through intelligent teaching methods, 
              data-driven governance, and seamless administration. 
              <span className="block mt-2 font-medium text-gray-800">Welcome to the future of education.</span>
            </p>
          </AnimatedElement>
          
          <AnimatedElement type="slideUp" delay={1.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <HoverAnimatedElement scale={1.1} y={-10}>
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white transition-all shadow-lg" asChild>
                  <Link to="/teaching" className="flex items-center gap-3">
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                    Start Learning Journey
                  </Link>
                </Button>
              </HoverAnimatedElement>
              <HoverAnimatedElement scale={1.05} y={-5}>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors backdrop-blur-sm" asChild>
                  <Link to="/proposal" className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                    </svg>
                    View Implementation Plan
                  </Link>
                </Button>
              </HoverAnimatedElement>
            </div>
          </AnimatedElement>
          
          {/* Enhanced Stats Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.2}>
            {[
              { value: "95%", label: "Student Engagement Increase" },
              { value: "60%", label: "Administrative Time Saved" },
              { value: "40%", label: "Learning Outcome Improvement" }
            ].map((stat, index) => (
              <StaggerChild key={index}>
                <HoverAnimatedElement scale={1.05} y={-5}>
                  <div className="stagger-card bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                    <motion.div 
                      className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 1.5, duration: 0.8, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </HoverAnimatedElement>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Features */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedElement type="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-shadow text-reveal">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive artificial intelligence tools designed to enhance every aspect of educational excellence
              </p>
            </div>
          </ScrollAnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const gradientClasses = [
                'from-blue-500 to-blue-600', 'from-purple-500 to-purple-600', 
                'from-green-500 to-green-600', 'from-orange-500 to-orange-600'
              ];
              return (
                <ScrollAnimatedElement key={index} delay={index * 0.1}>
                  <HoverAnimatedElement scale={1.02} y={-8}>
                    <Card className="stagger-card group relative overflow-hidden border-0 shadow-xl bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                        }}
                        whileHover={{ scale: 1.1 }}
                      />
                      <Link to={feature.href} className="block relative z-10">
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className={`p-3 rounded-xl bg-gradient-to-r ${gradientClasses[index % 4]} shadow-lg`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.8 }}
                            >
                              <Icon className="h-8 w-8 text-white" />
                            </motion.div>
                            <div>
                              <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                              </CardTitle>
                              <motion.div 
                                className="w-12 h-1 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mt-2"
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                              />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </CardDescription>
                          <motion.div 
                            className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform"
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
                        </CardContent>
                      </Link>
                    </Card>
                  </HoverAnimatedElement>
                </ScrollAnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 parallax-bg">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedElement>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-shadow">
                Why Choose AI Integration?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience transformative benefits that revolutionize educational outcomes and operational efficiency
              </p>
            </div>
          </ScrollAnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
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
                <ScrollAnimatedElement key={index} delay={index * 0.1}>
                  <HoverAnimatedElement scale={1.05} y={-10}>
                    <div className="stagger-card group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500">
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
                    </div>
                  </HoverAnimatedElement>
                </ScrollAnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedElement>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-shadow font-display">
                Powered by Industry Leaders
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on enterprise-grade technologies trusted by millions worldwide
              </p>
            </div>
          </ScrollAnimatedElement>
          
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
              <ScrollAnimatedElement key={index} delay={index * 0.1}>
                <HoverAnimatedElement scale={1.05} y={-10}>
                  <div className="stagger-card group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:from-white hover:to-gray-50 transition-all shadow-md hover:shadow-xl border border-gray-200">
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
                  </div>
                </HoverAnimatedElement>
              </ScrollAnimatedElement>
            ))}
          </div>
          
          {/* Enhanced Trust Badges */}
          <ScrollAnimatedElement delay={0.5}>
            <div className="mt-16 text-center">
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
                  >
                    {badge}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full pattern-grid opacity-10"></div>
        <FloatingElement className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" amplitude={20} duration={6}>
          <div />
        </FloatingElement>
        <FloatingElement className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" amplitude={15} duration={4}>
          <div />
        </FloatingElement>
        
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <ScrollAnimatedElement type="slideUp">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
              <PulseElement scale={[1, 1.2]}>
                <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </PulseElement>
              <span className="text-white font-medium text-sm">Ready to Get Started?</span>
            </div>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement type="slideUp" delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-shadow font-display">
              Transform Your Institution{" "}
              <TypedText 
                strings={["Today", "Now", "Forever"]}
                typeSpeed={150}
                backSpeed={100}
                backDelay={3000}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              />
            </h2>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement type="fadeIn" delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of educators already using AI to create more engaging, 
              efficient, and effective learning environments.
            </p>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <HoverAnimatedElement scale={1.1} y={-10}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white text-gray-800 hover:bg-gray-100 hover:scale-105 transition-all shadow-xl" 
                  asChild
                >
                  <Link to="/proposal" className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    View Implementation Roadmap
                  </Link>
                </Button>
              </HoverAnimatedElement>
              <HoverAnimatedElement scale={1.05} y={-5}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all shadow-lg backdrop-blur-sm" 
                  asChild
                >
                  <Link to="/governance" className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    Live Analytics Demo
                  </Link>
                </Button>
              </HoverAnimatedElement>
            </div>
          </ScrollAnimatedElement>
          
          {/* Enhanced Contact Info */}
          <ScrollAnimatedElement delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
              {[
                { icon: "💬", text: "Free consultation available" },
                { icon: "⚡", text: "Quick 30-day implementation" },
                { icon: "🔒", text: "Enterprise-grade security" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>
    </div>
    </MagicCursor>
  );
};

export default Index;
