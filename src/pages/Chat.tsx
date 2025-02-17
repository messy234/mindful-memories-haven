
import Navigation from "@/components/Navigation";

const Chat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Companion</h1>
          <p className="text-gray-600">Your supportive chat partner</p>
        </header>

        <div className="max-w-4xl mx-auto p-6 backdrop-blur-lg bg-white/80 rounded-lg border border-gray-200 animate-fade-in">
          <p className="text-gray-600 text-center">Chat feature coming soon...</p>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Chat;
