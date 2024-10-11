import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Zap, Code, Sparkles, ChevronRight } from "lucide-react";
import {Link} from "react-router-dom";

export default function CodeReview() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="#">
          <Zap className="h-6 w-6 text-orange-500" />
          <span className="sr-only">CodeRabbit</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Supercharge Your Code Reviews
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  CodeRabbit uses AI to analyze your pull requests, providing insightful comments and suggestions to improve your code quality.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-orange-500">Get Started</Button>
                <Button variant="outline" className="border-orange-500">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Code className="h-8 w-8 mb-2 text-orange-500" />
                <h3 className="text-xl font-bold">Intelligent Code Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI analyzes your code for potential issues, style violations, and performance improvements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Github className="h-8 w-8 mb-2 text-orange-500" />
                <h3 className="text-xl font-bold">GitHub Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Seamlessly integrates with your GitHub workflow, providing comments directly on your pull requests.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Sparkles className="h-8 w-8 mb-2 text-orange-500" />
                <h3 className="text-xl font-bold">Continuous Learning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI model continuously learns and improves based on your team's coding patterns and feedback.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Hop In?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of developers who are already using CodeRabbit to improve their code quality.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 CodeRabbit. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}