import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { LiaNewspaper } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFile } from "react-icons/fa";

const Card = ({ title, logo, buttonText, description, index }) => {
  return (
    <div 
      className="card p-8 group animate-slide-up hover:shadow-glow"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Icon Container */}
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
            {logo}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/50 to-primary-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-secondary-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Button */}
        <button className="btn-primary w-full group-hover:shadow-glow transition-all duration-200">
          {buttonText}
          <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const CardSection = () => {
  const practiceAreas = [
    {
      title: "Important Questions",
      logo: <FaBookOpen />,
      buttonText: "Start Practice",
      description: "Practice with curated important questions from top companies and recent interviews."
    },
    {
      title: "Aptitude Tests",
      logo: <LiaNewspaper />,
      buttonText: "Take Test",
      description: "Sharpen your logical reasoning and quantitative aptitude skills with timed tests."
    },
    {
      title: "MCQ Practice",
      logo: <GiHamburgerMenu />,
      buttonText: "Practice MCQs",
      description: "Quick multiple-choice questions to test your technical knowledge across domains."
    },
    {
      title: "Practice Sheets",
      logo: <FaFile />,
      buttonText: "Download Sheets",
      description: "Comprehensive practice sheets for structured learning and revision."
    }
  ];

  return (
    <section className="bg-gradient-primary section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
            <span className="text-gradient">Practice Areas</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Choose your practice area and start building the skills you need to ace your interviews. 
            Each section is designed to target specific aspects of the interview process.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {practiceAreas.map((area, index) => (
            <Card
              key={index}
              title={area.title}
              logo={area.logo}
              buttonText={area.buttonText}
              description={area.description}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-soft">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Why Practice with AcePrep?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">Verified Questions</h4>
                <p className="text-secondary-600 text-sm">All questions are curated from real interviews</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">Instant Feedback</h4>
                <p className="text-secondary-600 text-sm">Get immediate results and explanations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">Progress Tracking</h4>
                <p className="text-secondary-600 text-sm">Monitor your improvement over time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
