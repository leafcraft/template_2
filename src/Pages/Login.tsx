import  { useState } from 'react';
import img4 from '../assets/bg-signup.png'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { useLazyQuery, useMutation} from '@apollo/client';
import { ForgotPasswordOtp, signUp } from '../components/graphql/mutation';
import toast from 'react-hot-toast';
import { setSignUpData } from '../Store/Reducers/SignUpReducer';
import { store } from '../Store';
import { useSelector } from 'react-redux';
import { setRegistrationData } from '../Store/Reducers/Registerdetails';
import { UserDetails, confirmUser, forgotPasswordLogin, loginUser, reconfirmUser } from '../components/graphql/query';
import { setLoginData } from '../Store/Reducers/LoginData';
import { setAcessToken } from '../Store/Reducers/AccessToken';

const LoginComponent = () => {
  const [showSignupBox, setShowSignupBox] = useState(true);
  const [OTPBox, setOtpbox] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [fulldetails, setFulldetails] = useState(false);
  const [Login, setLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotPasswordOTP, setForgotPasswordOTP] = useState(false);
  const [Register] = useMutation(signUp);
  const [verifyOTP] = useLazyQuery(confirmUser);
  const [LoginUser] = useLazyQuery(loginUser);
  const [ReverifyOTP] = useLazyQuery(reconfirmUser);
  const [ForgotPassword] = useLazyQuery(forgotPasswordLogin);
  const [ForgotPassCode] = useMutation(ForgotPasswordOtp);
  const [userDetails] = useLazyQuery(UserDetails);



  const showSignup = () => {
    setShowSignupBox(true);
    setShowCreateAccount(false);
    setLogin(false);
    setForgotPassword(false);
  };


  const showFullDetails = () => {
    setShowSignupBox(false);
    setShowCreateAccount(false);
    setLogin(false);
    setForgotPassword(false);
    setOtpbox(false);
    setFulldetails(true);
  };


  const showOTPBox = () => {
    setShowSignupBox(false);
    setShowCreateAccount(false);
    setLogin(false);
    setForgotPassword(false);
    setOtpbox(true);
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



  // yup validation 
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    // Add more fields and validation as necessary
  });


  const handleSignupSubmit = (SignUPvalues) => {
  
    store.dispatch(setSignUpData(SignUPvalues))
    if (SignUPvalues) {
      setFulldetails(true);
      setShowSignupBox(false);
    }
  }
  //values from store for signup
  const signUpValues = useSelector((data: any) => data.setSignUpData);


  //handle for full detail submit
  const handleFullDetailsSubmit = (values) => {
    console.log(values,signUpValues,"firrrrrrrrrrrrrrrrrrrrrrrrr")
  
    Register({
      variables: {
        userInput: {
          name: values?.name || '',
          password: signUpValues?.password,
          email: signUpValues?.username,
          dob: values?.DOB,
          organisationID: "650439122f67cb537c73d076",
          addressInput: {
            name: values?.AddressName || '',
            address: values?.Address || '',
            pincode: String(values?.pincode),
          },
          contactInput: {
            number: String(values?.contact),
          }

        }
      }
    })

      .then((response: any) => {
       console.log(response,"responseeeeeeeeee")
        store.dispatch(setRegistrationData(response));
        setOtpbox(true);
        setFulldetails(false);
      })
      .catch((err:any) => {

       console.log(err.message,"erorrrrrrrrrrrrrrrrrr");
      })
  }

  const location = useNavigate();

  //get data from store register data 
  const RegisterData = useSelector((data: any) => data.setRegistrationData.data?.signUp?.email);
  // handle submit for Login
  const handleLoginSubmit = (values) => {
    // Handle form submission logic here
   
    LoginUser({
      variables: {
        LoginInput: {
          email: values.username,
          password: values.password
        }
      }
    })
      .then((res) => {
       
         store.dispatch(setAcessToken(res.data))
        const accessToken = res?.data?.login?.AccessToken;
      
        if (accessToken) {
          userDetails({
            variables: {},
        context: {
          headers: {
            Authorization: accessToken,
          }
        }
          })
            .then((res) => {
              store.dispatch(setLoginData(res.data));
           
              if(res.data.userDetails.email){
                location('/')
              }
            })
            .catch((err) => {
              toast.error(err);
            })
        } 

      })
      .catch((err) => {
        toast.error(err);
      })

  }

  const handleOTPSubmit = (values: any) => {

    verifyOTP({
      variables: {
        ConfirmInput: {
          email: RegisterData,
          code: values?.OTP.toString()
        }

      }
    })
      .then((response: any) => {
       if(response){
        setOtpbox(false);
        setLogin(true);
       }
       
      })
      .catch((err) => {
        toast.error(err.message);
        setOtpbox(false);
      })
  }

  const resendOtp = () => {
   
    ReverifyOTP({
      variables: {
        resendConfirmationCodeInput: {
          email: RegisterData,
        }

      }
    })
      .then((response: any) => {
        console.log(response, "resend Otp conformmmmmmmmmmmmmmmmmmmmmmm");
      })
      .catch((err) => {
        toast.error(err.message);
      })
  }

  const handleForgotPassword = (values) => {
  
    ForgotPassword({
      variables: {
        ForgotInput: {
          email: values.username
        }
      }
    })
      .then((response) => {
        if (response?.data?.forgot_password === true)
         
        setForgotPasswordOTP(true);
        setForgotPassword(false)
      })
      .catch((err: any) => {
console.log("ForgotPassword error:",err.message);
      })
  }

  const handleForgotPasswordOTP = (values) => {
   
    ForgotPassCode({
      variables: {
        ForgotPassowrdInput: {
          email: values.username,
          code: values.OTP,
          password: values.password,

        }
      }
    })
      .then((response) => {
        console.log(response?.data?.forgot_password, "forgotpasworddddddddddddddddddOTPPPP")
        // if(response?.data?.forgot_password === true){
        //   setForgotPasswordOTP(false);
        // }

      })
      .catch((err) => {
        toast.error(err.message);
      })
  }

  const handleFuldetailstoLogin = () => {
    setFulldetails(false);
    setLogin(true);
  }

  const forgotPassCode = () => {
    setLogin(true);
    setForgotPasswordOTP(false);
  }

  const isOrgIDDisabled: any = true;

  return (
    <div className="flex min-h-screen bg-black">
      

      

      {/* Sidebar */}
      <div className='lg:flex flex-col justify-between w-full items-center bg-cover' style={{ backgroundImage: `url(${img4})` }}>
        <div className=' flex text-white font-Robot w-full h-full bg-black bg-opacity-70  lg:flex flex-col justify-between  lg:px-8 xl:px-12 '>

          <div className="flex pt-5 items-center justify-start space-x-8">
            <span className="bg-black rounded-full w-8 h-8"></span>
            <a href="#" className="font-medium text-xl">Brand</a>
          </div>
          {/* Login */}
      <div className="flex flex-1 flex-col items-center justify-center px-10 py-2  lg:py-10 relative ">

<div className="flex lg:hidden justify-end items-center w-full pb-4">
  
  <div className="flex items-center space-x-2">
    <span>Not a member? </span>
    <a href="#" className="underline font-medium text-[#070eff]">
      Sign up now
    </a>
  </div>
</div>
{/* forgot password */}
{forgotPassword && (
  <Formik
    initialValues={{
      username: '',

    }}
    validationSchema={Yup.object().shape({
      username: Yup.string().email('Invalid email').required('Username is required'),

    })}
    onSubmit={handleForgotPassword}
  >
    <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl  font-Robot font-bold">Forgot Password?</h2>
        <p className="text-md  font-Robot md:text-xl">
          Enter your email address to reset your password.
        </p>
      </div>
      <div className="flex flex-col  w-full space-y-5 px-12 lg:px-24">
        <Field
          type="email" // Change the input type to "email" for email validation
          name="username"
          placeholder="Email"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="username" component="div" className="text-red-500" />
        <button type="submit" className="flex font-Robot items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
          Reset Password
        </button>
        <div className='flex justify-center'>
          <p className=" font-Robot text-sm md:text-md">
            Remembered your password?{" "}
            <a href="#" onClick={login} className="underline  font-Robot font-medium text-white opacity-50 pl-2">
              Login
            </a>
          </p>
        </div>
      </div>
    </Form>
  </Formik>

)}
{/* forgotpassword otp screen */}
{forgotPasswordOTP && (
  <Formik
    initialValues={{
      username: '',
      password: '',
      OTP: '',
    }}
    validationSchema={Yup.object().shape({
      username: Yup.string().email('Invalid email').required('Username is required'),
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$/,
          'Password must be alphanumeric and contain at least one capital letter'
        ),
      OTP: Yup.string().required('OTP is required'),
    })}
    onSubmit={handleForgotPasswordOTP}
  >
    <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl  font-Robot font-bold">Set Password</h2>
        <p className="text-md  font-Robot md:text-xl">
          Enter your email,password and OTP address to reset your password.
        </p>
      </div>
      <div className="flex flex-col  w-full space-y-5 px-12 lg:px-24">
        <Field
          type="email" // Change the input type to "email" for email validation
          name="username"
          placeholder="Email"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="username" component="div" className="text-red-500" />
        <Field
          type="password" // Change the input type to "email" for email validation
          name="password"
          placeholder="password"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2  border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="password" component="div" className="text-red-500" />
        <Field
          type="OTP" // Change the input type to "email" for email validation
          name="OTP"
          placeholder="OTP"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="OTP" component="div" className="text-red-500" />
        <button type="submit" className="flex font-Robot items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
          confirm
        </button>
        <div className='flex justify-center'>
          <p className=" font-Robot text-sm md:text-md">
            Remembered your password?{" "}
            <a href="#" onClick={forgotPassCode} className="underline  font-Robot font-medium text-white opacity-50 pl-2">
              Login
            </a>
          </p>
        </div>
      </div>
    </Form>
  </Formik>

)}

{/* Signup box */}
{showSignupBox && (


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
    <Form className="flex flex-1 flex-col p-4 justify-center space-y-2 w-full items-center shadow-white shadow-2xl border-white border-4 rounded-lg ">
      <div className="flex flex-col space-y-2 text-center ">
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
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2  border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="username" component="div" className="text-red-500" />
        {/* Adding a password field */}
        <Field
          type="password"
          name="password"
          placeholder="Password"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black  rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="password" component="div" className="text-red-500" />

        <button
          type="submit"
          className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
        >
          Register
        </button>
        <div className='flex justify-center'>
          <p className=" font-Robot text-sm md:text-md">
            Remembered your password?{" "}
            <a href="#" onClick={login} className="underline  font-Robot font-medium text-white opacity-50 pl-2">
              Login
            </a>
          </p>
        </div>
      </div>
    </Form>
  </Formik>

)}
{/* full details */}
{fulldetails && (
  <Formik
    initialValues={{
      name: '',
      DOB: '',
      OrgID: '',
      AddressName: '',
      pincode: '',
      Address: '',
      contact: '',
    }}
    // validationSchema={Yup.object().shape({
    //             OTP: Yup.string().required('OTP is required'), // Remove email validation
    //   password: Yup.string().required('Password is required'),
    // })}
    onSubmit={handleFullDetailsSubmit}
  >
    <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Fill the Details</h2>
      </div>
      <div className="flex flex-col w-full space-y-5 px-12 lg:px-24">
        {/* <Field
          type="number" // Change the input type to "number" for OTP
          name="OTP"
          placeholder="OTP"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="OTP" component="div" className="text-red-500" />
       */}
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="name" component="div" className="text-red-500" />
        <Field
          type="date"
          name="DOB"
          placeholder="Date of birth"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="DOB" component="div" className="text-red-500" />
        {/* <Field
          type="text"
          name="OrgID"
          value="org9876543"
          placeholder="Organization ID"
          className={`flex px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium placeholder:font-normal ${isOrgIDDisabled ? 'bg-gray-300 text-gray' : 'text-black'}`}
          disabled={isOrgIDDisabled}
        />
        <ErrorMessage name="OrgID" component="div" className="text-red-500" /> */}
        <div className='flex gap-2'>
          <Field
            type="text"
            name="AddressName"
            placeholder="Address Name"
            className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          />
          <ErrorMessage name="AddressName" component="div" className="text-red-500" />
          <Field
            type="text"
            name="pincode"
            placeholder="Pincode"
            className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          />
          <ErrorMessage name="pincode" component="div" className="text-red-500" />
        </div>
        <Field
          type="text"
          name="Address"
          placeholder="Address"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="Address" component="div" className="text-red-500" />
        <Field
          type="text"
          name="contact"
          placeholder="Contact Number"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="contact" component="div" className="text-red-500" />

        <button
          type='submit'

          className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
        >
          Register
        </button>
        <div className="flex justify-center">
          <p className="text-sm md:text-md">
            get back to login
            <a href="#" onClick={handleFuldetailstoLogin} className="underline font-medium text-white opacity-50 pl-2">
login
</a>
          </p>
        </div>
      </div>
    </Form>
  </Formik>

)}
{/* verify screen */}
{OTPBox && (
  <Formik
    initialValues={{
      OTP: '',

    }}
    validationSchema={Yup.object().shape({
      OTP: Yup.string().required('OTP is required'), // Remove email validation

    })}
    onSubmit={handleOTPSubmit}
  >
    <Form className="flex flex-1 flex-col justify-center space-y-5 w-full items-center">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Verify the OTP</h2>
        <p className="text-md md:text-xl">
          confirm  OTP required!
        </p>
      </div>
      <div className="flex flex-col w-full space-y-5 px-12 lg:px-24">
        <Field
          type="number" // Change the input type to "number" for OTP
          name="OTP"
          placeholder="OTP"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="OTP" component="div" className="text-red-500" />
        {/* Adding a password field */}
        <button
          type="submit"
          className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
        >
          Verify
        </button>
        <div className="flex justify-center">
          <p className="text-sm md:text-md">
            Resend the OTP
            <a href="#" onClick={resendOtp} className="underline font-medium text-white opacity-50 pl-2">
              Resend OTP
            </a>
          </p>
        </div>
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
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="username" component="div" className="text-red-500" />

        <Field
          type="text"
          name="email"
          placeholder="Email"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="email" component="div" className="text-red-500" />

        <Field
          type="text"
          name="phone"
          placeholder="Phone No."
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="phone" component="div" className="text-red-500" />

        <Field
          type="text"
          name="password"
          placeholder="Password"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="password" component="div" className="text-red-500" />

        <Field
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
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
            <a href="#" onClick={login} className="underline font-medium text-white opacity-50 pl-2">
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
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$/,
          'Password must be alphanumeric and contain at least one capital letter'
        ),
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
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        <ErrorMessage name="username" component="div" className="text-red-500" />

        <Field
          type="password"
          name="password"
          placeholder="Password"
          className="flex px-3 py-2 text-black md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
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
            <a href='/login' onClick={showSignup} className="underline font-medium text-white opacity-50 pl-2">
              Sign Up
            </a>
          </p>
        </div>

        <div className='flex justify-center'>
          <p className="text-sm md:text-md">
            <a href="#" onClick={showForgotPassword} className="underline font-medium text-white opacity-50 pl-2">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </Form>
  </Formik>
)}
</div>
<div className='p-4 flex justify-end'>
<p className="font-medium">© 2022 Company <a className='text-green-500' target='_blank' href='https://leafcraft.co/'>LeafCraft.co</a></p>
</div>

          
        </div>

      </div>
    </div>
  );
};

export default LoginComponent;

