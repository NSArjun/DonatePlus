import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Call-to-Action Section */}
      <div className="bg-emerald-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Community Today
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about donation opportunities and community impact stories.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-emerald-100">Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">DONATE</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting generous hearts with those in need. Together, we're building a more compassionate world, one donation at a time.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>contact@donate.org</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>123 Compassion St, Giving City, GC 12345</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/donate-food" className="text-gray-400 hover:text-emerald-400 transition-colors">Donate Food</a></li>
                <li><a href="/donate-resources" className="text-gray-400 hover:text-emerald-400 transition-colors">Donate Resources</a></li>
                <li><a href="/ragpickers" className="text-gray-400 hover:text-emerald-400 transition-colors">Ragpickers System</a></li>
                <li><a href="/crowdfunding" className="text-gray-400 hover:text-emerald-400 transition-colors">Crowdfunding</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2025 DONATE. All rights reserved. Built with ❤️ for a better tomorrow.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;