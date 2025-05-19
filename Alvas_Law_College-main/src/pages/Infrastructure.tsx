import React from 'react';
import { Gavel, BookOpenCheck } from 'lucide-react';

function Infrastructure() {
  return (
    <div className="px-6 py-12 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12 underline underline-offset-8 decoration-blue-600">
        Campus Infrastructure
      </h1>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Moot Court Section */}
        <div className="bg-white border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <Gavel className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800">Moot Court</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Moot Court exercises are an integral part of the curriculum, designed to equip students with essential skills 
            such as legal writing, argumentation, courtroom etiquette, and effective communication. These simulations offer 
            hands-on experience in real legal scenarios, conducted in state-of-the-art facilities purpose-built for legal training.
          </p>
        </div>

        {/* Library Section */}
        <div className="bg-white border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <BookOpenCheck className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800">Library</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spanning approximately 7,500 square feet, the Alva's Law College Library houses 928 titles including 176 reference books, 
            12 journals, 7 magazines, and 6 newspapers. It provides a spacious, well-furnished environment conducive to focused study. 
            Fully automated with Easylib software, the library ensures easy access to resources. We are proud members of 
            the National Digital Library of India, DELNET, and INFLIBNET-NLIST.
          </p>
          <div>
            <p className="font-semibold text-gray-800 mb-1">Operating Hours:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Monday to Friday: 9:00 AM – 5:00 PM</li>
              <li>Closed on Sundays and selected holidays</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Infrastructure;
