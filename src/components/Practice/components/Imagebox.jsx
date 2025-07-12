import React from 'react';
import Lottie from 'react-lottie'
import animationData from '../../../assets/lotties/practiceAnimation.json'
import animationData2 from '../../../assets/lotties/practiceArrow.json'

const ImageBox = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Content */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              <span className="text-gradient">Master Your Skills</span>
              <br />
              <span className="text-secondary-900">Through Practice</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-secondary-600 mb-6 max-w-2xl mx-auto">
              Sharpen your interview skills with our comprehensive practice modules
            </p>
            
            <p className="text-lg text-secondary-500 max-w-3xl mx-auto leading-relaxed">
              From technical questions to behavioral interviews, we provide the tools and resources 
              you need to practice effectively and build confidence for your dream job interview.
            </p>
          </div>

          {/* Animations Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
                className="relative z-10"
              />
            </div>
            
            <div className="animate-bounce-slow">
              <Lottie 
                options={defaultOptions2}
                height={120}
                width={120}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 shadow-glow">
              Start Practicing
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Progress
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </button>
          </div>

          {/* Practice Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-secondary-500">Practice Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-secondary-500">Topic Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-secondary-500">Access Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-secondary-400">Explore practice areas</span>
          <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ImageBox;
