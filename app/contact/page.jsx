"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you for contacting us!");
  };

  return (
    <section className="bg-gray-50 py-16" id="contact">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-2xl shadow"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
          >
            Send Message
          </button>
          {status && <p className="text-center text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
