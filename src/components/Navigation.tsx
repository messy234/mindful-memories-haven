
import { BookOpenText, MessageCircle, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="px-6 py-4 rounded-full bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg animate-fade-in">
      <ul className="flex items-center space-x-8">
        <li>
          <Link
            to="/"
            className={`flex flex-col items-center transition-colors duration-300 ${
              isActive("/")
                ? "text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/diary"
            className={`flex flex-col items-center transition-colors duration-300 ${
              isActive("/diary")
                ? "text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            <BookOpenText className="w-6 h-6" />
            <span className="text-xs mt-1">Diary</span>
          </Link>
        </li>
        <li>
          <Link
            to="/chat"
            className={`flex flex-col items-center transition-colors duration-300 ${
              isActive("/chat")
                ? "text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs mt-1">Chat</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
