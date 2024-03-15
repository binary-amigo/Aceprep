import image from "../assets/images/Aceprep.png";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa"; // Ensure you have react-icons installed
import animationData from "../assets/lotties/signupanimation.json";
import Lottie from "react-lottie";

const SignUpCard = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-gray-100 to-blue-900 flex justify-center items-center h-screen fixed-div ">
      <div className=" w-1/5 h-[678.6px] bg-[#2B3467] rounded-l-3xl">
        <div className="flex justify-center items-end h-full ">
          <div>
            <div>
              <div className="text-lg text-white">Welcome To</div>
              <div className="font-extrabold text-4xl text-white">AcePrep</div>
            </div>
            <div className="mt-36">
              <Lottie options={defaultOptions} height={200} width={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg w-full py- bg-white  shadow-md bg-opacity-30 backdrop-blur-sm rounded-r-3xl">
        <div className="flex flex-col items-center ">
          {/* Logo Placeholder - Replace 'Logo' with your actual logo component or image */}
          <div className="flex w-20 mx-auto  ">
            <img
              src={image} // Replace with your logo image path
              className="mx-auto justify-center items-center "
            />
          </div>
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

          <form className="space-y-2  ">
            {/* test */}
            <div className="py-2 rounded-full px-4 bg-[#e8ebf2] hover:bg-white transition duration-300">
              <div className="items-center flex  ">
                <FaUser className="mr-2 " />
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className=" py-2 mr-24 ml-4 bg-transparent focus:outline-none focus:border-blue-500 focus:opacity-100"
                />
              </div>
            </div>
            {/* test */}

            <div className="flex items-center rounded-full px-4 py-2 bg-[#e8ebf2] hover:bg-white transition duration-300">
              <div className="flex items-center justify-start">
                <FaUser className="mr-2" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500 focus:opacity-100"
                  required
                />
              </div>
            </div>
            <div className="flex items-center rounded-full px-4 py-2 bg-[#e8ebf2] hover:bg-white transition duration-300">
              <div className="flex items-center justify-start">
                <FaEnvelope className="mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500 focus:opacity-100"
                  required
                />
              </div>
            </div>
            <div className="flex items-center rounded-full px-4 py-2 bg-[#e8ebf2] hover:bg-white transition duration-300">
              <div className="flex items-center justify-start">
                <FaPhone className="mr-2" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500 focus:opacity-100"
                />
              </div>
            </div>

            <div className="flex items-center rounded-full px-4 py-2 bg-[#e8ebf2] hover:bg-white transition duration-300">
              <div className="flex items-center justify-start">
                <FaLock className="mr-2" />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500 focus:opacity-100"
                  required
                />
              </div>
            </div>

            <div className="flex items-center rounded-full px-4 py-2 bg-[#e8ebf2] hover:bg-white transition duration-300">
              <div className="flex items-center justify-start">
                <FaLock className="mr-2" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500 focus:opacity-100"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center justify-between items-center mt-2 w-80 ">
            <p>
              Already have an account?{" "}
              <a href="#" className="text-blue-600">
                Sign In
              </a>
            </p>
            <button
              onClick={() => login()}
              className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 mt-2 mb-8 focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-100 hover:bg-gray-100 "
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
