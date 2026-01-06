import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              I Don't Stop When I'm Tired.
              <br />
              <span className="text-cyan-400">I Stop When I'm Done.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300">
              A mindset inspired by{" "}
              <span className="font-semibold">~David Goggins</span>
            </p>

            <Link
              to="/exercises"
              className="inline-block mt-10 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
