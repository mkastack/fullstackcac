import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import churchLogo from "/church-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Sermons", 
    path: "/sermons",
    subLinks: [
      { name: "Video Sermons", path: "/sermons/video" },
      { name: "Audio Sermons", path: "/sermons/audio" },
    ]
  },
  { name: "Events", path: "/events" },
  { name: "Ministries", path: "/ministries" },
  { name: "Prayer", path: "/prayer" },
  { name: "Give", path: "/give" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={churchLogo} 
              alt="Christ Apostolic Church International" 
              className="h-14 w-14 object-contain"
            />
            <div className={`hidden sm:block transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
              <span className="font-serif font-bold text-lg leading-tight block">Christ Apostolic Church</span>
              <span className="text-xs font-medium opacity-80">International • Bubiashie Central</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? isScrolled 
                        ? "text-red-500 bg-church-gold/10" 
                        : "text-red-500"
                      : isScrolled
                        ? "text-foreground/80 hover:text-church-deep-blue hover:bg-muted"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.subLinks && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-card py-2 min-w-[180px]"
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-church-deep-blue hover:bg-muted transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-red-500" asChild>
              <Link to="/give">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-3 text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-church-gold"
                        : "text-foreground/80 hover:text-church-deep-blue"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-4">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block py-2 text-sm text-muted-foreground hover:text-church-deep-blue"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/give">Donate</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
