import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const sections = [
    {
      title: 'About Ship Global',
      content:
        'Ship Global is an innovative e-commerce company focused on providing seamless and efficient online shopping experiences. We cater to millions of customers worldwide with a wide range of products, from electronics to fashion.',
    },
    {
      title: 'Our Services',
      content:
        'At Ship Global, we offer a variety of services including express shipping, 24/7 customer support, and easy returns. We ensure that every order is delivered on time and in perfect condition.',
    },
    {
      title: 'Why Choose Us?',
      content:
        'Ship Global stands out in the e-commerce market due to our commitment to quality, customer satisfaction, and competitive pricing. We work with top brands to bring you the best deals every day.',
    },
  ];

  return (
    <div>
      <h1>Welcome to Ship Global</h1>
      <Accordion sections={sections} />
    </div>
  );
};

export default App;
