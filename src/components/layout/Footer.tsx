import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react";
import churchLogo from "/church-logo.png"; // Replace with actual logo path

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Sermons", path: "/sermons" },
  { name: "Events", path: "/events" },
  { name: "Ministries", path: "/ministries" },
  { name: "Prayer Request", path: "/prayer" },
  { name: "Give", path: "/give" },
];

const ministries = [
  { name: "Men's Ministry", path: "/ministries#men" },
  { name: "Women's Ministry", path: "/ministries#women" },
  { name: "Youth Ministry", path: "/ministries#youth" },
  { name: "Children's Church", path: "/ministries#children" },
  { name: "Evangelism", path: "/ministries#evangelism" },
];

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Youtube, url: "#", label: "YouTube" },
  { icon: Instagram, url: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-church-deep-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={churchLogo} 
                alt="CACI Logo" 
                className="h-14 w-14 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="font-serif font-bold text-lg">Christ Apostolic</h3>
                <span className="text-sm text-white/70">Church International</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A place of worship, transformation, and hope. Join us as we spread the love of Christ to all nations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-church-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Ministries</h4>
            <ul className="space-y-3">
              {ministries.map((ministry) => (
                <li key={ministry.name}>
                  <Link
                    to={ministry.path}
                    className="text-white/70 hover:text-church-gold transition-colors text-sm"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-300 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Bubiashie Central, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-300 shrink-0" />
                <a href="tel:+233000000000" className="text-white/70 hover:text-white text-sm transition-colors">
                  +233 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-300 shrink-0" />
                <a href="mailto:christapostolicchurchbubiashie@gmail.com" className="text-white/70 hover:text-white text-sm transition-colors">
                  christapostolicchurchbubiashie@gmail.com

                </a>
              </li>
            </ul>

            {/* Service Times */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="font-medium mb-3">Service Times</h5>
              <p className="text-white/70 text-sm">Sunday: 8:00 AM & 10:30 AM</p>
              <p className="text-white/70 text-sm">Wednesday: 6:00 PM</p>
              <p className="text-white/70 text-sm">Friday: 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Christ Apostolic Church International - Bubiashie Central. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
