import { useState, useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import NEOGN from "../../utils/images/Logo/NEOGN.png";
import TitleSection from "../TitleSection";
import { useNavigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

function SignUp() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);


  useEffect(() => {
    if (isUserAuthenticated) {
        navigate("/Account");
    }
  }, [isUserAuthenticated, history]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await auth.register(emailRegister, passwordRegister);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await auth.loginWithGoogle();
      setIsUserAuthenticated(true);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <section className="flex flex-col w-full h-auto pt-3 items-center font-general-sans">
      <TitleSection location="/Account" title="" />
      <div className="w-full h-auto flex flex-col items-center gap-6">
        <img className="w-[80px] h-auto" src={NEOGN} />
        <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
          Create Your Account
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mx-0 py-2 md:h-auto lg:py-0 w-full">
        <div className="w-full bg-white md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="md:space-y-6 gap-4 flex flex-col justify-center"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => setEmailRegister(e.target.value)}
                  type="email"
                  name="email"
                  autoComplete="section-blue shipping address-level2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPasswordRegister(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  autoComplete="section-blue shipping address-level2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="w-full h-auto pt-10 pb-8">
                <button
                  onClick={(e) => handleRegister(e)}
                  className="w-full text-white bg-heroColor hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-full text-base px-5 py-[15px] text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
              </div>
              <div className="w-full p-x-2 flex justify-center items-center gap-x-4">
                <div className="w-20 h-[0px] border border-zinc-200"></div>
                <p className="font-general-sans text-base font-normal text-zinc-400">
                  Or
                </p>
                <div className="w-20 h-[0px] border border-zinc-200"></div>
              </div>
            </form>
            <div className="w-full h-auto py-6">
              <button
                onClick={(e) => handleGoogle(e)}
                type="submit"
                className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-2xl shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 min-h-[54px]"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  {" "}
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      {" "}
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        {" "}
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
                <span>Sign Up with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </section>
  );
}
export default SignUp;
