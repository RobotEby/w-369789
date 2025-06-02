
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  bgColor: string;
  iconColor: string;
  textColor: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  icon: Icon,
  title,
  value,
  description,
  bgColor,
  iconColor,
  textColor
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg border border-opacity-20`}>
      <div className="flex items-center mb-3">
        <Icon className={`h-5 w-5 ${iconColor} mr-2`} />
        <h4 className={`font-semibold ${textColor}`}>{title}</h4>
      </div>
      <p className={`text-3xl font-bold ${textColor} mb-1`}>{value}</p>
      <p className={`${iconColor} text-sm`}>{description}</p>
    </div>
  );
};

export default MetricsCard;
