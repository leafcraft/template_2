import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Icons from '../components/Icons';

interface SidebarProps {
  // Add any props as needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('profile'); // State to track the selected menu item
  const [contactCounter, setContactCounter] = useState<number>(1);
  const [addressCounter, setAddressCounter] = useState<number>(1);

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  const handleFormSubmit = (values) => {
    console.log(values, "values");

  };

  return (
    <div className='flex gap-6 p-7 h-screen'>
      <div className=" text-white h-screen w-1/5 p-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <nav>
            <ul className=''>
              <li className={`text-black p-7 hover:text-gray-300 ${selectedMenuItem === 'orders' ? 'font-bold hover:bg-slate-200 ' : ''}`} onClick={() => handleMenuItemClick('orders')}>
                Orders
                <ul className='my-3'>FAQ</ul>
              </li>
              <li className={`text-black p-7 hover:text-gray-300 ${selectedMenuItem === 'profile' ? 'font-bold hover:bg-slate-200' : ''}`} onClick={() => handleMenuItemClick('profile')}>
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
                contacts: [{ id: 1, value: '' }],
                deliveryAddresses: [''],
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Invalid email').required('Email is required'),
                contacts: Yup.array().of(
                  Yup.object().shape({
                    value: Yup.string().required('Contact is required'),
                  })
                ),
                deliveryAddresses: Yup.array().of(Yup.string().required('Delivery Address is required')),
              })}
              onSubmit={handleFormSubmit}
            >
              {({values,handleChange}) => (
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
                    {values.contacts.map((contact, index) => (
                    <div key={contact.id} className='flex w-full gap-2'>
                      <Field
                        type='text'
                        name={`contacts[${index}].value`}
                        placeholder={`Contact ${index + 1}`}
                        value={contact.value}
                        onChange={handleChange}
                        className='flex px-3 w-full py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal'
                      />
                      {index === values.contacts.length - 1 && (
                        <div
                          className='bg-black rounded-full pt-2 px-2 cursor-pointer'
                          onClick={() => {
                            setContactCounter(contactCounter + 1);
                            handleChange({
                              target: {
                                name: `contacts[${index + 1}].value`,
                                value: '',
                              },
                            });
                          }}
                        >
                          <Icons variant='add' />
                        </div>
                      )}
                      <ErrorMessage name={`contacts[${index}].value`} component='div' className='text-red-500' />
                    </div>
                  ))}


{values.deliveryAddresses.map((address, index) => (
                    <div key={index} className='flex w-full gap-2'>
                      <Field
                        type='text'
                        name={`deliveryAddresses[${index}]`}
                        placeholder={`Delivery Address ${index + 1}`}
                        value={address}
                        onChange={handleChange}
                        className='flex px-3 w-full py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal'
                      />
                      {index === values.deliveryAddresses.length - 1 && (
                        <div
                          className='bg-black rounded-full pt-2 px-2 cursor-pointer'
                          onClick={() => {
                            setAddressCounter(addressCounter + 1);
                            handleChange({
                              target: {
                                name: `deliveryAddresses[${index + 1}]`,
                                value: '',
                              },
                            });
                          }}
                        >
                          <Icons variant='add' />
                        </div>
                      )}
                      <ErrorMessage name={`deliveryAddresses[${index}]`} component='div' className='text-red-500' />
                    </div>
                  ))}
                    <button
                      type="submit"
                      className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                    >
                      save
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
