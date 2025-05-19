import React from 'react';
import mahanteshImg from '../assets/principal.jpg'; // Adjust path as needed
import mamathaImg from '../assets/Mamatha R.jpg';

const AuthorHeader = ({ name, image }: { name: string; image: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <img
      src={image}
      alt={name}
      className="w-20 h-20 rounded-full object-cover border-2 border-blue-200 shadow-sm hover:shadow-md transition duration-300"
    />
    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-blue-800 border-l-4 border-blue-400 pl-3 mb-3">{title}</h3>
    <div className="text-gray-700 leading-relaxed space-y-2">{children}</div>
  </div>
);

const Research = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-10 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16 tracking-tight">
          Research Publications
        </h1>

        {/* Mahantesh G S */}
        <div className="mb-20">
          <AuthorHeader name="Dr. Mahantesh G S – Principal" image={mahanteshImg} />

          <Section title="Seminars & Conferences – Papers Presented">
            <ul className="list-disc pl-6">
              <li>Presented over 24 research papers at prestigious conferences and seminars including KLE Law College, MS Ramaiah Institute, and Bhopal School of Social Sciences.</li>
              <li>Topics ranged from “Social and Economic Justice under Indian Constitution” to “AI in Intellectual Property Rights”.</li>
              <li>Participated internationally in forums like the 2nd ADR Conference hosted by RBDADR and the Brazilian Centre for Mediation.</li>
            </ul>
          </Section>

          <Section title="Research Articles Published">
            <ul className="list-disc pl-6">
              <li>30+ publications in reputed journals such as <em>Migration Letters</em>, <em>Webology</em>, and <em>RV Law Journal</em>.</li>
              <li>Highlighted themes include Right to Repair, Gender Justice, Foreign Arbitral Awards, ADR mechanisms, and Judicial Trends.</li>
              <li>Many are Scopus and UGC-CARE listed journals, showcasing a commitment to scholarly contribution.</li>
            </ul>
          </Section>

          <Section title="Books Authored">
            <ul className="list-disc pl-6">
              <li>Authored 5 legal books in 2024:
                <ul className="list-disc pl-6">
                  <li><strong>Corporate Social Responsibility</strong></li>
                  <li><strong>Environment Legislation and Policy</strong></li>
                  <li><strong>Women Law and Criminal Justice</strong></li>
                  <li><strong>RTI Law and Practice</strong></li>
                  <li><strong>Banking Law and Criminal Justice</strong></li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="Book Chapters">
            <ul className="list-disc pl-6">
              <li>Published scholarly chapters on:
                <ul className="list-disc pl-6">
                  <li>Recognition and Enforcement of Foreign Arbitral Awards</li>
                  <li>Protection of Child Rights</li>
                  <li>Domestic Violence Law and Gender Perspectives</li>
                </ul>
              </li>
            </ul>
          </Section>
        </div>

        {/* Mamatha R */}
        <div>
          <AuthorHeader name="Mamatha R – Assistant Professor" image={mamathaImg} />

          <Section title="Books Co-authored">
            <ul className="list-disc pl-6">
              <li>Contributed to 5 collaborative legal books in 2024 on topics including:
                <ul className="list-disc pl-6">
                  <li>CSR and Environmental Law</li>
                  <li>RTI Implementation</li>
                  <li>Women & Criminal Justice System</li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="Research Publications">
            <ul className="list-disc pl-6">
              <li>Authored journal papers in <em>Migration Letters</em>, <em>Asia Pacific Law Review</em>, and <em>Webology</em>.</li>
              <li>Key contributions include:
                <ul className="list-disc pl-6">
                  <li><strong>A Study of Women’s Access to Justice Through Legal Aid</strong></li>
                  <li><strong>The Economics of Repair</strong></li>
                  <li><strong>Judicial Decision-Making Trends</strong></li>
                  <li><strong>Prisoners' Conjugal Rights</strong></li>
                </ul>
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Research;
