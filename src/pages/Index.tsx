
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, BookOpenText, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Mindful Memories
          </h1>
          <p className="text-gray-600">Your personal space for reflection</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

        <div className="mt-12 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Recent Entries
          </h3>
          <div className="max-w-2xl mx-auto p-4 backdrop-blur-lg bg-white/80 rounded-lg border border-gray-200">
            <p className="text-gray-600">No entries yet. Start writing today!</p>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;
