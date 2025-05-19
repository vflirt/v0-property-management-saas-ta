import Link from "next/link"
import {
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  CreditCard,
  Headphones,
  MessageSquare,
  PieChart,
  Shield,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Property Management Made Simple</h1>
              <p className="text-lg md:text-xl mb-8">
                Streamline your property management with AI-powered maintenance and tenant communication. Available 24/7
                to handle tenant requests and simplify your workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#pricing">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Link href="#demo">See Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Property Managers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage your properties efficiently and keep your tenants happy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI Maintenance Support",
                  description: "24/7 AI-powered maintenance request handling and prioritization",
                  icon: Sparkles,
                },
                {
                  title: "Tenant Portal",
                  description: "Self-service portal for tenants to submit requests and make payments",
                  icon: Users,
                },
                {
                  title: "Financial Tracking",
                  description: "Comprehensive financial tracking and reporting for all properties",
                  icon: CreditCard,
                },
                {
                  title: "Property Analytics",
                  description: "Data-driven insights to optimize your property management",
                  icon: PieChart,
                },
                {
                  title: "Lease Management",
                  description: "Digital lease signing and management with automated reminders",
                  icon: Building,
                },
                {
                  title: "Secure Communications",
                  description: "Encrypted messaging between landlords, managers, and tenants",
                  icon: Shield,
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock support for both property managers and tenants",
                  icon: Headphones,
                },
                {
                  title: "Automated Scheduling",
                  description: "Smart scheduling for maintenance visits and property inspections",
                  icon: Clock,
                },
              ].map((feature, index) => (
                <Card key={index} className="border-border/40 bg-background">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that works best for your property management needs.
              </p>
            </div>

            <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly Billing (Save 20%)</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Starter Plan */}
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>For small property owners</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$29</span>
                        <span className="text-muted-foreground ml-2">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {["Up to 5 properties", "Basic AI maintenance support", "Tenant portal", "Email support"].map(
                          (feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-primary mr-2" />
                              <span>{feature}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>

                  {/* Professional Plan */}
                  <Card className="border-primary shadow-lg">
                    <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                      <div className="py-1 px-3 bg-white text-primary text-xs font-semibold rounded-full w-fit mb-2">
                        MOST POPULAR
                      </div>
                      <CardTitle>Professional</CardTitle>
                      <CardDescription className="text-primary-foreground/90">
                        For growing property managers
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$79</span>
                        <span className="text-primary-foreground/90 ml-2">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {[
                          "Up to 20 properties",
                          "Advanced AI maintenance",
                          "Tenant & manager portal",
                          "Financial tracking",
                          "Lease management",
                          "Priority support",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>

                  {/* Enterprise Plan */}
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large property portfolios</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$199</span>
                        <span className="text-muted-foreground ml-2">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Unlimited properties",
                          "Premium AI maintenance",
                          "Custom branding",
                          "Advanced analytics",
                          "API access",
                          "Dedicated account manager",
                          "24/7 phone support",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="yearly" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Starter Plan - Yearly */}
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>For small property owners</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$23</span>
                        <span className="text-muted-foreground ml-2">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Billed annually ($276)</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {["Up to 5 properties", "Basic AI maintenance support", "Tenant portal", "Email support"].map(
                          (feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-primary mr-2" />
                              <span>{feature}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>

                  {/* Professional Plan - Yearly */}
                  <Card className="border-primary shadow-lg">
                    <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                      <div className="py-1 px-3 bg-white text-primary text-xs font-semibold rounded-full w-fit mb-2">
                        MOST POPULAR
                      </div>
                      <CardTitle>Professional</CardTitle>
                      <CardDescription className="text-primary-foreground/90">
                        For growing property managers
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$63</span>
                        <span className="text-primary-foreground/90 ml-2">/month</span>
                      </div>
                      <p className="text-sm text-primary-foreground/80 mt-2">Billed annually ($756)</p>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {[
                          "Up to 20 properties",
                          "Advanced AI maintenance",
                          "Tenant & manager portal",
                          "Financial tracking",
                          "Lease management",
                          "Priority support",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>

                  {/* Enterprise Plan - Yearly */}
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large property portfolios</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$159</span>
                        <span className="text-muted-foreground ml-2">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Billed annually ($1,908)</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "Unlimited properties",
                          "Premium AI maintenance",
                          "Custom branding",
                          "Advanced analytics",
                          "API access",
                          "Dedicated account manager",
                          "24/7 phone support",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See AI Support in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Watch how our AI assistant helps tenants create and analyze maintenance tickets.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="p-8 max-w-2xl w-full">
                    <div className="border rounded-lg p-4 bg-background shadow-sm">
                      <div className="flex items-start mb-4">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Tenant</p>
                          <p className="text-muted-foreground">
                            Hi, my kitchen sink is leaking and there's water all over the floor. Can someone come fix
                            it?
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start mb-4">
                        <div className="bg-primary p-3 rounded-full mr-4">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">PropertyPulse AI</p>
                          <p className="text-muted-foreground">
                            I'm sorry to hear about your leaking sink. This sounds like an urgent issue that needs
                            immediate attention. I've created a high-priority maintenance ticket #4582.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start mb-4">
                        <div className="bg-primary p-3 rounded-full mr-4">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">PropertyPulse AI</p>
                          <p className="text-muted-foreground">
                            Can you please send a photo of the leak? Also, have you turned off the water supply under
                            the sink to prevent further damage?
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Tenant</p>
                          <p className="text-muted-foreground">
                            I turned off the valve under the sink. Here's a photo of the leak. It looks like it's coming
                            from the pipe connection.
                          </p>
                          <div className="mt-2 bg-muted rounded-md p-2 text-center text-sm text-muted-foreground">
                            [Photo of sink leak]
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="flex justify-center p-6 bg-background">
                  <Button size="lg">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Have questions about PropertyPulse? Our team is here to help you find the right solution for your
                  property management needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-muted-foreground">
                        123 Property Lane, Suite 456
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Headphones className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Support</h3>
                      <p className="text-muted-foreground">
                        support@propertypulse.com
                        <br />
                        (800) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9am - 6pm PST
                        <br />
                        AI Support: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            First name
                          </label>
                          <input
                            id="first-name"
                            className="w-full p-2 rounded-md border border-input bg-background"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Last name
                          </label>
                          <input
                            id="last-name"
                            className="w-full p-2 rounded-md border border-input bg-background"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 rounded-md border border-input bg-background"
                          placeholder="john.doe@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company
                        </label>
                        <input
                          id="company"
                          className="w-full p-2 rounded-md border border-input bg-background"
                          placeholder="Your company"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full p-2 rounded-md border border-input bg-background resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Send Message</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
