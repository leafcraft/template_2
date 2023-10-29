import React, { useState } from 'react';
import img4 from '../assets/img4-component4.png'

const LoginComponent = () => {
  const [showSignupBox, setShowSignupBox] = useState(true);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [Login, setLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

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
          <><p className="text-lg">You do not have an account?</p><button onClick={showCreateAccountForm} className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                Create account here
              </button></>
          )}
        </div>
        <p className="font-medium">© 2022 Company <a className='text-green-500' target='_blank' href='https://leafcraft.co/'>LeafCraft.co</a></p>
        </div>
        
      </div>

      {/* Login */}
      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
      {forgotPassword && (
          <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Forgot Password?</h2>
              <p className="text-md md:text-xl">
                Enter your email address to reset your password.
              </p>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
              <input
                type="text"
                placeholder="Email"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              />
              <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                Reset Password
              </button>
              <div className='flex justify-center'>
                <p className="text-sm md:text-md">
                  Remembered your password?{" "}
                  <a href="#" onClick={login} className="underline font-medium text-slate-950 opacity-50 pl-2">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
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
        <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
            <p className="text-md md:text-xl">Sign up or log in to place the order, no password required!</p>
          </div>
          <div className="flex flex-col max-w-md space-y-5">
            <input
              type="text"
              placeholder="Username"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Confirm with email
            </button>
            <div className="flex justify-center items-center">
              <span className="w-full border border-black"></span>
              <span className="px-4">Or</span>
              <span className="w-full border border-black"></span>
            </div>
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
              <span className="absolute left-4">
                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                  <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,16.9101748 5.26620003,13.7628253 L1.23999023,16.8773307 C3.18931323,20.2836874 7.2357411,23 12,23 C15.0545455,23 17.7818182,21.8545455 19.9090909,20 L16.0407269,18.0125889 Z" />
                  <path fill="#4285F4" d="M16.4181818,6.49090909 C15.5727273,6.26363636 14.6930156,6.18181818 13.7818182,6.18181818 C11.1742424,6.18181818 9.05454545,7.76363636 8.19090909,9.85454545 L12,12 L16.4181818,6.49090909 Z" />
                  <path fill="#FBBC05" d="M12,23 C14.4554545,23 16.5381818,22.1999998 18.1431308,21.1428387 L14.116921,17.9014635 C13.1891229,18.2700918 11.6618182,18.5454545 10,18.5454545 C9.12727273,18.5454545 8.30909091,18.4454545 7.51818182,18.2727273 L4.27545455,21.4933333 C6.23272727,22.9618182 8.81181818,23.6363636 12,23.6363636 C12.9263636,23.6363636 13.8181818,23.5727273 14.6727273,23.4545455 L17.8095455,26.2727273 C16.4236364,27.2481818 14.4881818,27.8181818 12,27.8181818 C7.2357411,27.8181818 3.18931323,25.1017174 1.23999023,21.6953608 L5.26620003,18.5808553 C6.21911939,21.7282048 8.86648613,23.9090909 12,23.9090909 C13.5660892,23.9090909 14.9509167,23.5344834 16.0407269,22.8307707 L16.4181818,22.8363636 L16.4181818,22.8363636 L16.4181818,22.8363636 L16.4181818,22.8363636 L16.4181818,22.8363636 L16.4181818,22.8363636 Z" />
                </svg>
              </span>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
        )}
         {/* create user box */}
        {showCreateAccount && (
        <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Create a account</h2>
            <p className="text-md md:text-xl">please! Fill the Form</p>
          </div>
          <div className="flex flex-col max-w-md space-y-5">
            <input
              type="text"
              placeholder="Username"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
             <input
              type="text"
              placeholder="Email"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
            <input
              type="text"
              placeholder="Phone No."
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
             <input
              type="text"
              placeholder="Password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
             <input
              type="text"
              placeholder="confirm Password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
           
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
             Submit
            </button>
            <div className='flex justify-center'>
            <p className="text-sm md:text-md">Already have account?<a href="#" onClick={login} className="underline font-medium text-slate-950 opacity-50 pl-2">Login</a></p>
            </div>
           
          </div>
        </div>
          )}

         {/* Login  */}
         {Login && (
         <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Login</h2>
          </div>
          <div className="flex flex-col max-w-md space-y-5">
            <input
              type="text"
              placeholder="Username"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
             <input
              type="text"
              placeholder="Password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
            />
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
             Submit
            </button>
            <div className='flex justify-center'>
            <p className="text-sm md:text-md">Don't a have account? Create one here <a href='/login' onClick={login} className="underline font-medium text-slate-950 opacity-50 pl-2">Create one</a></p>
            </div>
            <div className='flex justify-center'>
                <p className="text-sm md:text-md">
                  <a href="#" onClick={showForgotPassword} className="underline font-medium text-slate-950 opacity-50 pl-2">
                    Forgot your password?
                  </a>
                </p>
              </div>
          </div>
        </div>
         )}
      </div>
    </div>
  );
};

export default LoginComponent;
