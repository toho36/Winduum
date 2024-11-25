import React from 'react';

interface CircleStackIconProps extends React.SVGProps<SVGSVGElement> {
  color: string;
}

const CircleStackIcon: React.FC<CircleStackIconProps> = ({ color = '#0F172A', ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.25 5.375C17.25 7.65317 13.5563 9.5 9 9.5C4.44365 9.5 0.75 7.65317 0.75 5.375M17.25 5.375C17.25 3.09683 13.5563 1.25 9 1.25C4.44365 1.25 0.75 3.09683 0.75 5.375M17.25 5.375V16.625C17.25 18.9032 13.5563 20.75 9 20.75C4.44365 20.75 0.75 18.9032 0.75 16.625V5.375M17.25 5.375V9.125M0.75 5.375V9.125M17.25 9.125V12.875C17.25 15.1532 13.5563 17 9 17C4.44365 17 0.75 15.1532 0.75 12.875V9.125M17.25 9.125C17.25 11.4032 13.5563 13.25 9 13.25C4.44365 13.25 0.75 11.4032 0.75 9.125"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CircleStackIcon;
