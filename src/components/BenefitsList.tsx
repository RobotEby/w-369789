
import React from 'react';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsListProps {
  benefits: Benefit[];
}

const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <div className="space-y-6 mb-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
