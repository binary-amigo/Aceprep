import animationData from '../../assets/lotties/home.json'
import Lottie from "react-lottie";

function Main1() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 py-20">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gradient">Dream job?</span>
                <br />
                <span className="text-secondary-900">Consider it </span>
                <span className="text-gradient">nailed</span>
                <br />
                <span className="text-secondary-700 text-3xl sm:text-4xl lg:text-5xl">
                  with AcePrep's secret sauce
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-secondary-600 font-medium">
                <span className="text-accent-teal">"</span>
                Prep like a Champion, Ace like a Boss
                <span className="text-accent-teal">"</span>
              </p>
              
              <p className="text-lg text-secondary-500 max-w-2xl leading-relaxed">
                Master your interview skills with our comprehensive platform featuring AI-powered mock interviews, 
                ATS optimization, and curated learning resources. Your success story starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="btn-primary text-lg px-8 py-4 shadow-glow">
                Start Preparing Now
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">10k+</div>
                <div className="text-sm text-secondary-500">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-secondary-500">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-secondary-500">Companies</div>
              </div>
            </div>
          </div>

          {/* Animation Section */}
          <div className="flex justify-center items-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <Lottie
                options={defaultOptions}
                height={500}
                width={500}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-secondary-400">Scroll to explore</span>
          <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Main1