
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StrategyFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StrategyFeaturesGridProps {
  features: StrategyFeature[];
}

const StrategyFeaturesGrid: React.FC<StrategyFeaturesGridProps> = ({ features }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <feature.icon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h4>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StrategyFeaturesGrid;
