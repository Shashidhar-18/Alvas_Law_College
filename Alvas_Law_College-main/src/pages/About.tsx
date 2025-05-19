import React from 'react';
import coll from '../assets/college2.jpg'
import theater from '../assets/about1.jpg';
import vaibhavaImg from '../assets/about2.avif';
import nudisiriImg from '../assets/about3.jpg';
import performingArtsImg from '../assets/about4.jpg';
import adoptionImg from '../assets/law.jpeg';
import kannadaSchoolImg from '../assets/about6.avif';
import specialSchoolImg from '../assets/about6.avif';
import integrationImg from '../assets/about7.jpg';
import patriotismImg from '../assets/about8.jpg';
import pragathiImg from '../assets/about9.jpg';
import sportsImg from '../assets/about10.jpg';

function About() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">About Us</h1>

      <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed space-y-6 text-justify text-lg">
        <p>
          Dr. M Mohan Alva set up an Ayurvedic clinic in Moodubidire in 1980 to cater to the basic health needs of the people of his village, primarily addressing issues like snake bites. In 1982, he established Alva’s Pharmacy to produce essential medicines. Responding to evolving needs, the clinic was upgraded into a full-fledged multi-specialty hospital—Alva’s Health Center—in 1986. After addressing local healthcare needs, Dr. Alva focused on societal upliftment by creating job opportunities for rural youth through paramedical courses. This led to the birth of Alva’s Education Foundation (AEF) in 1995, beginning with institutes for Nursing and Physiotherapy, and followed by Nursing and Ayurvedic Medical Colleges in 1996. In 1998, he established Alva’s P.U. and Degree Colleges to introduce innovative changes in education, integrating national-level exam coaching with NCERT curriculum and fostering the Ekalavya Sports Club. Recognizing the importance of holistic development, Dr. Alva emphasized a 24-hour campus life through hostel systems and coaching for competitive exams such as CET, NEET, JEE, NDA, CLAT, IAS, and more. Alva’s pioneered educational strategies including bridge courses, crash courses, vacation coaching, and NEET long-term training, yielding exceptional student outcomes—over 300 students qualify for medical education annually.
        </p>
        <p>
          In 2024, Alva’s system was further refined by organizing students into 12 Blocks across Science, Commerce, Arts, and NEET divisions to ensure individual attention. Alva’s Degree College promotes “Degree with Purpose,” offering vocational training, civil services coaching, business skills, and higher education pathways. It consistently ranks among the top, securing 30–40 ranks under Mangalore University each year. The Foundation is acclaimed for producing postgraduates under Mangalore University, engineers under VTU, and healthcare professionals under RGUHS. The aesthetically enriched campus—with sculptures, art, gardens, and cultural events—nurtures students’ creative and literary talents. Through initiatives like the Dheemkita Yakshagana Study Center, which teaches Thenku Thittu and Badagu Thittu Yakshagana and provides certification, students develop cultural awareness and artistic skills while building strong, healthy minds and bright futures.
        </p>
      </div>

         {/* Alva’s Law College Section */}
         <div className="max-w-6xl mx-auto mt-16 bg-white/80    transition-all duration-500">
         <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center mt-16">
  Alva’s Law College
</h2>
{/* 👇 Inserted Image */}
<div className="my-6 flex justify-center">
  <img
    src={coll} // Or replace with lawCollegeImg if you have it
    alt="Alva’s Law College Campus"
    className="w-full md:w-2/3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
  />
</div>
<p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-4 max-w-6xl mx-auto">
  Alva’s Law College, Moodbidri, established in 2024, is a premier institution for legal studies under the aegis of Alva’s Education Foundation (AEF). Affiliated to Karnataka State Law University (KSLU), recognized by Government of Karnataka and approved by the Bar Council of India (BCI), New Delhi, the college offers robust programs such as the 3-year LLB and the integrated 5-year B.Com LLB courses.
</p>



<p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify max-w-6xl mx-auto">
  Designed to nurture legal acumen and professional excellence, the college is committed to imparting a quality education that aligns with global standards. With state-of-the-art infrastructure, a dynamic curriculum, and experienced faculty, Alva’s Law College aims to shape future advocates and legal professionals equipped to meet the challenges of the ever-evolving legal landscape.
</p>
</div>

    

      {/* Thematic sections */}
      
      {[
        {
          img: theater,
          title: "Alva’s Theater Study Center",
          desc:
            "The center is dedicated to the study and research of the theater field. The center aims at training the students in theater art. It makes them full-fledged actors and enables them to find a career even in the film industry. They perform many Kannada plays every year.",
        },
        {
          img: vaibhavaImg,
          title: "Alva’s Samskrithika Vaibhava",
          desc:
            "A three-hour variety cultural performance by well-trained student artistes of Alva’s. This troupe performs on over 100 stages annually, offering training in folk and classical arts, all under the Adoption Scheme which also provides free education.",
        },
        {
          img: nudisiriImg,
          title: "Alva’s Nudisiri & Virasat",
          desc:
            "Alva’s Nudisiri is a national Kannada literary festival with over 1 lakh attendees. Virasat is a cultural extravaganza celebrating Indian heritage, drawing more than 3 lakh visitors annually.",
        },
        {
          img: performingArtsImg,
          title: "Performing Arts Center",
          desc:
            "This center offers training in unique dance forms from Manipur, Odisha, and Sri Lanka. Cultural exchange contracts allow cross-training for students, enhancing traditional and international performing arts.",
        },
        {
          img: adoptionImg,
          title: "Adoption Scheme",
          desc:
            "Alva’s provides free education to students from tribal and financially challenged backgrounds. It supports education in academics, culture, and sports without charging any fees.",
        },
        {
          img: kannadaSchoolImg,
          title: "Kannada Medium School",
          desc:
            "A free education initiative under the Adoption Scheme that ensures students from rural areas receive quality education in their mother tongue with complete support.",
        },
        {
          img: integrationImg,
          title: "Integration Festivals",
          desc:
            "Celebrations of Diwali, Christmas, Iftar, Mahaveera Jayanti, and more foster national integration and cultural understanding among students from diverse backgrounds.",
        },
        {
          img: patriotismImg,
          title: "Patriotism",
          desc:
            "National festivals like Independence Day and Republic Day are celebrated with grandeur, instilling a strong sense of national pride and unity among students.",
        },
        {
          img: pragathiImg,
          title: "Alva’s Pragathi",
          desc:
            "A nationwide job fair that connects over 300 companies with job seekers from Alva’s and across India. It's a platform that enhances employability and career opportunities.",
        },
        {
          img: sportsImg,
          title: "Alva’s Sports",
          desc:
            "Through Ekalavya Sports Academy, Alva’s has produced Olympians and national champions. Training, accommodation, food, and education are provided freely under the Adoption Scheme.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`max-w-6xl mx-auto mt-12 flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
        >
          
          <img
            src={item.img}
            alt={item.title}
            className="w-full md:w-1/2 h-64 rounded-xl shadow-md object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="md:w-1/2 text-gray-700 text-justify leading-relaxed text-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}

      
    </div>
  );
}

export default About;
