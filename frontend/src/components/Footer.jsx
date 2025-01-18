import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 sm:px-12 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="text-center sm:text-left">
          <img src={assets.logo} className="mb-5 w-32 mx-auto sm:mx-0" alt="Logo" />
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, praesentium magni. Officia voluptates autem
            animi.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/about" className="hover:text-black transition duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-black transition duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-black transition duration-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-black transition duration-200">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>123 Street Name, City, Country</li>
            <li>Email: info@example.com</li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-300 mt-10 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
