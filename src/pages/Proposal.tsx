import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Server, Users, CheckCircle, Star, ArrowUp, ArrowDown } from "lucide-react";

const Proposal = () => {
  const costBreakdown = [
    { category: "Software Licenses", year1: 2800, year2: 3200, year3: 3500, description: "AI platforms, LMS, analytics tools (educational discounts)" },
    { category: "Infrastructure", year1: 4200, year2: 1400, year3: 1600, description: "Cloud hosting, basic server setup, networking" },
    { category: "Training & Development", year1: 2100, year2: 1200, year3: 900, description: "Staff training, online certifications" },
    { category: "Implementation Services", year1: 3500, year2: 800, year3: 500, description: "Setup assistance, basic integration" },
    { category: "Maintenance & Support", year1: 1400, year2: 1800, year3: 2100, description: "Technical support, updates, helpdesk" }
  ];

  const savingsComparison = [
    { metric: "Administrative Tasks", before: "40 hours/week", after: "12 hours/week", saving: "70%" },
    { metric: "Grading Time", before: "20 hours/week", after: "6 hours/week", saving: "70%" },
    { metric: "Student Support", before: "24/7 staff needed", after: "AI + 8 hours staff", saving: "67%" },
    { metric: "Scheduling Conflicts", before: "15% of schedules", after: "2% of schedules", saving: "87%" },
    { metric: "Data Processing", before: "Manual reports", after: "Automated insights", saving: "95%" }
  ];

  const techStack = [
    { name: "Microsoft Azure Education", category: "Cloud Platform", cost: "Educational Pricing", features: ["AI Services", "Analytics", "Security"] },
    { name: "Google Workspace for Education", category: "Productivity Suite", cost: "Free/Low-cost", features: ["Classroom", "Drive", "Meet"] },
    { name: "Open Source LMS", category: "Learning Management", cost: "Free", features: ["Moodle", "Canvas", "Customizable"] },
    { name: "Educational AI Tools", category: "AI Integration", cost: "Freemium", features: ["ChatGPT for Education", "Educational APIs", "Student Analytics"] }
  ];

  const roiData = [
    { year: "Year 1", investment: 14000, savings: 8500, roi: -39.3 },
    { year: "Year 2", investment: 7400, savings: 15000, roi: 102.7 },
    { year: "Year 3", investment: 8500, savings: 20000, roi: 135.3 }
  ];

  const getTotalCost = (year: keyof typeof costBreakdown[0]) => {
    return costBreakdown.reduce((total, item) => total + (item[year] as number), 0);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">AI Integration Proposal</h1>
          <p className="text-muted-foreground text-lg">Affordable AI implementation for schools - Comprehensive cost analysis in JOD with realistic pricing for educational institutions</p>
        </div>

        {/* Affordability Highlight */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-green-200 bg-green-50 dark:bg-green-950">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">JD 14,000</p>
                <p className="text-sm text-green-700 dark:text-green-300">First Year Investment</p>
                <p className="text-xs text-muted-foreground mt-1">≈ JD 1,167/month</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">85% Less</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">Than Enterprise Solutions</p>
                <p className="text-xs text-muted-foreground mt-1">Educational pricing applied</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">20 Months</p>
                <p className="text-sm text-purple-700 dark:text-purple-300">Break-Even Point</p>
                <p className="text-xs text-muted-foreground mt-1">Start saving in year 2</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="costs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="costs" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Cost Breakdown
            </TabsTrigger>
            <TabsTrigger value="savings" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Cost Savings
            </TabsTrigger>
            <TabsTrigger value="roi" className="flex items-center gap-2">
              <ArrowUp className="h-4 w-4" />
              ROI Analysis
            </TabsTrigger>
            <TabsTrigger value="tech" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              Tech Stack
            </TabsTrigger>
          </TabsList>

          {/* Cost Breakdown */}
          <TabsContent value="costs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>3-Year Investment Overview</CardTitle>
                  <CardDescription>Total implementation costs by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Year 1</p>
                        <p className="text-2xl font-bold">JD {getTotalCost("year1").toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Year 2</p>
                        <p className="text-2xl font-bold">JD {getTotalCost("year2").toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Year 3</p>
                        <p className="text-2xl font-bold">JD {getTotalCost("year3").toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Total Investment</p>
                        <p className="text-3xl font-bold text-primary">
                          JD {(getTotalCost("year1") + getTotalCost("year2") + getTotalCost("year3")).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Distribution</CardTitle>
                  <CardDescription>Percentage breakdown by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {costBreakdown.map((item, index) => {
                      const total = getTotalCost("year1") + getTotalCost("year2") + getTotalCost("year3");
                      const categoryTotal = item.year1 + item.year2 + item.year3;
                      const percentage = Math.round((categoryTotal / total) * 100);
                      
                      return (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{item.category}</span>
                            <span className="text-sm">{percentage}%</span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Cost Breakdown</CardTitle>
                <CardDescription>Annual costs by category with descriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Category</th>
                        <th className="text-right p-3">Year 1</th>
                        <th className="text-right p-3">Year 2</th>
                        <th className="text-right p-3">Year 3</th>
                        <th className="text-left p-3">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costBreakdown.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-3 font-medium">{item.category}</td>
                          <td className="p-3 text-right">JD {item.year1.toLocaleString()}</td>
                          <td className="p-3 text-right">JD {item.year2.toLocaleString()}</td>
                          <td className="p-3 text-right">JD {item.year3.toLocaleString()}</td>
                          <td className="p-3 text-sm text-muted-foreground">{item.description}</td>
                        </tr>
                      ))}
                      <tr className="border-b-2 border-primary font-bold">
                        <td className="p-3">Total</td>
                        <td className="p-3 text-right">JD {getTotalCost("year1").toLocaleString()}</td>
                        <td className="p-3 text-right">JD {getTotalCost("year2").toLocaleString()}</td>
                        <td className="p-3 text-right">JD {getTotalCost("year3").toLocaleString()}</td>
                        <td className="p-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cost Savings */}
          <TabsContent value="savings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Before vs After AI Implementation</CardTitle>
                  <CardDescription>Operational efficiency improvements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {savingsComparison.map((item, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold">{item.metric}</h4>
                          <Badge variant="default" className="bg-green-400">
                            {item.saving} saved
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="p-2 bg-red-50 dark:bg-red-950 rounded">
                            <p className="text-red-700 dark:text-red-300 font-medium">Before</p>
                            <p>{item.before}</p>
                          </div>
                          <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                            <p className="text-green-600 dark:text-green-400 font-medium">After</p>
                            <p>{item.after}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quantified Annual Savings</CardTitle>
                  <CardDescription>Estimated cost reductions in monetary terms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Labor Cost Reduction</h4>
                      <p className="text-2xl font-bold">JD 8,500</p>
                      <p className="text-sm text-muted-foreground">Reduced administrative overhead</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-lg">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Efficiency Gains</h4>
                      <p className="text-2xl font-bold">JD 4,500</p>
                      <p className="text-sm text-muted-foreground">Faster processes and automation</p>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Error Reduction</h4>
                      <p className="text-2xl font-bold">JD 2,500</p>
                      <p className="text-sm text-muted-foreground">Reduced mistakes and rework</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Resource Optimization</h4>
                      <p className="text-2xl font-bold">JD 5,000</p>
                      <p className="text-sm text-muted-foreground">Better utilization of facilities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ROI Analysis */}
          <TabsContent value="roi" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>3-Year ROI Timeline</CardTitle>
                  <CardDescription>Investment vs returns over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {roiData.map((year, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold">{year.year}</h4>
                          <div className="flex items-center gap-2">
                            {year.roi > 0 ? (
                              <ArrowUp className="h-4 w-4 text-green-400" />
                            ) : (
                              <ArrowDown className="h-4 w-4 text-red-500" />
                            )}
                            <Badge variant={year.roi > 0 ? "default" : "destructive"}>
                              {year.roi > 0 ? "+" : ""}{year.roi.toFixed(1)}% ROI
                            </Badge>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Investment</p>
                            <p className="font-bold">JD {year.investment.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Savings</p>
                            <p className="font-bold text-green-400">JD {year.savings.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Break-Even Analysis</CardTitle>
                  <CardDescription>When the investment pays for itself</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary mb-2">20 months</p>
                      <p className="text-muted-foreground">Break-even point</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Cumulative Investment (3 years)</span>
                        <span className="font-bold">JD 29,900</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cumulative Savings (3 years)</span>
                        <span className="font-bold text-green-400">JD 43,500</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span>Net Benefit (3 years)</span>
                        <span className="font-bold text-green-400">JD 13,600</span>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                        Key Success Factors
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Early adoption of AI tools reduces learning curve</li>
                        <li>• Staff training completion within 6 months</li>
                        <li>• Full system integration by end of year 1</li>
                        <li>• Regular optimization and updates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment & Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Potential Risks</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                        <p className="font-medium text-yellow-700 dark:text-yellow-300">Implementation Delays</p>
                        <p className="text-sm">Technical challenges or staff resistance</p>
                      </div>
                      <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                        <p className="font-medium text-red-700 dark:text-red-300">Cost Overruns</p>
                        <p className="text-sm">Additional requirements or customizations</p>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-950 rounded-lg">
                        <p className="font-medium text-gray-700 dark:text-gray-300">Technology Changes</p>
                        <p className="text-sm">Rapid evolution of AI landscape</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Mitigation Strategies</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        <p className="font-medium text-green-600 dark:text-green-400">Phased Implementation</p>
                        <p className="text-sm">Gradual rollout with regular checkpoints</p>
                      </div>
                      <div className="p-3 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                        <p className="font-medium text-emerald-700 dark:text-emerald-300">Contingency Budget</p>
                        <p className="text-sm">15% buffer for unexpected costs</p>
                      </div>
                      <div className="p-3 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                        <p className="font-medium text-emerald-700 dark:text-emerald-300">Regular Reviews</p>
                        <p className="text-sm">Monthly assessments and adjustments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tech Stack */}
          <TabsContent value="tech" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {tech.cost === "Free" && <Star className="h-5 w-5 text-yellow-500" />}
                          {tech.name}
                        </CardTitle>
                        <CardDescription>{tech.category}</CardDescription>
                      </div>
                      <Badge variant={tech.cost === "Free" ? "default" : "outline"}>
                        {tech.cost}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Features:</h4>
                      <div className="grid gap-2">
                        {tech.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Implementation Roadmap</CardTitle>
                <CardDescription>Phased approach to technology deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Phase 1: Foundation (Months 1-3)</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          Azure cloud setup
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          Basic AI services integration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          Staff training program
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Phase 2: Expansion (Months 4-8)</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          Google AI platform deployment
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          Custom model development
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          Advanced analytics
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">Phase 3: Optimization (Months 9-12)</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          TensorFlow model fine-tuning
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          Full system integration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          Performance optimization
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Open Source vs Enterprise Solutions</CardTitle>
                <CardDescription>Balanced approach for cost-effective implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-emerald-600">Open Source Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• No licensing fees for core AI frameworks</li>
                      <li>• Community-driven development and support</li>
                      <li>• Flexibility for custom modifications</li>
                      <li>• Access to cutting-edge research implementations</li>
                      <li>• Reduced vendor lock-in</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-700">Enterprise Advantages</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Professional support and SLAs</li>
                      <li>• Pre-built integrations and APIs</li>
                      <li>• Enterprise-grade security and compliance</li>
                      <li>• Scalable infrastructure management</li>
                      <li>• Regular updates and maintenance</li>
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

export default Proposal;