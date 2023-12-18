import React from 'react';

const Coupon = ({ title, discount, code, validity, terms }) => {
  return (
    <div className="container bg-gradient-to-r from-slate-500 to-slate-800 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-3xl font-bold mb-4">{title}</div>
      <div className="text-lg mb-4">
        Get <span className="text-slate-400 font-bold">{discount}</span> OFF your next purchase!
      </div>
      <div className="text-base mb-4">Use coupon code:</div>
      <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
        <span className="text-2xl text-black font-semibold">{code}</span>
        <button className="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Copy
        </button>
      </div>
      <div className="text-sm mt-4">
        <p>
          Valid until <span className="font-semibold">{validity}</span>
        </p>
        <p>{terms}</p>
      </div>
    </div>
  );
};

const CouponList = () => {
  // Define coupon data as an array of objects
  const coupons = [
    {
      title: 'Special Offer 1',
      discount: '15%',
      code: 'TAILOFFER15',
      validity: 'December 31, 2023',
      terms: 'Terms and conditions apply.',
    },
    {
      title: 'Special Offer 2',
      discount: '20%',
      code: 'TAILOFFER20',
      validity: 'December 31, 2023',
      terms: 'Terms and conditions apply.',
    },
    {
      title: 'Special Offer 3',
      discount: '30%',
      code: 'TAILOFFER30',
      validity: 'December 31, 2023',
      terms: 'Terms and conditions apply.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 gap-2">
      {coupons.map((coupon, index) => (
        <Coupon key={index} {...coupon} />
      ))}
    </div>
  );
};

export default CouponList;
