import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Calendar, Users, Clock, Send, Camera, CheckCircle, AlertCircle, MapPin } from "lucide-react";

const Administration = () => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Student", message: "When is the next physics exam?", time: "10:30 AM", type: "question" },
    { id: 2, user: "AI Assistant", message: "The next physics exam is scheduled for Friday, December 15th at 9:00 AM in Room 204.", time: "10:31 AM", type: "answer" },
    { id: 3, user: "Student", message: "What documents do I need for university applications?", time: "10:35 AM", type: "question" },
    { id: 4, user: "AI Assistant", message: "For university applications, you'll need: transcripts, recommendation letters, personal statement, and standardized test scores. I can help you track which ones you've completed.", time: "10:36 AM", type: "answer" }
  ]);
  
  const [newMessage, setNewMessage] = useState("");

  const scheduleData = [
    { day: "Monday", periods: [
      { time: "8:00-8:45", subject: "Mathematics", teacher: "Dr. Ahmed", room: "201" },
      { time: "8:50-9:35", subject: "Physics", teacher: "Ms. Sarah", room: "Lab-A" },
      { time: "9:40-10:25", subject: "Chemistry", teacher: "Dr. Omar", room: "Lab-B" },
      { time: "10:45-11:30", subject: "English", teacher: "Ms. Fatima", room: "105" },
      { time: "11:35-12:20", subject: "History", teacher: "Mr. Hassan", room: "203" }
    ]},
    { day: "Tuesday", periods: [
      { time: "8:00-8:45", subject: "Biology", teacher: "Dr. Layla", room: "Lab-C" },
      { time: "8:50-9:35", subject: "Mathematics", teacher: "Dr. Ahmed", room: "201" },
      { time: "9:40-10:25", subject: "Arabic", teacher: "Ms. Nour", room: "107" },
      { time: "10:45-11:30", subject: "PE", teacher: "Coach Ali", room: "Gym" },
      { time: "11:35-12:20", subject: "Art", teacher: "Ms. Rana", room: "Studio" }
    ]}
  ];

  const attendanceData = [
    { name: "Ahmed Al-Rashid", id: "2024001", status: "present", time: "7:45 AM", method: "Face Recognition" },
    { name: "Sarah Johnson", id: "2024002", status: "present", time: "7:52 AM", method: "ID Card" },
    { name: "Omar Hassan", id: "2024003", status: "late", time: "8:15 AM", method: "Manual Entry" },
    { name: "Fatima Al-Zahra", id: "2024004", status: "present", time: "7:38 AM", method: "Face Recognition" },
    { name: "Mohammed Ali", id: "2024005", status: "absent", time: "-", method: "-" },
    { name: "Layla Ahmad", id: "2024006", status: "present", time: "7:55 AM", method: "Face Recognition" }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: chatMessages.length + 1,
        user: "Student",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "question"
      };
      setChatMessages([...chatMessages, newMsg]);
      setNewMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          user: "AI Assistant",
          message: "I understand your question. Let me help you with that information. This is a simulated response for demonstration purposes.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "answer"
        };
        setChatMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case "late":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "absent":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "default";
      case "late":
        return "secondary";
      case "absent":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen notebook-paper relative overflow-hidden">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-transparent to-gray-100/20"></div>
      
      {/* Very subtle background elements - Simplified */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-400/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-500/2 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AI-Powered Administration</h1>
          <p className="text-muted-foreground text-lg">Streamlined school management with intelligent automation</p>
        </div>

        <Tabs defaultValue="chatbot" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chatbot" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              AI Chatbot
            </TabsTrigger>
            <TabsTrigger value="scheduling" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Smart Scheduling
            </TabsTrigger>
            <TabsTrigger value="attendance" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Attendance Tracking
            </TabsTrigger>
          </TabsList>

          {/* AI Chatbot */}
          <TabsContent value="chatbot" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="h-[600px] flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Student Support Chatbot
                    </CardTitle>
                    <CardDescription>
                      AI-powered assistant for student inquiries and support
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ScrollArea className="flex-1 mb-4 p-4 border rounded-lg">
                      <div className="space-y-4">
                        {chatMessages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex ${msg.user === "AI Assistant" ? "justify-start" : "justify-end"}`}
                          >
                            <div
                              className={`max-w-[80%] p-3 rounded-lg ${
                                msg.user === "AI Assistant"
                                  ? "bg-muted text-muted-foreground"
                                  : "bg-primary text-primary-foreground"
                              }`}
                            >
                              <p className="text-sm font-medium mb-1">{msg.user}</p>
                              <p className="text-sm">{msg.message}</p>
                              <p className="text-xs mt-2 opacity-70">{msg.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your question..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Check Exam Schedule
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      View Grades
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Find Classroom
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      Library Hours
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chatbot Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm">Daily Interactions</span>
                        <span className="font-bold">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Resolution Rate</span>
                        <span className="font-bold text-green-400">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Average Response Time</span>
                        <span className="font-bold">1.2s</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Student Satisfaction</span>
                        <span className="font-bold">4.7/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Smart Scheduling */}
          <TabsContent value="scheduling" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Generated Weekly Schedule</CardTitle>
                    <CardDescription>
                      Automatically optimized class schedules based on teacher availability, room capacity, and student preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {scheduleData.map((day, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-lg mb-3">{day.day}</h3>
                          <div className="grid gap-2">
                            {day.periods.map((period, periodIndex) => (
                              <div key={periodIndex} className="p-3 border rounded-lg flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                  <Badge variant="outline">{period.time}</Badge>
                                  <div>
                                    <p className="font-medium">{period.subject}</p>
                                    <p className="text-sm text-muted-foreground">{period.teacher}</p>
                                  </div>
                                </div>
                                <Badge variant="secondary">{period.room}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        <h4 className="font-semibold text-green-600 dark:text-green-400 mb-1">
                          Optimizations Applied
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• Reduced teacher transitions by 23%</li>
                          <li>• Balanced lab usage across days</li>
                          <li>• Minimized student break gaps</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Room Utilization</span>
                          <span className="font-bold">89%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Teacher Efficiency</span>
                          <span className="font-bold">94%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Student Satisfaction</span>
                          <span className="font-bold">91%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Schedule Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Generate Next Week
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Handle Substitutions
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="h-4 w-4 mr-2" />
                      Optimize Time Blocks
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Attendance Tracking */}
          <TabsContent value="attendance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="h-5 w-5" />
                      Real-time Attendance Monitoring
                    </CardTitle>
                    <CardDescription>
                      AI-powered attendance tracking using facial recognition and smart card integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {attendanceData.map((student, index) => (
                        <div key={index} className="p-4 border rounded-lg flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            {getStatusIcon(student.status)}
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-muted-foreground">ID: {student.id}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={getStatusColor(student.status)} className="mb-2">
                              {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                            </Badge>
                            <p className="text-sm text-muted-foreground">{student.time}</p>
                            <p className="text-xs text-muted-foreground">{student.method}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-green-400">83%</p>
                        <p className="text-muted-foreground">Present Today</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Present</span>
                          <span className="font-bold text-green-400">5 students</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Late</span>
                          <span className="font-bold text-yellow-500">1 student</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Absent</span>
                          <span className="font-bold text-red-500">1 student</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Future AI Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 dark:bg-gray-950 rounded-lg">
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Computer Vision
                        </h4>
                        <p className="text-sm">Facial recognition and behavior analysis for automated attendance</p>
                      </div>
                      <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Smart Analytics
                        </h4>
                        <p className="text-sm">Predictive patterns for early intervention and engagement tracking</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">
                          Integration
                        </h4>
                        <p className="text-sm">Seamless connection with learning management systems</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Administration;