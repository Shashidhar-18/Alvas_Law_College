import React from 'react';
import lib1 from '../assets/li1.jpeg';
import lib2 from '../assets/li2.jpeg';
import lib3 from '../assets/li3.jpeg';
import lib4 from '../assets/li4.jpeg'; // add more if needed
import lib5 from '../assets/li5.jpeg';
import lib6 from '../assets/li6.jpeg';


const libraryImages = [lib1, lib2, lib3, lib4, lib5, lib6];

function Library() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8 underline decoration-indigo-400 underline-offset-4">
        Library
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {libraryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Library view ${index + 1}`}
            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 object-cover w-full h-64"
          />
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Alva’s Law College Library is a <strong className="text-indigo-700">7,500 sq. ft.</strong> facility dedicated to supporting law faculty and students.
          It houses <strong className="text-indigo-700">928 books</strong>, including <strong className="text-indigo-700">176 reference books</strong>, along with 
          <strong className="text-indigo-700"> 12 journals, 7 magazines,</strong> and <strong className="text-indigo-700">6 newspapers</strong>.
          The library is fully automated using Easylib software and is affiliated with the 
          <strong className="text-indigo-700"> National Digital Library of India</strong>, <strong className="text-indigo-700">DELNET</strong>, and 
          <strong className="text-indigo-700"> INFLIBNET-NLIST</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Key Services</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Book lending (12-day loan period for textbooks)</li>
          <li>Reference services</li>
          <li>Newspaper clippings</li>
          <li>Internet and digital resource access</li>
          <li>Manupatra, INFLIBNET & DELNET access</li>
          <li>Orientation programs and book reservations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Operating Hours</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><strong className="text-gray-800">Monday to Friday:</strong> 9:00 AM – 5:00 PM</li>
          <li><strong className="text-gray-800">Closed:</strong> Sundays and selected holidays</li>
        </ul>
      </div>
    </div>
  );
}

export default Library;
