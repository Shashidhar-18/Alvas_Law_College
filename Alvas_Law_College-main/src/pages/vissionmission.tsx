// src/pages/Messages.tsx
import React from 'react';


import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const aboutlaw: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="py-20 px-4 md:px-20 bg-white-50">
        <motion.div
          className="container mx-auto flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Vission and Mission</h2>
          <div className="max-w-4xl text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
          <h3 className="text-lg font-semibold">Vision:</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>To inspire and empower future legal professionals to transform society through the pursuit of justice, ethical integrity, and community development</li>
            <li>Alva’s Law College envisions becoming a center of excellence in legal education by integrating theoretical knowledge with practical skills, fostering critical thinking, and promoting research-driven solutions to socio-legal issues</li>
            <li>Committed to holistic education, we strive to shape competent lawyers who champion equality, advocate for human rights, and contribute meaningfully to building a just, progressive, and inclusive society.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4">Mission:</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>To provide quality legal education that blends theoretical knowledge with practical skills, ensuring students are well-prepared for the dynamic legal profession.</li>
            <li>To cultivate ethical, socially responsible, and professionally competent graduates committed to upholding justice and equality..</li>
            <li>To foster a research-oriented academic environment that encourages critical thinking and innovation in addressing socio-legal challenges</li>
            <li>To empower students and faculty to engage in community service and contribute to the development of an egalitarian society.</li>
            <li>To create a dynamic learning environment that nurtures leadership, advocacy skills, and a deep understanding of the law in both national and global contexts.</li>
          </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default aboutlaw;