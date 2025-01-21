import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import '../styles/faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: 'How do i find a bike or car for a trip?', answer: 'You can browse our selection of vehicles online, choose the car that best fits your needs and book it for a duration of your choice.' },
    { question: 'How can i extend my trip date after booking?', answer: 'You can extend your trip date by contacting our customer support team.' },
    { question: 'How do i extend my trip?', answer: 'You can extend your trip by contacting our customer support team.' },
    { question: 'Am i responsible for fuel?', answer: 'No, we are not responsible for fuel. You are responsible for paying for the fuel used during your trip.' },
    { question: 'Can i book a car or ride under the age of 20?', answer: 'Yes, you can book a car or ride under the age of 20 if you have a valid driver license.' },
    { question: 'Can i apply for a promo code?', answer: 'Yes, you can apply for a promo code by contacting our customer support team.' }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faqs-container'>
      <div className="ques">Have Any Questions</div>
      <center>
      <hr className='default-rule' />
      </center>
      <div className="dropdowns">
        {questions.map((question, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span className='the-question'>{question.question}</span>
              <span className="icon">
                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {question.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
