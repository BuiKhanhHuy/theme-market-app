import React from 'react';
import ProductList from '../components/ProductList';

const ProductPage = () => {
  return (
    <div className="mx-auto  max-w-[1320px]">
      <div className="mt-24">
        <h1 className="mb-14 text-center text-[52px] font-semibold">Shop</h1>
        <div>
          <ProductList />
        </div>

        <div className="flex justify-center mt-10">
          <p className="cursor-pointer rounded-md border border-indigo-600 bg-indigo-600 py-3 px-6 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Xem thêm
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
