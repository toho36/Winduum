import React from 'react';

interface ArrowUturnLeftIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const ArrowUturnLeftIcon: React.FC<ArrowUturnLeftIconProps> = ({ color = '#171717', ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 11.5L1.5 6.5M1.5 6.5L6.5 1.5M1.5 6.5H11.5C14.2614 6.5 16.5 8.73858 16.5 11.5C16.5 14.2614 14.2614 16.5 11.5 16.5H9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowUturnLeftIcon;
