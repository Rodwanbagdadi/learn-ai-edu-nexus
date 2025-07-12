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
      color: "text-blue-500"
    },
    {
      icon: BarChart3,
      title: "Smart Governance",
      description: "Data-driven insights for educational leadership with predictive analytics and performance tracking.",
      href: "/governance",
      color: "text-emerald-500"
    },
    {
      icon: Settings,
      title: "Automated Administration",
      description: "Streamlined school management with AI chatbots, smart scheduling, and attendance tracking.",
      href: "/administration",
      color: "text-purple-500"
    },
    {
      icon: FileText,
      title: "Implementation Proposal",
      description: "Comprehensive cost analysis, ROI projections, and technology roadmap for AI integration.",
      href: "/proposal",
      color: "text-orange-500"
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Proof of Concept
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            E-Learning AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionizing education through artificial intelligence integration in teaching, governance, and administration. 
            Discover the future of smart education management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/teaching">Explore AI Teaching</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/proposal">View Implementation Plan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link to={feature.href}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className={`h-8 w-8 ${feature.color}`} />
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Integration?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Powered by Leading Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="font-semibold">Microsoft Azure</h3>
              <p className="text-sm text-muted-foreground">Cloud Platform</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="font-semibold">Google AI</h3>
              <p className="text-sm text-muted-foreground">Machine Learning</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="font-semibold">TensorFlow</h3>
              <p className="text-sm text-muted-foreground">Open Source</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="font-semibold">Hugging Face</h3>
              <p className="text-sm text-muted-foreground">AI Models</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Education?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our comprehensive AI integration proposal and see how technology can revolutionize your educational institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/proposal">View Full Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/governance">See Analytics Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
