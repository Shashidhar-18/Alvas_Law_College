import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Google Form submission
    const formUrl =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLScGis4ic2A4Bbm8LYN0BUesema7WMHNyVQZprnQyCZnFnby2w/formResponse';

    const formBody = new URLSearchParams();
    formBody.append('entry.881901784', formData.name);
    formBody.append('entry.1692311071', formData.email);
    formBody.append('entry.1789993298', formData.phone);
    formBody.append('entry.1931587315', formData.course);

    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    })
      .then(() => {
        // ✅ EmailJS email sending
        emailjs
          .send(
            'service_kreor7i', // Your EmailJS service ID
            'template_ygtujig', // Your EmailJS template ID
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              course: formData.course,
              message: `${formData.name} has submitted the application form.

📄 Google Sheet:
https://docs.google.com/spreadsheets/d/1ap4QPvHKb8RtPGtH-9kB_b5y3f-hg9k1KqTWA7ij0ew/edit?usp=sharing`,
            },
            '7kJ1FNXo4UG6chvlZ' // Your EmailJS public key
          )
          .then(() => {
            alert('✅ Application submitted and email sent successfully!');
            setFormData({ name: '', email: '', phone: '', course: '' });
          })
          .catch(() => {
            alert('⚠️ Form submitted, but email failed to send.');
          });
      })
      .catch(() => {
        alert('❌ Submission failed. Please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Application Form</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="mb-4">
          <label className="block text-blue-900 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-900 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-900 font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>
        <div className="mb-6">
          <label className="block text-blue-900 font-semibold mb-2">Select Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border"
          >
            <option value="">-- Choose a course --</option>
            <option value="LLB">LLB</option>
            <option value="BA LLB">BA LLB</option>
            <option value="BBA LLB">BBA LLB</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
