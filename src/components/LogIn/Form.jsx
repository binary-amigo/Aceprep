// Import necessary dependencies
import image from "../../assets/images/Aceprep.png";
import { useState } from "react";
import * as emoji from "node-emoji";
import Lottie from "react-lottie";
import hello from "../../assets/lotties/hello";
import { GoogleLogin } from "@react-oauth/google";

const DisableScrollComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emoji2 = emoji.find("wave");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await fetch("http://your-backend-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Handle successful login
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-50 to-purple-900 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="glass-effect rounded-3xl p-8 shadow-glow">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img
                src={image}
                className="h-16 w-auto"
                alt="Aceprep Logo"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Welcome Back! <span className="text-2xl">{emoji2.emoji}</span>
            </h2>
            
            <div className="flex justify-center mb-4">
              <Lottie options={defaultOptions} height={120} width={200} />
            </div>
            
            <p className="text-secondary-600 leading-relaxed">
              Glad to see you again! <br />
              Login to your account below
            </p>
          </div>

          {/* Google Login */}
          <div className="mb-6">
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                theme="outline"
                size="large"
                width="100%"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-secondary-500">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-secondary-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-secondary-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-200">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-secondary-600">
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-200">
                Sign up here
              </a>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            Secure login powered by industry-standard encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisableScrollComponent;
