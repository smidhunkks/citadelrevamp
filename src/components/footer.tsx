import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
  >
    <rect width="24" height="24" fill="white" />
  </svg>
);

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Publications", href: "#publications" },
  { name: "Authors", href: "#authors" },
  { name: "Our Team", href: "#team" },
];

const supportLinks = [
  { name: "Contact Us", href: "#contact" },
  { name: "Submission Guidelines", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1829] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold">Citadel Publication</span>
            </div>
            <p className="mt-4 max-w-sm text-gray-400">
              Empowering authors and readers through exceptional publishing
              services. We bring stories to life and knowledge to the world.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container flex h-16 flex-col items-center justify-center text-center sm:flex-row sm:justify-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Citadel Publication. All rights
            reserved. |{" "}
            <a href="#" className="hover:text-white">
              Website Builder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
