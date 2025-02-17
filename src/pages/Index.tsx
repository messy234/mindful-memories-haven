
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, BookOpenText, MessageCircle, Heart, Lock, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Moving gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-pink-300/30 to-blue-300/30 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-300/20 via-purple-300/20 to-pink-300/20 animate-gradient-slow" />

      <div className="relative">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Mindful Memories
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Your personal digital sanctuary for journaling, reflection, and emotional well-being. 
              Connect with an AI companion that understands and supports your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary/90 hover:bg-primary text-white backdrop-blur-sm" size="lg">
                Sign Up
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm">
                Log In
              </Button>
            </div>
          </header>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="p-6 backdrop-blur-lg bg-white/60 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <BookOpenText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Journal</h3>
              <p className="text-gray-700">
                Document your journey with our beautiful and intuitive journaling interface.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-lg bg-white/60 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Companion</h3>
              <p className="text-gray-700">
                Get emotional support and insights from your personal AI friend.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-lg bg-white/60 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Private & Secure</h3>
              <p className="text-gray-700">
                Your thoughts and feelings are safe with our secure platform.
              </p>
            </Card>
          </div>

          {/* Getting Started Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Journey Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 backdrop-blur-lg bg-white/60 border border-white/20 shadow-xl">
                <div className="mb-4">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Daily Reflections</h3>
                  <p className="text-gray-700 mb-4">
                    Build a mindful routine with daily journaling prompts and insights.
                  </p>
                </div>
              </Card>
              <Card className="p-8 backdrop-blur-lg bg-white/60 border border-white/20 shadow-xl">
                <div className="mb-4">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Emotional Support</h3>
                  <p className="text-gray-700 mb-4">
                    Get 24/7 support from our compassionate AI companion.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 backdrop-blur-md bg-white/30 border-t border-white/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-700 mb-4 md:mb-0">© 2024 Mindful Memories. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Heart className="text-primary w-5 h-5" />
                <span className="text-gray-700">Made with love for mindfulness</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;
