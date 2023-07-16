import React from 'react';
import CustomDevelopmentForm from '../components/forms/CustomDevelopmentForm';

const CustomDevelopmentPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mt-24">
        <div className="mb-14 flex justify-center flex-col mx-auto">
          <h1 className="text-center text-[48px] font-semibold">
            Submit Your Project Details
          </h1>
          <p className="max-w-2xl text-center mx-auto text-[17px] mt-2">
            We're available for custom development projects. Fill out this form
            to tell us about your project and get a personalized quote.
          </p>
        </div>

        <div>
          <CustomDevelopmentForm />
        </div>
      </div>
    </div>
  );
};

export default CustomDevelopmentPage;
