import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../assets/instagram.png";
import leetcodeIcon from "../assets/leetcode.png";

const Footer = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {["About", "Blog", "Team", "Pricing", "Contact", "Terms"].map(
            (item) => (
              <div key={item} className="px-5 py-2">
                <Link
                  to="#"
                  className="text-base leading-6 text-gray-400 hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              </div>
            )
          )}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/vkmore2002/"
            className="text-gray-400 hover:text-cyan-400"
          >
            <img
              src={leetcodeIcon}
              alt="LeetCode"
              className="w-6 h-6 object-contain bg-white opacity-70 hover:opacity-100"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/vk_more2002"
            className="text-gray-400 hover:text-cyan-400"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-6 h-6 object-contain opacity-70 hover:opacity-100"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vkmore2002"
            className="text-gray-400 hover:text-cyan-400"
          >
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-base leading-6 text-center text-gray-500">
          © {new Date().getFullYear()} Iron Mentality. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
