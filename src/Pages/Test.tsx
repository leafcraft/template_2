import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface SidebarProps {
  // Add any props as needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(''); // State to track the selected menu item

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  const handleFormSubmit = (values) => {
    console.log(values, "values");
   
  };

  return (
    <div className='flex gap-6 p-7 h-screen'>
      <div className="bg-bg-footer text-white h-screen w-1/5 p-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <nav>
            <ul className=''>
              <li className={`text-black p-7 hover:text-gray-300 ${selectedMenuItem === 'orders' ? 'font-bold' : ''}`} onClick={() => handleMenuItemClick('orders')}>
                Orders
                <ul className='my-3'>FAQ</ul>
              </li>
              <li className={`text-black p-7 hover:text-gray-300 ${selectedMenuItem === 'profile' ? 'font-bold' : ''}`} onClick={() => handleMenuItemClick('profile')}>
                Profile
                <ul className='my-3'>Favorite</ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='flex flex-col w-full h-full rounded-lg overflow-hidden shadow-lg bg-white '>
        {selectedMenuItem === 'orders' && (
          <div className='flex gap-4'>
            <h3 className='flex flex-col w-full h-full rounded overflow-hidden p-3'>My Orders</h3>
            <h3 className='flex flex-col w-full h-full rounded overflow-hidden p-3'>Orders details</h3>
            {/* Add the content for the Orders page */}
          </div>
        )}

        {selectedMenuItem === 'profile' && (
          <div>
           
            {/* Add the content for the Profile page */}
            <Formik
              initialValues={{
                name: '',
                email: '',
                contact: '',
                deliveryAddress: '',
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Invalid email').required('Email is required'),
                contact: Yup.string().required('Contact is required'),
                deliveryAddress: Yup.string().required('Delivery Address is required'),
              })}
              onSubmit={handleFormSubmit}
            >
              {() => (
                <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
                  <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">User Information</h2>
                    <p className="text-md md:text-xl">
                      Please provide your information.
                    </p>
                  </div>
                  <div className="flex flex-col w-full space-y-5 px-12 lg:px-24">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500" />

                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />

                    <Field
                      type="text"
                      name="contact"
                      placeholder="Contact"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                    <ErrorMessage name="contact" component="div" className="text-red-500" />

                    <Field
                      type="text"
                      name="deliveryAddress"
                      placeholder="Delivery Address"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                    <ErrorMessage name="deliveryAddress" component="div" className="text-red-500" />

                    <button
                      type="submit"
                      className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
