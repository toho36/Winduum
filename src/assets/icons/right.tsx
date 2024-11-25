import React from 'react';

interface RightIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const RightIcon: React.FC<RightIconProps> = ({ color = 'black', ...props }) => (
  <svg
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.21967 0.21967C0.512564 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.53033 4.46967C5.82322 4.76256 5.82322 5.23744 5.53033 5.53033L1.28033 9.78033C0.987437 10.0732 0.512563 10.0732 0.21967 9.78033C-0.0732233 9.48744 -0.0732233 9.01256 0.21967 8.71967L3.93934 5L0.21967 1.28033C-0.073223 0.987437 -0.073223 0.512563 0.21967 0.21967Z"
      fill={color}
    />
  </svg>
);

export default RightIcon;
