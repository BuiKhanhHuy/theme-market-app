import React from 'react';
import Product from './Product';

const ProductList = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-6'>
      {[1, 2, 3, 4, 5, 6].map((value) => (
        <div>
          <Product />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
