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
    en: { name: "English", flag: "EN", color: "bg-blue-300" },
    ar: { name: "العربية", flag: "AR", color: "bg-green-300" },
    de: { name: "Deutsch", flag: "DE", color: "bg-rose-300" }
  };

  const localizedContent = {
    en: {
      subjects: [
        { subject: "Mathematics", progress: 85, recommendation: "Focus on Calculus II", level: "Advanced" },
        { subject: "Physics", progress: 72, recommendation: "Review Thermodynamics", level: "Intermediate" },
        { subject: "Chemistry", progress: 94, recommendation: "Explore Organic Chemistry", level: "Expert" },
        { subject: "Biology", progress: 68, recommendation: "Practice Cell Biology", level: "Intermediate" }
      ],
      title: "Personalized Teaching Experience",
      subtitle: "Harness the power of artificial intelligence to create adaptive, engaging, and data-driven learning experiences for every student.",
      aiPowered: "AI-Powered Learning Hub",
      continueButton: "Continue Learning",
      studyResources: {
        title: "Study Resources",
        description: "Access curated learning materials tailored to your progress",
        button: "Browse Resources"
      },
      studyGroups: {
        title: "Study Groups", 
        description: "Join collaborative learning sessions with peers",
        button: "Join Group"
      },
      setGoals: {
        title: "Set Goals",
        description: "Define and track your learning objectives", 
        button: "Set Goals"
      }
    },
    ar: {
      subjects: [
        { subject: "الرياضيات", progress: 85, recommendation: "التركيز على التفاضل والتكامل II", level: "متقدم" },
        { subject: "الفيزياء", progress: 72, recommendation: "مراجعة الديناميكا الحرارية", level: "متوسط" },
        { subject: "الكيمياء", progress: 94, recommendation: "استكشاف الكيمياء العضوية", level: "خبير" },
        { subject: "الأحياء", progress: 68, recommendation: "ممارسة بيولوجيا الخلية", level: "متوسط" }
      ],
      title: "تجربة تعليمية شخصية",
      subtitle: "استخدم قوة الذكاء الاصطناعي لإنشاء تجارب تعلم تكيفية وجذابة ومدفوعة بالبيانات لكل طالب.",
      aiPowered: "مركز التعلم المدعوم بالذكاء الاصطناعي",
      continueButton: "متابعة التعلم",
      studyResources: {
        title: "مصادر الدراسة",
        description: "الوصول إلى المواد التعليمية المنسقة وفقاً لتقدمك",
        button: "تصفح المصادر"
      },
      studyGroups: {
        title: "مجموعات الدراسة",
        description: "انضم إلى جلسات التعلم التعاونية مع الأقران",
        button: "انضم للمجموعة"
      },
      setGoals: {
        title: "تحديد الأهداف",
        description: "حدد وتتبع أهدافك التعليمية",
        button: "تحديد الأهداف"
      }
    },
    de: {
      subjects: [
        { subject: "Mathematik", progress: 85, recommendation: "Fokus auf Analysis II", level: "Fortgeschritten" },
        { subject: "Physik", progress: 72, recommendation: "Thermodynamik wiederholen", level: "Mittelstufe" },
        { subject: "Chemie", progress: 94, recommendation: "Organische Chemie erkunden", level: "Experte" },
        { subject: "Biologie", progress: 68, recommendation: "Zellbiologie üben", level: "Mittelstufe" }
      ],
      title: "Personalisierte Lehrerfahrung",
      subtitle: "Nutzen Sie die Kraft der künstlichen Intelligenz, um adaptive, ansprechende und datengesteuerte Lernerfahrungen für jeden Schüler zu schaffen.",
      aiPowered: "KI-gestütztes Lernzentrum",
      continueButton: "Lernen fortsetzen",
      studyResources: {
        title: "Lernressourcen",
        description: "Zugang zu kuratierten Lernmaterialien, die auf Ihren Fortschritt zugeschnitten sind",
        button: "Ressourcen durchsuchen"
      },
      studyGroups: {
        title: "Lerngruppen",
        description: "Nehmen Sie an kollaborativen Lernsitzungen mit Gleichgesinnten teil",
        button: "Gruppe beitreten"
      },
      setGoals: {
        title: "Ziele setzen",
        description: "Definieren und verfolgen Sie Ihre Lernziele",
        button: "Ziele setzen"
      }
    }
  };

  const currentContent = localizedContent[selectedLanguage as keyof typeof localizedContent];

  const personalizedContent = currentContent.subjects;

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
    <div className="min-h-screen notebook-paper relative overflow-hidden">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-transparent to-gray-100/20"></div>
      
      {/* Very subtle background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
      
      <div className="relative max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="animate-slide-up pb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6">
              <Brain className="h-4 w-4 text-gray-600 mr-2" />
              <span className="text-gray-700 font-medium text-sm">{currentContent.aiPowered}</span>
            </div>
            <div className="pb-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 text-shadow font-display leading-normal" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>
                {selectedLanguage === 'ar' ? (
                  <span className="block gradient-text pb-2">{currentContent.title}</span>
                ) : (
                  <>
                    {currentContent.title.split(' ')[0]}
                    <span className="block gradient-text pb-2">{currentContent.title.split(' ').slice(1).join(' ')}</span>
                  </>
                )}
              </h1>
            </div>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl leading-relaxed mb-8" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>
              {currentContent.subtitle}
            </p>
          </div>
          
          {/* Language Switcher */}
          <div className="flex flex-wrap gap-3 animate-fade-in">
            {Object.entries(languages).map(([code, lang]) => (
              <Button
                key={code}
                variant={selectedLanguage === code ? "default" : "outline"}
                onClick={() => setSelectedLanguage(code)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm ${
                  selectedLanguage === code 
                    ? "bg-gray-800 text-white shadow-lg hover:scale-105" 
                    : "border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${lang.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {lang.flag}
                </div>
                <span>{lang.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-gray-200 h-auto">
            <TabsTrigger 
              value="dashboard" 
              className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-medium text-sm transition-all data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-lg min-h-[3rem]"
            >
              <Target className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Dashboard</span>
              <span className="sm:hidden">Dash</span>
            </TabsTrigger>
            <TabsTrigger 
              value="assessment" 
              className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-medium text-sm transition-all data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-lg min-h-[3rem]"
            >
              <Brain className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Assessment</span>
              <span className="sm:hidden">Quiz</span>
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-medium text-sm transition-all data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:shadow-lg min-h-[3rem]"
            >
              <TrendingUp className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Analytics</span>
              <span className="sm:hidden">Stats</span>
            </TabsTrigger>
          </TabsList>

          {/* Personalized Learning Dashboard */}
          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {personalizedContent.map((subject, index) => {
                const gradients = [
                  'from-blue-300 to-blue-400',
                  'from-rose-300 to-rose-400',
                  'from-green-300 to-green-400',
                  'from-yellow-300 to-yellow-400'
                ];
                return (
                  <Card key={index} className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover-lift card-glow min-h-fit">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    <CardHeader className="relative pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg font-bold text-gray-900 leading-tight">{subject.subject}</CardTitle>
                        <div className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${gradients[index]} shrink-0`}>
                          {subject.level}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-3 font-medium">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-gray-900 font-bold">{subject.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${gradients[index]} rounded-full transition-all duration-500 relative overflow-hidden`}
                              style={{ width: `${subject.progress}%` }}
                            >
                              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                          <p className="text-sm font-medium text-gray-600 mb-1">AI Recommendation</p>
                          <p className="text-sm text-gray-800 font-semibold">{subject.recommendation}</p>
                        </div>
                        <Button className={`w-full bg-gradient-to-r ${gradients[index]} hover:scale-105 transition-transform shadow-lg font-medium text-sm`}>
                          {currentContent.continueButton}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-xl shrink-0">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>{currentContent.studyResources.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>{currentContent.studyResources.description}</p>
                <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50 text-sm">
                  {currentContent.studyResources.button}
                </Button>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 rounded-xl shrink-0">
                    <Users className="h-5 w-5 text-rose-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>{currentContent.studyGroups.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>{currentContent.studyGroups.description}</p>
                <Button variant="outline" className="w-full border-rose-200 hover:bg-rose-50 text-sm">
                  {currentContent.studyGroups.button}
                </Button>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-xl shrink-0">
                    <Target className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>{currentContent.setGoals.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>{currentContent.setGoals.description}</p>
                <Button variant="outline" className="w-full border-green-200 hover:bg-green-50 text-sm">
                  {currentContent.setGoals.button}
                </Button>
              </div>
            </div>
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
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
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
                        <p className="text-2xl font-bold text-green-400">8/10</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <TrendingUp className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Performance Trend</p>
                        <p className="text-2xl font-bold text-green-400">+12%</p>
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