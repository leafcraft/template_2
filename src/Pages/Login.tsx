import React, { useState } from 'react';
import img4 from '../assets/img4-component4.png'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';

const LoginComponent = () => {
  const [showSignupBox, setShowSignupBox] = useState(true);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [Login, setLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const navigate = useNavigate();

  const showSignup = () => {
    setShowSignupBox(true);
    setShowCreateAccount(false);
    setLogin(false);
    setForgotPassword(false);
  };

  const showForgotPassword = () => {
    setForgotPassword(true);
    setLogin(false);
  };

  const login = () => {
    setShowSignupBox(false);
    setShowCreateAccount(false);
    setLogin(true); setForgotPassword(false);
  };

  const showCreateAccountForm = () => {
    setShowSignupBox(false);
    setShowCreateAccount(true);
    setLogin(false);
    setForgotPassword(false);
  };


  // yup validation 
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    // Add more fields and validation as necessary
  });

  
  const handleSignupSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted sign up:', values);
    // You can add form submission logic here
    setSubmitting(false);
  }



// const handleSignupSubmit = async (values, { setSubmitting }) => {
//   const { username, password } = values;

//   try {
//     var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

//     if (strongRegex.test(password)) {
//       const response = await Auth.signUp({
//         username: username,
//         password: password,
//         attributes: {
//           email: username,
//         },
//       });

//       if (typeof window !== 'undefined') {
//         localStorage.setItem('token', `${username}.${password}`);
//         setUserSub(response.userSub);
//         username(username);
//         setShowSignupBox(false); // Hides the signup box after successful signup
//       }
//     }
//   } catch (error) {
//     // Display error message for signup failure
//    console.log(error,"error in register user")
//   }

//   setSubmitting(false);
// };


  // handle submit for Login
  const handleLoginSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log('Form submitted login:', values);
    setSubmitting(false);
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className='lg:flex flex-col justify-between items-center bg-cover' style={{ backgroundImage: `url(${img4})` }}>
        <div className='hidden text-white font-Robot  bg-black bg-opacity-70 h-full lg:flex flex-col justify-between  lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>

          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-8 h-8"></span>
            <a href="#" className="font-medium text-xl">Brand</a>
          </div>
          <div className='space-y-5'>
            <h1 className=" animate-fade-right animate-once animate-duration-[2000ms] animate-delay-[250ms] lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and discover new experiences</h1>
            {showSignupBox && (
              <><p className="text-lg">You do have a account?</p><button onClick={login} className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                Login here
              </button></>
            )}
          </div>
          <p className="font-medium">© 2022 Company <a className='text-green-500' target='_blank' href='https://leafcraft.co/'>LeafCraft.co</a></p>
        </div>

      </div>

      {/* Login */}
      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
        {forgotPassword && (
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values, "vales forgot")
              setSubmitting(false)
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-3xl md:text-4xl  font-Robot font-bold">Forgot Password?</h2>
                  <p className="text-md  font-Robot md:text-xl">
                    Enter your email address to reset your password.
                  </p>
                </div>
                <div className="flex flex-col  w-full space-y-5 px-12 lg:px-24">
                  <Field
                    type="email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="flex font-Robot px-3 py-2 focus:border-red md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <ErrorMessage name="email" component="div" />
                  <button disabled={isSubmitting} type="submit" className="flex font-Robot items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                    Reset Password
                  </button>
                  <div className='flex justify-center'>
                    <p className=" font-Robot text-sm md:text-md">
                      Remembered your password?{" "}
                      <a href="#" onClick={login} className="underline  font-Robot font-medium text-slate-950 opacity-50 pl-2">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

        )}
        <div className="flex lg:hidden justify-between items-center w-full py-4">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-6 h-6"></span>
            <a href="#" className="font-medium text-lg">Brand</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>Not a member? </span>
            <a href="#" className="underline font-medium text-[#070eff]">
              Sign up now
            </a>
          </div>
        </div>
        {/* Signup box */}
        {showSignupBox && (
         
        //  <Formik
        //    initialValues={{
        //      username: '',
        //    }}
        //    validationSchema={Yup.object().shape({
        //      username: Yup.string().email('Invalid email').required('Username is required'),
        //    })}
        //    onSubmit={(values, { setSubmitting }) => {
        //      console.log('Form submitted:', values);
        //      // You can add form submission logic here
        //      setSubmitting(false);
        //    }}
        //  >
        //    <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
        //      <div className="flex flex-col space-y-2 text-center">
        //        <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
        //        <p className="text-md md:text-xl">
        //          Sign up or log in to place the order, no password required!
        //        </p>
        //      </div>
        //      <div className="flex flex-col w-full space-y-5 px-12 lg:px-24">
        //        <Field
        //          type="email" // Change the input type to "email" for email validation
        //          name="username"
        //          placeholder="Email"
        //          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        //        />
        //        <ErrorMessage name="username" component="div" className="text-red-500" />
        //        <button
        //          type="submit"
        //          className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
        //        >
        //          Confirm with email
        //        </button>
        //        <div className="flex justify-center items-center">
        //          <span className="w-full border border-black"></span>
        //          <span className="px-4">Or</span>
        //          <span className="w-full border border-black"></span>
        //        </div>
        //        <button
        //          className="flex w-full items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"
        //          onClick={() => {
        //            // Redirect to continue with mail when clicked
        //            window.location.href = 'URL_TO_EMAIL_LOGIN';
        //          }}
        //        >
        //          <span className="absolute left-4">
        //            {/* Your SVG path */}
        //          </span>
        //          <span>Continue with Gmail</span>
        //        </button>
        //      </div>
        //    </Form>
        //  </Formik>

        <Formik
  initialValues={{
    username: '',
    password: '', // Adding a password field
  }}
  validationSchema={Yup.object().shape({
    username: Yup.string().email('Invalid email').required('Username is required'),
    password: Yup.string().required('Password is required'),
  })}
  onSubmit={handleSignupSubmit}
>
  <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
    <div className="flex flex-col space-y-2 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
      <p className="text-md md:text-xl">
        Sign up or log in to place the order, no password required!
      </p>
    </div>
    <div className="flex flex-col w-full space-y-5 px-12 lg:px-24">
      <Field
        type="email" // Change the input type to "email" for email validation
        name="username"
        placeholder="Email"
        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
      />
      <ErrorMessage name="username" component="div" className="text-red-500" />
      {/* Adding a password field */}
      <Field
        type="password"
        name="password"
        placeholder="Password"
        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
      />
      <ErrorMessage name="password" component="div" className="text-red-500" />
      <button
        type="submit"
        className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
      >
        Register
      </button>
    </div>
  </Form>
</Formik>
         
        )}
        {/* create user box */}
        {showCreateAccount && (
          <Formik
          initialValues={{
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            phone: Yup.string().required('Phone is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password')], 'Passwords must match')
              .required('Confirm Password is required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission logic here
            console.log('Form submitted:', values);
            setSubmitting(false);
          }}
        >
          <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Create an account</h2>
              <p className="text-md md:text-xl">Please fill out the form</p>
            </div>
            <div className="flex flex-col w-full space-y-5 px-12 lg:px-24">
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              />
              <ErrorMessage name="username" component="div" className="text-red-500" />
    
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
    
              <Field
                type="text"
                name="phone"
                placeholder="Phone No."
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500" />
    
              <Field
                type="text"
                name="password"
                placeholder="Password"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
    
              <Field
                type="text"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
    
              <button
                type="submit"
                className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
              >
                Submit
              </button>
    
              <div className="flex justify-center">
                <p className="text-sm md:text-md">
                  Already have an account?
                  <a href="#" onClick={login} className="underline font-medium text-slate-950 opacity-50 pl-2">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </Form>
        </Formik>
        )}

        {/* Login  */}
        {Login && (
           <Formik
           initialValues={{
             username: '',
             password: '',
           }}
           validationSchema={Yup.object().shape({
             username: Yup.string().required('Username is required'),
             password: Yup.string().required('Password is required'),
           })}
           onSubmit={handleLoginSubmit}
         >
           <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
             <div className="flex flex-col space-y-2 text-center">
               <h2 className="text-3xl md:text-4xl font-bold">Login</h2>
             </div>
             <div className="flex flex-col w-full space-y-5 px-12 lg:px-24">
               <Field
                 type="text"
                 name="username"
                 placeholder="Username"
                 className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
               />
               <ErrorMessage name="username" component="div" className="text-red-500" />
     
               <Field
                 type="password"
                 name="password"
                 placeholder="Password"
                 className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
               />
               <ErrorMessage name="password" component="div" className="text-red-500" />
     
               <button
                 type="submit"
                 className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
               >
                 Submit
               </button>
     
               <div className='flex justify-center'>
                 <p className="text-sm md:text-md">
                   Don't have an account? Create one here
                   <a href='/login' onClick={showSignup} className="underline font-medium text-slate-950 opacity-50 pl-2">
                     Create one
                   </a>
                 </p>
               </div>
               
               <div className='flex justify-center'>
                 <p className="text-sm md:text-md">
                   <a href="#" onClick={showForgotPassword} className="underline font-medium text-slate-950 opacity-50 pl-2">
                     Forgot your password?
                   </a>
                 </p>
               </div>
             </div>
           </Form>
         </Formik>
        )}
      </div>
    </div>
  );
};

export default LoginComponent;


