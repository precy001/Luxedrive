import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import '../styles/faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('general');

  const faqData = {
    general: [
      { question: 'How do I find a bike or car for a trip?', answer: 'You can browse our selection of vehicles online, choose the car that best fits your needs and book it for a duration of your choice.' },
      { question: 'How can I extend my trip date after booking?', answer: 'You can extend your trip date by contacting our customer support team.' },
      { question: 'How do I extend my trip?', answer: 'You can extend your trip by contacting our customer support team.' },
      { question: 'How do I cancel a booking?', answer: 'You can cancel a booking by visiting your account and following the cancellation process.' },
      { question: 'What if I am late for my scheduled pickup?', answer: 'If you are late, the vehicle will be held for a certain amount of time, but additional fees may apply after a certain window.' },
      { question: 'What happens if the vehicle breaks down during my trip?', answer: 'In case of a breakdown, you can contact our support team, and we will assist you in getting the vehicle repaired or provide a replacement.' }
    ],
    security: [
      { question: 'Am I responsible for fuel?', answer: 'No, we are not responsible for fuel. You are responsible for paying for the fuel used during your trip.' },
      { question: 'Can I book a car or ride under the age of 20?', answer: 'Yes, you can book a car or ride under the age of 20 if you have a valid driver license.' },
      { question: 'Can I apply for a promo code?', answer: 'Yes, you can apply for a promo code by contacting our customer support team.' },
      { question: 'What are the security measures for booking a vehicle?', answer: 'We have a secure booking system with encryption to protect your personal data and payment information.' },
      { question: 'Is my personal information protected?', answer: 'Yes, we take your privacy seriously and use industry-standard security measures to protect your information.' },
      { question: 'What should I do if I lose my rental key?', answer: 'Please report the lost key immediately to our customer support, and we will assist you in getting a replacement.' }
    ],
    pricing: [
      { question: 'How is the pricing determined?', answer: 'The pricing is based on the duration and type of vehicle you choose.' },
      { question: 'Is there a cancellation fee?', answer: 'Yes, a cancellation fee applies depending on how close to your reservation date you cancel.' },
      { question: 'Do I need to pay extra for insurance?', answer: 'Insurance is optional and can be added for an additional fee during the booking process.' },
      { question: 'Are there any discounts available?', answer: 'Yes, we offer seasonal promotions and discounts. You can check our website for the latest offers.' },
      { question: 'Is there a deposit required for booking?', answer: 'Yes, a refundable deposit is required for booking. The amount will depend on the type of vehicle and duration of the rental.' },
      { question: 'Can I pay in installments?', answer: 'Currently, we only accept full payment at the time of booking, but we are working on adding more payment options.' }
    ],
    booking: [
      { question: 'How do I book a vehicle?', answer: 'You can book a vehicle directly through our website or app.' },
      { question: 'Can I modify my booking?', answer: 'Yes, you can modify your booking through your account or by contacting support.' },
      { question: 'Can I book a vehicle for someone else?', answer: 'Yes, you can book a vehicle for someone else, but the person must provide their driver’s license at the time of pickup.' },
      { question: 'What if I need a special vehicle (e.g., electric vehicle)?', answer: 'We offer a selection of electric vehicles and other specialized vehicles. You can filter these options when booking.' },
      { question: 'What documents do I need to bring when picking up a vehicle?', answer: 'You need to bring a valid driver’s license, a credit card, and proof of identity.' },
      { question: 'Can I cancel my booking after making a payment?', answer: 'Yes, you can cancel your booking, but please be aware of the cancellation policy and fees.' }
    ],
    terms: [
      { question: 'What is the minimum age requirement to rent?', answer: 'You must be at least 21 years old to rent a vehicle.' },
      { question: 'What are the terms for refunds?', answer: 'Refunds are issued according to our cancellation policy.' },
      { question: 'Can I rent a vehicle if I have points on my driver’s license?', answer: 'It depends on the severity of the points on your license. Please contact us for further evaluation.' },
      { question: 'Do I need to return the vehicle with a full tank?', answer: 'Yes, vehicles must be returned with a full tank of fuel, or additional fees may apply.' },
      { question: 'What happens if the vehicle is damaged?', answer: 'You will be responsible for paying for any damage caused to the vehicle during your rental period.' },
      { question: 'Are there any mileage restrictions?', answer: 'Yes, most vehicles have a mileage limit. If you exceed the limit, additional charges may apply.' }
    ],
    payments: [
      { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, debit cards, and PayPal.' },
      { question: 'Is it safe to make a payment on your website?', answer: 'Yes, our website uses SSL encryption to ensure your payment information is secure.' },
      { question: 'Can I get a refund if I cancel my payment?', answer: 'Refunds are available based on our cancellation policy. Please check the terms before canceling.' },
      { question: 'Do you offer payment plans?', answer: 'Currently, we only accept full payment at the time of booking.' },
      { question: 'Will my payment be processed immediately?', answer: 'Yes, payments are processed immediately upon booking.' },
      { question: 'Do you accept international payments?', answer: 'Yes, we accept international payments using major credit cards and PayPal.' }
    ]
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Close if same question is clicked
  };

  return (
    <div>
      <div className="ques">Have Any Questions?</div>
      <hr className="faq-divider" />

      <div className="faq-sections">
        <center>
          <div className="section-nav">
            {Object.keys(faqData).map((section) => (
              <button
                key={section}
                className={activeSection === section ? 'active' : ''}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </center>
<div className="share">
        <div className="faq-questions">
          {/* Render first 3 questions based on Active Section */}
          {faqData[activeSection].slice(0, 3).map((question, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <span>{question.question}</span>
                <span className="icon">
                  {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {activeIndex === index && <div className="faq-answer">{question.answer}</div>}
            </div>
          ))}
        </div>

        <div className="faq-questions">
          {/* Render last 3 questions based on Active Section */}
          {faqData[activeSection].slice(3, 6).map((question, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAnswer(index + 3)}>
                <span>{question.question}</span>
                <span className="icon">
                  {activeIndex === index + 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {activeIndex === index + 3 && <div className="faq-answer">{question.answer}</div>}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
