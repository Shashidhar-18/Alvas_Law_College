import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import slide3 from '../assets/college1.jpg';
import slide1 from '../assets/coll1.jpeg';
import slide2 from '../assets/college2.jpg';
import slide4 from '../assets/coll2.jpeg';
import campus1 from '../assets/imag1.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [slide1, slide2, slide3, slide4];

const testimonials = [
  {
    name: 'Adithi',
    course: '5 year B.Com LLB',
    quote: 'Alva’s Law College has provided me with a solid foundation in both commerce and law.',
  },
  {
    name: 'Ananya',
    course: '5 year B.Com LLB',
    quote: 'The integrated program here is both challenging and rewarding.',
  },
  {
    name: 'Soubhagya',
    course: '5 year B.Com LLB',
    quote: 'I appreciate the comprehensive curriculum and supportive faculty.',
  },
  {
    name: 'Nishanth',
    course: 'LLB',
    quote: 'The LLB program has sharpened my legal acumen significantly.',
  },
  {
    name: 'Arphitha',
    course: 'LLB',
    quote: 'Engaging lectures and practical sessions make learning enjoyable.',
  },
  {
    name: 'Rajma',
    course: 'LLB',
    quote: 'The college environment fosters both academic and personal growth.',
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Welcome to Alva's Law College
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6">
              Shaping Tomorrow's Legal Professionals
            </p>
            <button
              onClick={() => navigate('/admission')}
              className="inline-block px-8 py-3 text-lg font-semibold bg-blue-400 hover:bg-blue-500 text-yellow-900 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Glowing Gradient Scrolling Announcement Bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 py-6 shadow-lg">
        <div className="relative z-10 flex justify-between items-center animate-marquee whitespace-nowrap text-yellow-900 text-lg md:text-xl font-semibold px-6">
          <div>
            🎉 Admissions Open for 2025! | Enroll now and shape your legal career at Alva’s Law College! | Limited seats available — Apply Today!
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img
              src={campus1}
              alt="Top Law College in Manglore| Alvas Law College"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
            />
          </div>
          <div className="lg:w-1/2 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-600 mb-6">
              About Us
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              <span className="font-medium text-blue-900">Alva’s Law College</span> is a vision of philanthropist and connoisseur. Established in 2024 at Moodbidri under the aegis of Alva’s Education Foundation (AEF), it is a premier institution for legal studies.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              The college is affiliated with Karnataka State Law University (KSLU), recognized by the Government of Karnataka, and approved by the Bar Council of India (BCI), New Delhi.
            </p>
            <button
              className="mt-8 inline-block px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => navigate('/about')}
            >
              Read More...
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 mb-12 tracking-tight font-poppins">
          Our Courses & Programs
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {[
            {
              title: '5 years B.COM LLB',
              desc: 'Combines commerce and law to prepare students for dynamic legal careers.',
              note: null,
            },
            {
              title: '3 years LLB',
              desc: 'Postgraduate specialization to develop legal expertise and analytical thinking.',
              note: null,
            },
            {
              title: '5 years BA LLB',
              desc: 'Combines arts and law education. Ideal for public service or legal research.',
              note: 'Approval from BCI awaited',
            },
            {
              title: '5 years BBA LLB',
              desc: 'Equips students with business and legal knowledge for corporate law careers.',
              note: 'Approval from BCI awaited',
            },
          ].map(({ title, desc, note }) => (
            <div
              key={title}
              role="button"
              tabIndex={0}
              onClick={() => navigate('/courses')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate('/courses');
              }}
              className="group w-[300px] h-auto min-h-[340px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 cursor-pointer p-8 text-left border border-blue-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-800 to-blue-700 text-transparent bg-clip-text transition-all duration-300 group-hover:underline decoration-2 underline-offset-4">
                  {title}
                </h3>
                {note && (
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md font-semibold">
                    {note}
                  </span>
                )}
              </div>
              <p className="text-gray-800 text-base leading-relaxed tracking-wide transition-all duration-300 group-hover:text-blue-900">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">What Our Students Say</h2>
        <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000 }}
  loop={true}
  spaceBetween={30}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {testimonials.map((t, i) => (
    <SwiperSlide key={i}>
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 m-2 hover:shadow-2xl transition-all duration-300 h-full text-left">
        <div className="text-5xl text-blue-200 leading-none mb-4">“</div>
        <p className="text-gray-700 text-lg mb-4">{t.quote}</p>
        <p className="font-semibold text-blue-800">{t.name}</p>
        <p className="text-sm text-gray-600">{t.course}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </section>
    </div>
  );
}

export default Home;
 