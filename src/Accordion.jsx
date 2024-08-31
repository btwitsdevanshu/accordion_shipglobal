import React, { useState } from 'react';
import './Accordion.css';
import { FaTimes } from 'react-icons/fa'; // Font Awesome close icon

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {sections.map((section, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <span>{section.title}</span>
            {activeIndex === index && (
              <FaTimes
                className="close-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(null);
                }}
              />
            )}
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? 'active' : ''
            }`}
          >
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
