import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Icons from '../components/Icons';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { changePassword } from '../components/graphql/mutation';

interface SidebarProps {
  // Add any props as needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('profile'); // State to track the selected menu item
  const [contactCounter, setContactCounter] = useState<number>(1);
  const [addressCounter, setAddressCounter] = useState<number>(1);
  const [isEmailEditable, setIsEmailEditable] = useState<boolean>(false);

  const [isNameEditable, setIsNameEditable] = useState<boolean>(false);

  const [isNameContact, setIsNameContact] = useState<boolean>(false);
  const [isNameAddress, setIsNameAddress] = useState<boolean>(false);
  const [ChangePassword] = useMutation(changePassword);

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  const handleFormSubmit = (values) => {
    console.log(values, "values");

  };

  const userDetails = useSelector((data: any) => data.setLoginData?.loginData?.userDetails);
  console.log("userDEtails in profile:", userDetails);
  const AccessToken = useSelector((data: any) => data?.setAcessToken?.accessToken?.login?.AccessToken);



  const handleChangePassword = (values: any) => {
 
    ChangePassword({
      variables: {
        ChangePasswordInput: {
          oldPassword: values.oldpassword,
          newPassword:values.password,
        },
      },
      context: {
        headers: {
          Authorization: AccessToken }
      }

    })
      .then((res) => {
        console.log(res, "response jukjnhbgvhjngfvhjnmg");
      })
      .catch((err) => {
        console.log(err, "errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      });
  };


  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-6 p-4 md:p-7 h-full'>
      <div className=" text-white h-full md:w-1/5 md:p-4">
        <div className=" w-full md:max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <nav>
            <ul className='flex justify-around items-center md:flex-col '>
              <li className={`text-black   p-4 hover:text-gray-300 ${selectedMenuItem === 'orders' ? 'font-bold ' : ''}`} onClick={() => handleMenuItemClick('orders')}>
                Orders
              </li>
              <li className={`text-black   p-4 hover:text-gray-300 ${selectedMenuItem === 'profile' ? 'font-bold' : ''}`} onClick={() => handleMenuItemClick('profile')}>
                Profile
              </li>
              <li className={`text-black p-4 hover:text-gray-300 ${selectedMenuItem === 'Password' ? 'font-bold' : ''}`} onClick={() => handleMenuItemClick('Password')}>
                Change Password</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='flex flex-col w-full h-full px-2 py-8 md:p-7 rounded-lg overflow-auto md:overflow-hidden shadow-lg bg-white '>
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
                name: userDetails.name || '',
                email: userDetails.email || '',
                contacts: [{ id: 1, value: userDetails.contacts[0].number || '' }],
                deliveryAddresses: [userDetails.addresses[0].name || ''],
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
              {({ values, handleChange }) => (
                <Form className="flex flex-1 flex-col h-full justify-center space-y-5 w-full items-center">
                  <div className="flex flex-col space-y-2 text-center h-full">
                    <h2 className="text-3xl md:text-4xl font-bold">User Information</h2>
                    <p className="text-md md:text-xl">
                      Please provide your information.
                    </p>
                  </div>
                  <div className="flex flex-col w-full space-y-5 px-4 md:px-12 lg:px-24">
                    <div className='flex w-full gap-2'>
                      <div className='w-full'>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          className={`flex px-3 w-full py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal ${isNameEditable ? 'bg-blue-500 shadow-lg shadow-blue-3/50' : ''}`}
                          disabled={!isNameEditable}
                          onBlur={() => setIsNameEditable(false)}
                          onMouseLeave={() => setIsNameEditable(false)}

                        />
                        <ErrorMessage name="name" component="div" className="text-red-500" /></div>
                      <div className='mt-2 bg-bg-footer text-white rounded-lg p-3 cursor-pointer' onClick={() => setIsNameEditable(true)}>
                        {/* <Icons variant='edit' /> */}Edit
                      </div>
                    </div>

                    <div className='flex w-full gap-2'>
                      <div className='w-full'>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className={`flex relative w-full px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal ${isEmailEditable ? ' bg-b  shadow-lg shadow-blue-3/50 ' : ''}`}
                          disabled={!isEmailEditable}
                          onBlur={() => setIsEmailEditable(false)}
                          onMouseLeave={() => setIsEmailEditable(false)}
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500" /></div>



                      <div className='mt-2 bg-bg-footer text-white rounded-lg p-3 cursor-pointer' onClick={() => setIsEmailEditable(true)}>
                        {/* <Icons variant='edit' /> */}Edit
                      </div>

                    </div>

                    <div className='flex flex-col w-full gap-2'>

                      {values.contacts.map((contact, index) => (
                        <div key={contact.id} className='flex  w-full gap-2'>
                          <div className=' flex w-full gap-2'>
                            <Field
                              type='text'
                              name={`contacts[${index}].value`}
                              placeholder={`Contact ${index + 1}`}
                              value={contact.value}
                              onChange={handleChange}
                              disabled={!isNameContact}
                              onBlur={() => setIsNameContact(false)}
                              onMouseLeave={() => setIsNameContact(false)}
                              className={`flex px-3 w-full py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal ${isNameContact ? ' bg-b  shadow-lg shadow-blue-3/50 ' : ''}`}
                            />
                            {index === values.contacts.length - 1 && (
                              <div
                                className='bg-black rounded-lg text-white h-12 mt-2 w-14 items-center flex justify-center px-2 cursor-pointer'
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
                                {/* <Icons variant='add' /> */}Add
                              </div>
                            )}
                            <ErrorMessage name={`contacts[${index}].value`} component='div' className='text-red-500' />
                          </div>


                          <div className='mt-2 bg-bg-footer text-white rounded-lg p-3 cursor-pointer' onClick={() => setIsNameContact(true)}>
                            {/* <Icons variant='edit' /> */} Edit
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className='flex flex-col w-full gap-2'>
                      {values.deliveryAddresses.map((address, index) => (
                        <div key={index} className='flex w-full gap-2'>
                          <div className=' flex w-full gap-2'>
                            <Field
                              type='text'
                              name={`deliveryAddresses[${index}]`}
                              placeholder={`Delivery Address ${index + 1}`}
                              value={address}
                              onChange={handleChange}
                              disabled={!isNameAddress}
                              onBlur={() => setIsNameAddress(false)}
                              onMouseLeave={() => setIsNameAddress(false)}
                              className={`flex px-3 w-full py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal ${isNameAddress ? ' bg-b  shadow-lg shadow-blue-3/50 ' : ''}`}
                            />
                            {index === values.deliveryAddresses.length - 1 && (
                              <div
                              className='bg-black rounded-lg text-white h-12 mt-2 w-14 items-center flex justify-center px-2 cursor-pointer'
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
                                {/* <Icons variant='add' /> */}Add
                              </div>
                            )}
                            <ErrorMessage name={`deliveryAddresses[${index}]`} component='div' className='text-red-500' />
                          </div>
                          <div className='mt-2 bg-bg-footer text-white rounded-lg p-3 cursor-pointer' onClick={() => setIsNameAddress(true)}>
                            {/* <Icons variant='edit' /> */}Edit
                          </div>
                        </div>
                      ))}
                    </div>
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

        {selectedMenuItem === 'Password' && (
          <div className='flex gap-4'>

            <Formik
              initialValues={{
                oldpassword: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={Yup.object().shape({
                oldpassword: Yup.string()
                  .required('Old Password is required'),
                password: Yup.string()
                  .required('Password is required')
                  .matches(
                    /^(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$/,
                    'Password must be alphanumeric and contain at least one capital letter'
                  ),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password'), ''], 'Passwords must match')
                  .required('Confirm Password is required'),
              })}
              onSubmit={handleChangePassword}
            >
              <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-3xl md:text-4xl font-Robot font-bold">Set Password</h2>
                  <p className="text-md font-Robot md:text-xl">
                    To reset your password
                  </p>
                </div>
                <div className="flex flex-col w-full space-y-5 px-12 lg:px-24">
                  <Field
                    type="password"
                    name="oldpassword"
                    placeholder="Your old password"
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <ErrorMessage name="oldpassword" component="div" className="text-red-500" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="New password"
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                  <button
                    type="submit"
                    className="flex font-Robot items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                  >
                    Change Password
                  </button>
                </div>
              </Form>
            </Formik>


            {/* Add the content for the Orders page */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
