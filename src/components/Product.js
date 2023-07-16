import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Link to="/products/1">
      <div className="rounded-lg h-full bg-gray-50 shadow-sm">
        <div>
          <img
            src="https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fconstra.png&w=430&q=80"
            alt="Img"
            className="rounded-t-lg h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="p-4">
          <div className="flex flex-row justify-between">
            <div className="font-bold text-xl text-gray-700">
              Copper Bootstrap
            </div>
            <div className="font-semibold text-lg text-gray-700">$39.00</div>
          </div>
          <div className="flex flex-row justify-between items-center mt-2">
            <div className=" text-gray-500">Multipage Business template</div>
            <div className="font-medium text-[16px] text-gray-500">
              <div className="flex flex-row gap-1">
                <div>
                  <ArrowDownTrayIcon />
                </div>
                <div>53698</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
