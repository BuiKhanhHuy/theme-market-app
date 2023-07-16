import React from 'react';
import ContactForm from '../components/forms/ContactForm';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mt-24">
        <h1 className="mb-14 text-center text-[52px] font-semibold">Contact</h1>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
