import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Brain, Globe, CheckCircle, Clock, Target, Users, TrendingUp } from "lucide-react";

const Teaching = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});

  const languages = {
    en: { name: "English", flag: "🇺🇸" },
    ar: { name: "العربية", flag: "🇸🇦" },
    de: { name: "Deutsch", flag: "🇩🇪" }
  };

  const personalizedContent = [
    { subject: "Mathematics", progress: 85, recommendation: "Focus on Calculus II", level: "Advanced" },
    { subject: "Physics", progress: 72, recommendation: "Review Thermodynamics", level: "Intermediate" },
    { subject: "Chemistry", progress: 94, recommendation: "Explore Organic Chemistry", level: "Expert" },
    { subject: "Biology", progress: 68, recommendation: "Practice Cell Biology", level: "Intermediate" }
  ];

  const quizQuestions = [
    {
      question: "What is the derivative of x²?",
      options: ["2x", "x", "2", "x²"],
      correct: "2x"
    },
    {
      question: "Which element has the symbol 'Au'?",
      options: ["Silver", "Gold", "Aluminum", "Argon"],
      correct: "Gold"
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswers({ ...quizAnswers, [currentQuiz]: answer });
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-emerald-500";
    if (progress >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">AI-Powered Teaching</h1>
            <p className="text-muted-foreground text-lg">Personalized learning experiences for every student</p>
          </div>
          
          {/* Language Switcher */}
          <div className="flex gap-2">
            {Object.entries(languages).map(([code, lang]) => (
              <Button
                key={code}
                variant={selectedLanguage === code ? "default" : "outline"}
                onClick={() => setSelectedLanguage(code)}
                className="flex items-center gap-2"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Personalized Dashboard
            </TabsTrigger>
            <TabsTrigger value="assessment" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              AI Assessment
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Learning Analytics
            </TabsTrigger>
          </TabsList>

          {/* Personalized Learning Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalizedContent.map((subject, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{subject.subject}</CardTitle>
                      <Badge variant={subject.level === "Expert" ? "default" : subject.level === "Advanced" ? "secondary" : "outline"}>
                        {subject.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{subject.progress}%</span>
                        </div>
                        <Progress value={subject.progress} className="h-2" />
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-sm font-medium mb-1">AI Recommendation:</p>
                        <p className="text-sm text-muted-foreground">{subject.recommendation}</p>
                      </div>
                      <Button className="w-full" size="sm">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Study Groups & Collaboration
                </CardTitle>
                <CardDescription>
                  AI-matched study groups based on learning patterns and goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Mathematics Study Group</h4>
                    <p className="text-sm text-muted-foreground mb-3">5 members • Next session: Tomorrow 3 PM</p>
                    <Button variant="outline" size="sm">Join Session</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Physics Lab Partners</h4>
                    <p className="text-sm text-muted-foreground mb-3">3 members • Lab due: Friday</p>
                    <Button variant="outline" size="sm">Collaborate</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Chemistry Review</h4>
                    <p className="text-sm text-muted-foreground mb-3">8 members • Exam prep: Active</p>
                    <Button variant="outline" size="sm">Join Review</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI-Driven Assessment */}
          <TabsContent value="assessment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Smart Quiz System
                </CardTitle>
                <CardDescription>
                  Adaptive assessments that adjust difficulty based on your performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentQuiz < quizQuestions.length ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-muted rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        Question {currentQuiz + 1} of {quizQuestions.length}
                      </h3>
                      <p className="text-lg mb-6">{quizQuestions[currentQuiz].question}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {quizQuestions[currentQuiz].options.map((option, index) => (
                          <Button
                            key={index}
                            variant={quizAnswers[currentQuiz] === option ? "default" : "outline"}
                            onClick={() => handleQuizAnswer(option)}
                            className="p-4 h-auto text-left justify-start"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button 
                        variant="outline" 
                        disabled={currentQuiz === 0}
                        onClick={() => setCurrentQuiz(currentQuiz - 1)}
                      >
                        Previous
                      </Button>
                      <Button 
                        onClick={() => setCurrentQuiz(currentQuiz + 1)}
                        disabled={!quizAnswers[currentQuiz]}
                      >
                        {currentQuiz === quizQuestions.length - 1 ? "Finish Quiz" : "Next"}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto" />
                    <h3 className="text-2xl font-semibold">Quiz Completed!</h3>
                    <p className="text-muted-foreground">AI is analyzing your responses...</p>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">Instant AI Feedback:</h4>
                      <p className="text-sm">Strong performance in mathematical concepts. Consider reviewing chemical elements for better retention.</p>
                    </div>
                    <Button onClick={() => {setCurrentQuiz(0); setQuizAnswers({})}}>
                      Retake Quiz
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Time Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Mathematics</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span>Physics</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span>Chemistry</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span>Biology</span>
                      <span>15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Study Time This Week</p>
                        <p className="text-2xl font-bold text-primary">23.5 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Target className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Goals Completed</p>
                        <p className="text-2xl font-bold text-emerald-500">8/10</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <TrendingUp className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Performance Trend</p>
                        <p className="text-2xl font-bold text-emerald-500">+12%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Teaching;