// LoginPage.js
import image from "../../assets/images/Aceprep.png";
import { useEffect } from "react";
import * as emoji from "node-emoji";
import Lottie from "react-lottie";
import hello from "../../assets/lotties/hello";
import { useGoogleLogin } from "@react-oauth/google";

const DisableScrollComponent = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const emoji2 = emoji.find("wave");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-gray-100 to-blue-900 flex justify-center items-center h-screen fixed-div  ">
      <div className="max-w-md w-full p-6 bg-white  shadow-md bg-opacity-30 backdrop-blur-sm rounded-3xl">
        <div className="text-center ">
          <div className="flex w-20 mx-auto  ">
            <img
              src={image} // Replace with your logo image path
              className="mx-auto justify-center items-center "
            />
          </div>

          <h2 className="mb-2 text-2xl font-bold">Welcome Back!</h2>
          <Lottie options={defaultOptions} height={100} width={200} />
          <p className="text-gray-600">
            Glad to see you again {emoji2.emoji} , <br />
            Login to your account below
          </p>
        </div>
        <form className="mt-6">
          <button
            onClick={() => login()}
            className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4  focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-100 hover:bg-gray-100 "
          >
            Continue with Google
            {/* <img
          src="/path/to/google-logo.png" // Replace with the actual Google logo image path
          alt="Google"
          className="h-5 w-5 ml-2"
        /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="25"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </button>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none bg-[#e8ebf2] hover:opacity-100 hover:bg-white focus:border-blue-500 transition duration-300 focus:opacity-100 text-black text-opacity-100"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded bg-[#e8ebf2] focus:outline-none hover:bg-white  hover:opacity-100 focus:border-blue-500 transition duration-300 focus:opacity-100"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default DisableScrollComponent;
