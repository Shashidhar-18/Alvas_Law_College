// src/pages/Moot.tsx
import React from 'react';

import moot1 from '../assets/mo1.jpeg';
import moot2 from '../assets/mo2.jpeg';
import moot3 from '../assets/mo3.jpeg';
import moot4 from '../assets/mo4.jpeg'; // Add additional images as needed
import moot5 from '../assets/mo5.jpeg';
import moot6 from '../assets/moot6.jpg';


const mootImages = [moot1, moot2, moot3, moot4, moot5, moot6];

function Moot() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-6">Moot Court</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Moot Court exercises are an integral part of the curriculum, designed to equip students
          with essential skills such as legal writing, argumentation, courtroom etiquette, and effective communication.
          These exercises provide hands-on experience in various legal scenarios and are regularly conducted
          in state-of-the-art facilities specifically designed for this purpose.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mootImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Moot Court Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Moot;
