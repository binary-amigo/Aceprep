import React, { useState } from 'react';

const QuestionAnswerField = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b  border-gray-200 py-4">
      <button
        className="flex justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-700">{question}</span>
        <span className="text-gray-500">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-500">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the settings page and click on "Change Password".'
    },
    {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
      {
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the settings page and click on "Change Password".'
      },
                      
    // Add more questions and answers here
  ];

  return (
    <div>
    <div>
        <h1 className="text-2xl font-bold m-8 text-center mx-[25%]">Frequently Asked Questions</h1>
    </div>
    <div className="container p-8">
        {faqs.map((faq, index) => (
          <QuestionAnswerField key={index} question={faq.question} answer={faq.answer} />
        ))}
    </div>
    </div>
  );
}
