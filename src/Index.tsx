
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, BookOpenText, MessageCircle, Heart, Lock, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Mindful Memories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personal digital sanctuary for journaling, reflection, and growth.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <Card className="p-6 backdrop-blur-lg bg-white/80 border border-gray-200 animate-fade-in hover:shadow-lg transition-shadow duration-300">
            <BookOpenText className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Journal</h3>
            <p className="text-gray-600">
              Write, reflect, and capture your thoughts in a beautiful digital space.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-lg bg-white/80 border border-gray-200 animate-fade-in hover:shadow-lg transition-shadow duration-300">
            <MessageCircle className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Companion</h3>
            <p className="text-gray-600">
              Get emotional support and insights from your personal AI friend.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-lg bg-white/80 border border-gray-200 animate-fade-in hover:shadow-lg transition-shadow duration-300">
            <Lock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Private & Secure</h3>
            <p className="text-gray-600">
              Your thoughts are safe with us. Enhanced security for peace of mind.
            </p>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="p-6 backdrop-blur-lg bg-white/80 border border-gray-200 animate-fade-in hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Quick Entry</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:text-primary/80"
                asChild
              >
                <Link to="/diary">
                  <Plus className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-600 mb-4">
              Capture your thoughts and feelings in the moment.
            </p>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link to="/diary">Start Writing</Link>
            </Button>
          </Card>

          <Card className="p-6 backdrop-blur-lg bg-white/80 border border-gray-200 animate-fade-in hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                AI Companion
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:text-primary/80"
                asChild
              >
                <Link to="/chat">
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-600 mb-4">
              Chat with your supportive AI companion anytime.
            </p>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link to="/chat">Start Chatting</Link>
            </Button>
          </Card>
        </div>

        {/* Recent Activity Section */}
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Begin Your Journey
          </h3>
          <p className="text-gray-600 mb-8">
            Start writing today and create a beautiful collection of your thoughts, memories, and experiences.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link to="/diary">Create Your First Entry</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-white/50 backdrop-blur-lg border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mindful Memories</h4>
              <p className="text-gray-600">Your digital sanctuary for personal growth</p>
            </div>
            <div className="flex items-center space-x-4">
              <Heart className="text-primary w-5 h-5" />
              <span className="text-gray-600">Made with love for mindfulness</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-none">
        <div className="pointer-events-auto">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Index;
