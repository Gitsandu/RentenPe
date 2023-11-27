import React, { useState } from "react";
import "./FAQBody.css";
import menu from "./img/question.png";
import phone from "./img/float.png";

function FAQFunction(props) {
  const [accordionOpen, setAccordionOpen] = useState(Array(6).fill(false));
  const accordion = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      plus: "+",
      minus: "-",
    },
    {
      question: "What is your favorite template from BRIX Templates?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      plus: "+",
      minus: "-",
    },
    {
      question: "How do you clone a template from the Showcase?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      plus: "+",
      minus: "-",
    },
    {
      question: "Why is BRIX Templates the best Webflow agency?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      plus: "+",
      minus: "-",
    },
    {
      question: "When was Webflow officially launched?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      plus: "+",
      minus: "-",
    },
    {
      question: "How do you integrate Jetboost with Webflow?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      plus: "+",
      minus: "-",
    },
  ];
  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = Array(6).fill(false);
      newState[index] = !prev[index];
      return newState;
    });
  };
  return (
    <div className="questCont">
      <div className="FAQContainer">
        <div className="faqTop">
          <img id="faqImage" src={menu} alt="alternative" />
        </div>
        <div className="faqBottom">
          <div className="bothContainer">
            <div className="containerText">
              <p id="bodyFont1">Ready To Get Started?</p>
              <p id="bodyFont2">Pay rent payment using renten pe</p>
              <div id="appleButton"></div>
            </div>
            <div className="containerPhone">
              <img id="faqPhone" src={phone} alt="alternative" />
            </div>
          </div>
        </div>
        <div className="faqMiddle">
        <div className="middleBox">
            {accordion.map((item, index) => (
              <div
                key={index}
                className={`accordion ${accordionOpen[index] ? "open" : ""}`}
              >
                <div
                  className="accordionHeader"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <span>{""}</span>
                  <span>{accordionOpen[index] ? item.minus : item.plus}</span>
                </div>
                {accordionOpen[index] && (
                  <div className="accordionContent">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQFunction;
