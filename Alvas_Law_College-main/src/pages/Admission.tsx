import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admission() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply'); // Ensure your route path matches this
  };

  return (
    <div className="px-4 md:px-16 lg:px-32 py-12 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12">
        Admission
      </h1>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-100 transition hover:shadow-blue-200">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
          How to Apply
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Eligible candidates may register themselves along with a
          <strong className="text-blue-800"> non-refundable registration fee of Rs. 1,000/-</strong>.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Application Process:</h3>
          <ul className="list-disc pl-6 text-gray-700 text-base space-y-2">
            <li>Fill the application form with relevant details.</li>
            <li>Pay the required application fee of Rs. 1,000/-.</li>
            <li>Upload the necessary documents.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Required Documents:</h3>
          <ul className="list-disc pl-6 text-gray-700 text-base space-y-2">
            <li>Caste certificate</li>
            <li>2nd PUC / 12th Standard mark sheet</li>
            <li>SSLC / 10th Standard mark sheet</li>
            <li>11th Standard mark sheet</li>
            <li>Formal passport-size photograph (white background)</li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={handleApplyClick}
            className="mt-6 px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admission;