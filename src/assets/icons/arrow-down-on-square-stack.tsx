import React from 'react';

interface ArrowDownOnSquareStackIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const ArrowDownOnSquareStackIcon: React.FC<ArrowDownOnSquareStackIconProps> = ({
  color = '#3B82F6',
  ...props
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 5H4.5C3.67157 5 3 5.67157 3 6.5V11.5C3 12.3284 3.67157 13 4.5 13H9.5C10.3284 13 11 12.3284 11 11.5V6.5C11 5.67157 10.3284 5 9.5 5H9M5 7.5L7 9.5M7 9.5L9 7.5M7 9.5L7 1M11 7H11.5C12.3284 7 13 7.67157 13 8.5V13.5C13 14.3284 12.3284 15 11.5 15H6.5C5.67157 15 5 14.3284 5 13.5V13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowDownOnSquareStackIcon;
