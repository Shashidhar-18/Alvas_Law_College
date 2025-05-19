import React from 'react';

function Committees() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-10 underline decoration-indigo-400 underline-offset-4">
        Committees
      </h1>

      <div className="space-y-10">

        {/* Committee Card */}
        {committees.map((committee, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">{committee.title}</h2>

            {committee.description && (
              <p className="text-gray-600 mb-4">{committee.description}</p>
            )}

            <h3 className="font-bold text-gray-800 mb-2">Objectives:</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              {committee.objectives.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="font-bold text-gray-800 mb-2">Members:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {committee.members.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
}

const committees = [
  {
    title: "Legal Aid Cell",
    description:
      "A legal aid cell is established in educational institutions to provide free legal assistance and support to individuals who lack the financial resources to access justice.",
    objectives: [
      "Access to justice",
      "Legal awareness",
      "Educate individuals about their legal rights and available remedies",
      "Support for dispute resolution through mediation or litigation",
    ],
    members: [
      "Prof. Mahanthesh G S - Chairperson",
      "Advocate Sarol Arun Bangera - Advocate",
      "Advocate Harish - Moodbidri Bar Association",
      "Prof. Mamtha R - Professor",
      "Swathi - Office Assistant",
    ],
  },
  {
    title: "Human Rights Committee",
    objectives: [
      "Promote human rights awareness",
      "Provide redressal mechanisms",
      "Educate individuals about their fundamental rights",
      "Promote equality and eliminate discrimination",
    ],
    members: [
      "Prof. Mahanthesh G S - Chairperson",
      "Advocate Sarol Arun Bangera - Member",
      "Prof. Amrutha - Member",
      "Prof. Prashanth - Member",
      "Prof. Pushpalatha - Coordinator",
    ],
  },
  {
    title: "Grievance Redressal Cell",
    objectives: [
      "Provide a platform for female students to voice grievances",
      "Prevent harassment and misconduct",
      "Educate students about gender sensitivity and women’s rights",
      "Handle grievances discreetly and confidentially",
    ],
    members: [
      "Prof. Mamatha R - Senior Faculty",
      "Prof. Shruthi - Faculty",
      "Prof. Mookambika - NAAC Coordinator",
      "Prof. Swapna - Faculty, MSW Department",
      "Arpita N Hiremath - Student, 1st year LLB",
      "Adithi Priya - Student, 1st year B.COM LLB",
    ],
  },
  {
    title: "Equal Opportunity Cell",
    objectives: [
      "Implement constitutional safeguards for marginalized students",
      "Ensure adherence to articles 15, 16, 17, and 46 of the Indian Constitution",
      "Address grievances of SC/ST students",
    ],
    members: [
      "Prof. Mahanthesh G S - Principal",
      "Deepak Naik - Librarian",
      "Roopa - Student, 1st year LLB",
      "Swathi - Office Assistant",
    ],
  },
  {
    title: "Prevention of Sexual Harassment Cell",
    objectives: [
      "Promote a safe environment for faculty and students",
      "Raise awareness about the POSH Act 2013",
      "Address complaints effectively",
    ],
    members: [
      "Prof. Mamtha R - Senior Professor",
      "Advocate Saril Arun Bangera - Advocate & Counselor",
      "Dr. Kurian - Principal",
      "Dr. Swapna - POSH Member",
      "Swathi - Office Staff",
    ],
  },
  {
    title: "Anti-Ragging Committee",
    objectives: [
      "Ensure a safe and respectful environment for all students",
      "Make the campus ragging-free",
      "Address complaints fairly and recommend disciplinary actions",
    ],
    members: [
      "Prof. Mahanthesh G S - Chairperson",
      "Prof. Mamtha R - Senior Professor",
      "Dr. Kurian - Principal",
      "Prof. Prashant - Faculty",
      "Anila Bhandary - Student Representative",
      "Mayur - Student Representative",
      "Baby Suvarna - Parent Representative",
      "Swathi - Office Staff",
    ],
  },
];

export default Committees;
