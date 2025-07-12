import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, GraduationCap, BookOpen, BarChart3, Settings, FileText, Home } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Teaching", href: "/teaching", icon: BookOpen },
    { name: "Governance", href: "/governance", icon: BarChart3 },
    { name: "Administration", href: "/administration", icon: Settings },
    { name: "Proposal", href: "/proposal", icon: FileText },
  ];

  const isActive = (path: string) => location.pathname === path;

  const NavItems = () => (
    <>
      {navigation.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
              active
                ? "bg-gray-800 text-white shadow-lg"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <div className={`p-1 rounded-lg transition-colors ${
              active ? "bg-white/20" : "group-hover:bg-gray-200"
            }`}>
              <Icon className={`h-4 w-4 ${active ? "text-white" : "group-hover:text-gray-800"}`} />
            </div>
            <span className="font-semibold">{item.name}</span>
            {active && (
              <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative p-2 bg-gray-800 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gray-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                <GraduationCap className="relative h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800 font-display">
                  EduAI Nexus
                </span>
                <div className="text-xs text-gray-500 font-medium tracking-wide">Intelligence in Education</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavItems />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 px-4">
                    <div className="p-2 bg-gray-800 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-gray-800">
                        EduAI Nexus
                      </span>
                      <div className="text-xs text-gray-500 font-medium">Next-Gen Learning</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 px-2">
                    <NavItems />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;