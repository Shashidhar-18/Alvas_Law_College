import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

function Courses() {
  return (
    <div className="px-6 py-12 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12 underline underline-offset-8 decoration-blue-600">
        Our Law Programs
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* 3-Year LLB */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800">3-Year LLB</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Designed for graduates from any discipline, this course develops skilled legal professionals with strong foundations in law and advocacy.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-1">Course Details:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Duration: 3 years (6 semesters)</li>
              <li>Merit-based admission under Karnataka State Law University</li>
              <li>Eligibility: Graduation from a recognized university</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Eligibility Criteria:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li><strong>General:</strong> Minimum 45% marks</li>
              <li><strong>OBC:</strong> Minimum 42% marks</li>
              <li><strong>SC/ST:</strong> Minimum 40% marks</li>
            </ul>
          </div>
        </div>

        {/* 5-Year B.Com LLB */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800">5-Year B.Com LLB</h2>
          </div>
          <p className="text-gray-700 mb-4">
            A dual-degree program that blends commerce and law, giving students a competitive edge in corporate law, taxation, and financial legalities.
          </p>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Eligibility Criteria:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Passed 10+2 (PUC or equivalent) from a recognized board</li>
              <li><strong>General:</strong> Minimum 45% marks</li>
              <li><strong>OBC:</strong> Minimum 42% marks</li>
              <li><strong>SC/ST:</strong> Minimum 40% marks</li>
            </ul>
          </div>
        </div>

        {/* 5-Year BA LLB */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center justify-between w-full">
              BA LLB
              <span className="ml-4 text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                Approval from BCA awaited
              </span>
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            A dual-degree program that blends commerce and law, giving students a competitive edge in corporate law, taxation, and financial legalities.
          </p>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Eligibility Criteria:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Passed 10+2 (PUC or equivalent) from a recognized board</li>
              <li><strong>General:</strong> Minimum 45% marks</li>
              <li><strong>OBC:</strong> Minimum 42% marks</li>
              <li><strong>SC/ST:</strong> Minimum 40% marks</li>
            </ul>
          </div>
        </div>

        {/* 5-Year BBA LLB */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center justify-between w-full">
              BBA LLB
              <span className="ml-4 text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                Approval from BCA awaited
              </span>
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            A dual-degree program that blends commerce and law, giving students a competitive edge in corporate law, taxation, and financial legalities.
          </p>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Eligibility Criteria:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Passed 10+2 (PUC or equivalent) from a recognized board</li>
              <li><strong>General:</strong> Minimum 45% marks</li>
              <li><strong>OBC:</strong> Minimum 42% marks</li>
              <li><strong>SC/ST:</strong> Minimum 40% marks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
