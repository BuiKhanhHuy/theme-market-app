import React from 'react';
import HeroSection from '../layouts/HeroSection';
import ProductList from '../components/ProductList';

const categories = [
  'Bootstrap Templates',
  'Tailwind Templates',
  'Astro Themes',
  'Hugo Themes',
  'Nextjs Templates',
];

const Home = () => {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <div className="mx-auto  max-w-[1320px]">
        {categories.map((category, index) => (
          <div key={index} className="mt-24">
            <h1 className="mb-14 text-center text-[42px] font-semibold">
              {category}
            </h1>
            <div>
              <ProductList />
            </div>
            <div className="justify-center flex mt-10">
              <p className="cursor-pointer rounded-md border border-indigo-600 bg-indigo-600 py-3 px-6 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                All Templates
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
