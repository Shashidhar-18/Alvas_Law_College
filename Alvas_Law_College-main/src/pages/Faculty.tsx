import React from "react";
import faculty1 from '../assets/principal.jpg';
import prof1 from '../assets/prof.png'
import Amritha from '../assets/Amrita Jayashankar.jpg'
import Prashantha from '../assets/Prashantha  Kumara M.D.jpg'
import Pushpa from '../assets/Pushpa Latha D.jpg'
import Akshatha from '../assets/Akshatha Jain.jpg'
import Mamatha from '../assets/Mamatha R.jpg'
import Venugopal from '../assets/Venugopal Shatty K.jpg'
import Swathi from '../assets/Swathi.jpg'
import DEEPAK from '../assets/DEEPAK .jpg'

const facultyMembers = [
  // Teaching Faculty
  {
    name: "Mahantesh G S (Principal)",
    qualification: "B.Com, LLM, (Ph.D), SLET",
    image: faculty1,
    role: "Teaching Faculty",
  },
  {
    name: "Mamatha R (Faculty in Law)",
    qualification: "B.A, LLM, MBA, (Ph.D), NET, SLET",
    image: Mamatha ,
    role: "Teaching Faculty",
  },
  {
    name: "Amritha J (Faculty in Law)",
    qualification: "BBA, LLM",
    image: Amritha,
    role: "Teaching Faculty",
  },
  {
    name: "Shruthi Hegde (Faculty in Law)",
    qualification: "B.A LLM",
    image:prof1,
    role: "Teaching Faculty",
  },
  {
    name: "Pushpalatha (Faculty in Commerce)",
    qualification: "M.COM, MBA, NET, SLET, M.Ed",
    image: Pushpa,
    role: "Teaching Faculty",
  },
  {
    name: "Akshatha Jain (Faculty in Commerce)",
    qualification: "M.COM, B.Ed",
    image: Akshatha,
    role: "Teaching Faculty",
  },
  {
    name: "Deeshma (Faculty in English)",
    qualification: "M.A in English",
    image: prof1,
    role: "Teaching Faculty",
  },
  {
    name: "Prashanth Kumar M D (Faculty in Economics)",
    qualification: "MA in Economics, M.Phil",
    image: Prashantha,
    role: "Teaching Faculty",
  },
  {
    name: "Venugopal (Faculty in Kannada)",
    qualification: "M.A in Kannada",
    image: Venugopal,
    role: "Teaching Faculty",
  },
  {
    name: "Thilak Shetty (Physical Director)",
    qualification: "B.A, M.P.Ed",
    image: prof1,
    role: "Teaching Faculty",
  },

  // Non-Teaching Faculty
  {
    name: "Shyamalatha",
    qualification: "Chief Librarian",
    image: prof1,
    role: "Non-Teaching Faculty",
  },
  {
    name: "Deepak Naik",
    qualification: "Assistant Librarian (M.Lib.I.Sc)",
    image: DEEPAK,
    role: "Non-Teaching Faculty",
  },
  {
    name: "Swathi",
    qualification: "Office Superintendent",
    image: Swathi,
    role: "Non-Teaching Faculty",
  },
];

function Faculty() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Faculty</h1>

      {/* Teaching Faculty Section */}
      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Teaching Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers
            .filter((member) => member.role === "Teaching Faculty")
            .map((faculty, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.qualification}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Non-Teaching Faculty Section */}
      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Non-Teaching Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers
            .filter((member) => member.role === "Non-Teaching Faculty")
            .map((faculty, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.qualification}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
