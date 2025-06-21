import { Link } from "react-router-dom";
import mylogonew from "../assets/images/reallogonew.png";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        {/* Company Info */}
        <div>
          <img
            src={mylogonew}
            alt="Company Logo"
            className="h-12 w-12 mb-3 object-contain"
          />
          <h2 className="text-lg font-semibold text-blue-600 mb-2">
            Dexbit Technologies
          </h2>
          <p>
            Leading the way in Blockchain, IT, and Software Solutions. We build secure, scalable, and innovative products for the future.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold mb-3">Company</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-600 transition">Services</Link></li>
            <li><Link to="/careers" className="hover:text-blue-600 transition">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-md font-semibold mb-3">Our Expertise</h3>
          <ul className="space-y-1">
            <li><Link to="/services/blockchain" className="hover:text-blue-600 transition">Blockchain</Link></li>
            <li><Link to="/services/smart-contracts" className="hover:text-blue-600 transition">Smart Contracts</Link></li>
            <li><Link to="/services/mobile-apps" className="hover:text-blue-600 transition">Mobile Apps</Link></li>
            <li><Link to="/services/web-development" className="hover:text-blue-600 transition">Web Development</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-3">Contact</h3>

          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:dexbittech@gmail.com" className="text-blue-600 hover:underline">
              sales.dexbit@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-blue-600" />
            <a href="tel:+919369464481" className="text-blue-600 hover:underline">
              +91 93694 64481
            </a>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-blue-600" />
            <a href="tel:+917088322825" className="text-blue-600 hover:underline">
              +91 70883 22825
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>Delhi, India</span>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs mt-12 border-t pt-6">
        © {new Date().getFullYear()} Dexbit Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
