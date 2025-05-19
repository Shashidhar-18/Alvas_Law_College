// src/pages/Contact.tsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fqzo2wv',     // Replace with your EmailJS service ID
        'template_ycoa1x7',    // Replace with your EmailJS template ID
        e.currentTarget,
        '7kJ1FNXo4UG6chvlZ'         // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          setFeedback('✅ Message sent successfully!');
          e.currentTarget.reset();
        },
        (error) => {
          console.error('Error:', error.text);
          setFeedback('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-700">
            <h1 className="text-3xl font-bold text-indigo-800 mb-4">
              ALVAS LAW COLLEGE
            </h1>
            <p className="mb-4">
              (A Unit of Alva's Education Foundation®)
              <br />
              Affiliated To Karnataka State Law University
            </p>
            <p className="mb-4">Approved by Bar Council of India, New Delhi</p>
            <p className="mb-4">
              <span className="font-semibold">Smt. Sundari Ananda Alva</span>
              <br />
              Vidyagiri, Moodbidre, 574227
            </p>
            <p className="mb-4">
              <span className="font-semibold">College Office:</span> 7026041555
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email:</span>{' '}
              lawcollege@alvascollege.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">
              Get in Touch
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition duration-300"
              >
                Send Message
              </button>
              {feedback && (
                <p className="mt-4 text-green-600 font-semibold">{feedback}</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 text-center">
            Find Us Here
          </h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.2366224826594!2d74.99359297457663!3d13.069166139976998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4ab1fe8bf04a1%3A0x1fab3cec21fc93b6!2sAlvas%20Law%20College!5e0!3m2!1sen!2sin!4v1744177541165!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alvas Law College Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
