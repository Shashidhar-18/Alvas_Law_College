import React from 'react';
import logo from '../assets/lgoo.png';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-br from-black via-gray-800 to-blue-900 text-white">
      
     {/* Top Contact Strip */}
{/* Top Contact Strip */}
<div className="w-full bg-white-950 text-lg px-4 py-6 flex flex-col md:flex-row justify-between items-center">
  <div className="flex gap-6 flex-wrap justify-center md:justify-start text-white">
    <span>📞 College Office: 7026041555</span>
    <span>📞 9379525826</span>
    <span>📞 9035255086</span>
  </div>
  <div className="flex gap-4 flex-wrap justify-center md:justify-end mt-4 md:mt-0 text-white">
    <span>
      ✉️ <a href="mailto:lawcollege@alvascollege.com" className="hover:text-blue-300">lawcollege@alvascollege.com</a>
    </span>
    <span>
      ✉️ <a href="mailto:principal@alvascollege.com" className="hover:text-blue-300">principal@alvascollege.com</a>
    </span>
  </div>
</div>


      {/* Main Header Section */}
      <div className="max-w-[2000px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="https://alvas.org/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="Alvas Law College Logo"
              className="h-28 w-28 md:h-32 md:w-32 transition-all duration-300"
            />
          </a>
        </div>

        {/* College Name & Affiliations */}
        <div className="text-center font-serif">
          <h1 className="text-4xl font-bold mb-2">ALVA'S LAW COLLEGE</h1>
          <p className="text-lg">(A Unit of Alva's Education Foundation®) Recognized By Karnataka State Law University</p>
          <p className="text-lg">Approved by Bar Council of India, New Delhi</p>
          <p className="text-sm mt-1">Smt. Sundari Ananda Alva Campus, Vidyagiri, Moodbidre, 574227</p>
        </div>

      </div>
    </header>
  );
};

export default Header;
