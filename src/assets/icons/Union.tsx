import React from 'react';

interface UnionIconProps {
  color: string;
}

const UnionIcon: React.FC<UnionIconProps> = ({ color, ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 5.25C19 2.76472 16.9013 0.75 14.3125 0.75C12.3769 0.75 10.7153 1.87628 10 3.48342C9.28472 1.87628 7.62312 0.75 5.6875 0.75C3.09867 0.75 1 2.76472 1 5.25C1 12.4706 10 17.25 10 17.25C10 17.25 19 12.4706 19 5.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UnionIcon;
