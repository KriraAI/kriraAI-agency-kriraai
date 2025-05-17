'use client';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../../firebaseConfig";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: new Date(),
      });

      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border-stroke w-full rounded-xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border-stroke w-full rounded-xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="phone"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="+1 (650) 131 7825"
              className="border-stroke w-full rounded-xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Enter your Message"
              className="border-stroke w-full resize-none rounded-xl border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4">
          <button
            className="rounded-full bg-secondary/80 px-9 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            type="submit"
          >
            Send now
          </button>
        </div>
      </div>
      {status && <p className="mt-4 text-sm text-body-color">{status}</p>}
    </form>
  );
};

export default ContactForm;
