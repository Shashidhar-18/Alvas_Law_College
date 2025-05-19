// src/pages/Messages.tsx
import React from 'react';
import { motion } from 'framer-motion';
import principal from '../assets/principal.jpg';
import chaiman from '../assets/chairman.webp'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Messages: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Chairman's Message */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <motion.div
          className="container mx-auto flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Chairman's Message</h2>
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl transition-transform hover:scale-105 duration-500">
            <img 
              src={chaiman} 
              alt="Chairman" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-blue-900 text-lg">Dr. MOHAN ALVA, Chairman</p>
          <div className="max-w-4xl text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
            <p>Legal education plays a fundamental role in shaping a civilized, just and progressive society. It is not merely a study of laws but a gateway to understanding justice, governance and human rights. A well-structured legal education cultivates critical thinking, ethical reasoning and problem-solving skills, which are essential for ensuring a fair and equitable society.</p>
            <p>The significance of legal education extends far beyond the walls of a courtroom. The law influences every aspect of life, from business transactions and corporate governance to public policy and international relations. It provides individuals with the knowledge and skills necessary to address complex legal challenges, advocate for justice, and contribute meaningfully to the rule of law.</p>
            <p>A career in law is one of the most respected and impactful professions in the world. It offers a diverse range of opportunities, from litigation and corporate law to human rights advocacy, intellectual property law, environmental law and dispute resolution. Today, as economies and societies become more interconnected, the demand for skilled legal professionals has increased exponentially.</p>
            <p>Beyond traditional legal practice, lawyers now play a crucial role in business negotiations, technology regulations, cyber law, arbitration and international diplomacy. With the rise of artificial intelligence, data privacy concerns and global trade conflicts, the legal profession continues to expand into new and exciting fields.</p>
            <p>For those with a passion for justice, a legal career offers not just financial stability but also the ability to make a tangible difference in society. Lawyers serve as defenders of justice, advisors to governments and corporations and advocates for those who seek fairness and equality under the law.</p>
            <p>At Alva’s Law College, we are committed to fostering a new generation of legal professionals equipped with the knowledge, skills, and ethical values required to meet the demands of an evolving legal landscape. Our curriculum is designed to provide a balance between theoretical knowledge and practical experience, ensuring that students are well-prepared to face real-world legal challenges.</p>
            <p>We emphasize not only legal principles but also critical thinking, research proficiency and courtroom advocacy skills. Through moot court competitions, internships and legal research, our students gain hands-on experience that enhances their confidence and competence.</p>
            <p>Moreover, we believe that legal education should instil a strong sense of social responsibility. Law is not merely a profession; it is a tool for societal transformation. A well-trained legal professional has the power to influence policies, reform justice systems and ensure that the principles of fairness and equity are upheld.</p>
            <p>To all aspiring lawyers, I encourage you to approach legal education with dedication, curiosity, and a commitment to justice. The journey of legal study requires discipline and perseverance, but the rewards—both personal and professional—are immense. As future legal professionals, you will have the privilege and responsibility of upholding the law, resolving disputes, and contributing to the betterment of society.</p>
            <p>The legal field is ever-evolving, and those who embrace continuous learning and adaptability will thrive. Whether you choose to be a litigator, a corporate legal advisor, a policymaker, or a judge, your role will be instrumental in shaping the legal and social fabric of our nation.</p>
            <p>At Alva’s Law College, we take immense pride in nurturing individuals who will lead with integrity, wisdom, and a sense of justice. Let us work together to build a society where law serves as a pillar of equality, fairness, and progress.</p>
          </div>
        </motion.div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 px-4 md:px-20 bg-white-50">
        <motion.div
          className="container mx-auto flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Principal's Message</h2>
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-xl transition-transform hover:scale-105 duration-500">
            <img 
              src={principal} 
              alt="Principal" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-blue-900 text-lg">Mahantesh G S, Principal</p>
          <div className="max-w-4xl text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
            <p>Welcome to Alva’s Law College, a distinguished institution dedicated to academic excellence, legal innovation, and social justice. It is my privilege to address you as the principal of this esteemed law College, where we are committed to shaping the next generation of legal professionals who will lead with integrity, wisdom, and a deep sense of justice.</p>
            <p>Law has always been the foundation of an orderly and just society. In today’s fast-changing global landscape, its role is more crucial than ever. Legal frameworks govern every aspect of our lives—from personal rights and business transactions to governance, international relations and technological advancements. The emergence of new challenges, such as data privacy, artificial intelligence, climate change litigation and human rights violations requires legal minds that can adapt, innovate and uphold justice in an increasingly complex world.</p>
            <p>At Alva’s Law College, we believe that legal education is not just about learning statutes and precedents; it is about developing critical thinking, analytical reasoning and ethical decision-making skills. Our faculty comprises distinguished scholars, experienced practitioners and thought leaders who mentor our students to think beyond the conventional, question the status quo and advocate for meaningful change.</p>
            <p>We offer a curriculum that blends rigorous theoretical knowledge with hands-on practical experience. Through moot courts, legal aid clinics, internships and research initiatives, our students gain invaluable exposure to real-world legal challenges. We foster an environment where intellectual curiosity thrives, encouraging students to explore diverse areas of law, from constitutional and corporate law to international arbitration and emerging technologies.</p>
            <p>Beyond academics, we emphasise the role of law in social responsibility and nation-building. We encourage our students to actively engage in pro bono work, legal awareness programs, and policy discussions, ensuring that they become not only successful professionals but also conscientious members of society.</p>
            <p>As we move forward in an era of rapid legal evolution, Alva’s Law College remains steadfast in its mission to nurture future leaders who will uphold the principles of justice, equity, and the rule of law. Whether you are a prospective student, an academic, a legal professional or an advocate of justice, I invite you to be a part of our vibrant legal community and join us in shaping the future of law.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Messages;
