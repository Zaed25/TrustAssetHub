import React from "react";
import {
  Building2,
  Car,
  Shield,
  Sparkles,
  Home,
  DollarSign,
  Users,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function LandingPageComp() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="relative bg-gradient-to-br from-deep-navy to-[#3d5a8f] min-h-[80vh] flex items-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              variants={fadeIn}
            >
              Find Your Perfect
              <span className="text-teal"> Asset</span>
            </motion.h1>
            <motion.p className="text-xl text-white/90 mb-8" variants={fadeIn}>
              Your trusted platform for secure real estate and automotive
              trading
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4 justify-center">
              <Link
                to="/register"
                className="inline-block bg-gradient-to-r from-teal to-[#2C8984] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
              <button className="inline-block bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Home />}
              number="1000+"
              label="Properties Listed"
            />
            <StatCard icon={<Car />} number="500+" label="Vehicles Available" />
            <StatCard icon={<Users />} number="10K+" label="Happy Customers" />
            <StatCard icon={<Star />} number="4.9" label="User Rating" />
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="container mx-auto px-4 py-24"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold text-center text-deep-navy mb-16"
        >
          Why Choose Our Platform?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-deep-navy" />}
            title="Secure Trading"
            description="Advanced security measures to protect your valuable assets"
          />
          <FeatureCard
            icon={<Building2 className="w-8 h-8 text-teal" />}
            title="Verified Listings"
            description="Every property and vehicle listing is thoroughly verified"
          />
          <FeatureCard
            icon={<DollarSign className="w-8 h-8 text-soft-gold" />}
            title="Best Value"
            description="Competitive prices and transparent transactions"
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-teal" />}
            title="AI-Powered"
            description="Smart matching algorithm for optimal deals"
          />
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="bg-deep-navy py-24"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 mb-8">
              Join thousands of satisfied users who trust our platform for their
              asset trading needs.
            </p>
            <Link
              to="/register"
              className="inline-block bg-gradient-to-r from-teal to-[#2C8984] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <motion.div variants={fadeIn} className="text-center">
      <div className="inline-block p-4 rounded-full bg-deep-navy/5 mb-4">
        <div className="text-deep-navy">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-deep-navy mb-2">{number}</div>
      <div className="text-neutral-600">{label}</div>
    </motion.div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-deep-navy mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
}

export default LandingPageComp;
