import React from 'react';
import faqs from '@/data/faq.json';

const FAQPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-28">
      <main>
        {Object.keys(faqs).map((category) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-6">
              {category.replace(/([A-Z])/g, ' $1').trim()} FAQs
            </h2>
            {faqs[category as keyof typeof faqs].map((faq, index) => (
              <article key={index} className="mb-8">
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </article>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
};

export default FAQPage;
