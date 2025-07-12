import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BarChart3, TrendingDown, TrendingUp, Users, GraduationCap, AlertTriangle, Target, CheckCircle } from "lucide-react";

const Governance = () => {
  const performanceData = [
    { grade: "Grade 9", average: 85, trend: "+3%", students: 120 },
    { grade: "Grade 10", average: 78, trend: "-2%", students: 115 },
    { grade: "Grade 11", average: 82, trend: "+5%", students: 108 },
    { grade: "Grade 12", average: 89, trend: "+7%", students: 95 }
  ];

  const dropoutRiskStudents = [
    { name: "Ahmed M.", grade: "10", risk: 85, factors: ["Attendance", "Performance"] },
    { name: "Sarah K.", grade: "11", risk: 72, factors: ["Engagement", "Family"] },
    { name: "Omar L.", grade: "9", risk: 68, factors: ["Performance"] },
    { name: "Fatima A.", grade: "12", risk: 59, factors: ["Attendance"] }
  ];

  const schoolMetrics = [
    { label: "Overall Performance", value: 83, change: "+2.5%", trend: "up" },
    { label: "Student Satisfaction", value: 91, change: "+4.1%", trend: "up" },
    { label: "Teacher Effectiveness", value: 88, change: "+1.8%", trend: "up" },
    { label: "Resource Utilization", value: 76, change: "-0.5%", trend: "down" }
  ];

  const getRiskColor = (risk: number) => {
    if (risk >= 80) return "destructive";
    if (risk >= 60) return "secondary";
    return "outline";
  };

  const getRiskLevel = (risk: number) => {
    if (risk >= 80) return "High";
    if (risk >= 60) return "Medium";
    return "Low";
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">School Governance Analytics</h1>
          <p className="text-muted-foreground text-lg">Data-driven insights for educational leadership</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="dropout" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Dropout Prevention
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              AI Insights
            </TabsTrigger>
          </TabsList>

          {/* Overview Dashboard */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schoolMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardDescription>{metric.label}</CardDescription>
                    <CardTitle className="text-3xl font-bold flex items-center gap-2">
                      {metric.value}%
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm ${metric.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                      {metric.change} from last semester
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Student Population Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Students</span>
                      <span className="font-bold">1,248</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Active Enrollment</span>
                      <span className="font-bold text-emerald-500">97.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>International Students</span>
                      <span className="font-bold">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Special Needs Support</span>
                      <span className="font-bold">8.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Academic Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Honor Roll Students</span>
                      <span className="font-bold">23%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>University Acceptance Rate</span>
                      <span className="font-bold text-emerald-500">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>STEM Program Participation</span>
                      <span className="font-bold">67%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Language Certifications</span>
                      <span className="font-bold">41%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Analytics */}
          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Grade Level Performance Analysis</CardTitle>
                <CardDescription>
                  Comparative performance metrics across all grade levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {performanceData.map((grade, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h3 className="font-semibold">{grade.grade}</h3>
                          <p className="text-sm text-muted-foreground">{grade.students} students</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">{grade.average}%</p>
                          <p className={`text-sm ${grade.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                            {grade.trend}
                          </p>
                        </div>
                      </div>
                      <Progress value={grade.average} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Mathematics</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Science</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Language Arts</span>
                        <span>79%</span>
                      </div>
                      <Progress value={79} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Social Studies</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Teacher Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Student Satisfaction</span>
                      <span className="font-bold">4.6/5.0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Lesson Completion Rate</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Professional Development</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Technology Integration</span>
                      <span className="font-bold">72%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dropout Prevention */}
          <TabsContent value="dropout" className="space-y-6">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                AI has identified 12 students at risk of dropping out. Immediate intervention recommended.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>High-Risk Students Requiring Intervention</CardTitle>
                <CardDescription>
                  AI-powered analysis of student behavior patterns and performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dropoutRiskStudents.map((student, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">Grade {student.grade}</p>
                        </div>
                        <Badge variant={getRiskColor(student.risk)}>
                          {getRiskLevel(student.risk)} Risk ({student.risk}%)
                        </Badge>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Risk Level</span>
                          <span className="text-sm">{student.risk}%</span>
                        </div>
                        <Progress value={student.risk} className="h-2" />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Risk Factors:</p>
                        <div className="flex gap-2">
                          {student.factors.map((factor, factorIndex) => (
                            <Badge key={factorIndex} variant="outline" className="text-xs">
                              {factor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Intervention Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-emerald-500">89%</p>
                      <p className="text-muted-foreground">Students retained through AI intervention</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Early Warning System</span>
                        <span>92% accurate</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Intervention Response Rate</span>
                        <span>76% positive</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Long-term Retention</span>
                        <span>83% success</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Schedule Parent Conferences</p>
                        <p className="text-sm text-muted-foreground">For 4 high-risk students</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Implement Peer Mentoring</p>
                        <p className="text-sm text-muted-foreground">Match with successful students</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Adjust Learning Plans</p>
                        <p className="text-sm text-muted-foreground">Personalized curriculum modifications</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Insights */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Predictive Analytics</CardTitle>
                  <CardDescription>AI-powered forecasts for the next semester</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                        Expected Improvements
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Mathematics scores predicted to increase by 4%</li>
                        <li>• Student engagement expected to rise by 12%</li>
                        <li>• Dropout risk reduction of 15%</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                        Areas Requiring Attention
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Science lab equipment utilization below optimal</li>
                        <li>• Grade 10 showing higher stress indicators</li>
                        <li>• Library resource usage declining</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resource Optimization</CardTitle>
                  <CardDescription>AI recommendations for better resource allocation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Classroom Utilization</h4>
                      <p className="text-sm text-muted-foreground mb-2">Current efficiency: 73%</p>
                      <Progress value={73} className="h-2 mb-2" />
                      <p className="text-xs">Recommendation: Redistribute 3 classes to optimize space usage</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Teacher Workload</h4>
                      <p className="text-sm text-muted-foreground mb-2">Average load: 85%</p>
                      <Progress value={85} className="h-2 mb-2" />
                      <p className="text-xs">Recommendation: Consider hiring 1 additional math teacher</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Technology Usage</h4>
                      <p className="text-sm text-muted-foreground mb-2">Device utilization: 68%</p>
                      <Progress value={68} className="h-2 mb-2" />
                      <p className="text-xs">Recommendation: Increase BYOD policy adoption</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Short-term (1-3 months)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Implement peer tutoring program</li>
                      <li>• Upgrade science lab equipment</li>
                      <li>• Launch parent engagement initiative</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Long-term (6-12 months)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Expand STEM curriculum</li>
                      <li>• Develop AI-assisted learning modules</li>
                      <li>• Create mental health support program</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Governance;