import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Aceprep.png';

function Footer() {
  const footerLinks = [
    { name: 'FAQs', href: '/faqs' },
    { name: 'Support', href: '/support' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const socialLinks = [
    { icon: FaFacebookSquare, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaSquareXTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagramSquare, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="AcePrep Logo" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-white">AcePrep</span>
              </Link>
              <p className="text-secondary-300 text-lg leading-relaxed mb-6 max-w-md">
                Transform your career with our comprehensive interview preparation platform. 
                From AI-powered mock interviews to ATS optimization - your success story starts here.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary-800 hover:bg-primary-600 transition-all duration-200 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {footerLinks.slice(0, 3).map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.slice(3).map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-secondary-700 pt-12 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-secondary-300 mb-6">
                Get the latest interview tips, career advice, and platform updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-secondary-800 border border-secondary-600 text-white placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                />
                <button className="btn-primary px-6 py-3 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-700 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-secondary-400 text-sm">
              © 2024 AcePrep. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-secondary-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-secondary-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;