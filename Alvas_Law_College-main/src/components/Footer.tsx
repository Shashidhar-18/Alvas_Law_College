import React from "react";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Facilities", path: "/faculty" },
    { name: "Publications", path: "/research" },
    { name: "Committees", path: "/committees" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-800 to-blue-900 text-white py-12 px-6 md:px-20 font-sans">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-white pb-1">Contact Us</h3>
          <p>
            Smt. Sundari Ananda Alva Campus, Vidyagiri, Moodbidre,
            Dakshina Kannada, 574227, Karnataka, India
          </p>
          <p className="mt-2">Phone: 7026041555</p>
          <p>
            Email: <a href="mailto:lawcollege@alvascollege.com" className="hover:text-yellow-400">lawcollege@alvascollege.com</a>
          </p>
          <p>
            Email: <a href="mailto:principal@alvascollege.com" className="hover:text-yellow-400">principal@alvascollege.com</a>
          </p>

          {/* Instagram Link Section */}
          <div className="mt-4">
            <a
              href="https://www.instagram.com/alvaslawcollege?igsh=ZzA3dGxpYW80d3Y0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-500 text-3xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-white pb-1">How to Reach</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.2366224826594!2d74.99359297457663!3d13.069166139976998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4ab1fe8bf04a1%3A0x1fab3cec21fc93b6!2sAlvas%20Law%20College!5e0!3m2!1sen!2sin!4v1744177541165!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 rounded-xl shadow-lg"
          ></iframe>
        </div>

        {/* Quick Links Section */}
        <div className="ml-0 md:ml-9">
          <h3 className="text-lg font-semibold mb-2 border-b border-white pb-1">Quick Links</h3>
          <ul className="space-y-1">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.path} className="hover:text-yellow-400">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400 text-xs">
        Alva's Law College — Recognized By Karnataka State Law University | Approved by BCI
      </div>
    </footer>
  );
};

export default Footer;
