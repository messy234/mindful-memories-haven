
import { BookOpenText, MessageCircle, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 md:pb-6 z-50">
      <nav className="w-full max-w-sm md:max-w-md mx-4 px-6 py-3 md:py-4 rounded-2xl md:rounded-full bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg animate-fade-in">
        <ul className="flex items-center justify-around md:justify-between">
          <li>
            <Link
              to="/"
              className={`flex flex-col items-center transition-all duration-300 px-3 py-1 rounded-xl hover:bg-purple-50 ${
                isActive("/")
                  ? "text-primary scale-110 bg-purple-50"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <Home className={`w-6 h-6 ${isActive("/") ? "animate-pulse" : ""}`} />
              <span className="text-xs mt-1 font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/diary"
              className={`flex flex-col items-center transition-all duration-300 px-3 py-1 rounded-xl hover:bg-purple-50 ${
                isActive("/diary")
                  ? "text-primary scale-110 bg-purple-50"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <BookOpenText className={`w-6 h-6 ${isActive("/diary") ? "animate-pulse" : ""}`} />
              <span className="text-xs mt-1 font-medium">Diary</span>
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              className={`flex flex-col items-center transition-all duration-300 px-3 py-1 rounded-xl hover:bg-purple-50 ${
                isActive("/chat")
                  ? "text-primary scale-110 bg-purple-50"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <MessageCircle className={`w-6 h-6 ${isActive("/chat") ? "animate-pulse" : ""}`} />
              <span className="text-xs mt-1 font-medium">Chat</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
