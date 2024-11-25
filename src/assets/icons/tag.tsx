import React from 'react';

interface TagIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const TagIcon: React.FC<TagIconProps> = ({ color = '#0F172A', ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.56802 1H3.25C2.00736 1 1 2.00736 1 3.25V7.56802C1 8.16476 1.23705 8.73705 1.65901 9.15901L11.2401 18.7401C11.9388 19.4388 13.0199 19.6117 13.8465 19.0705C15.9271 17.7084 17.7084 15.9271 19.0705 13.8465C19.6117 13.0199 19.4388 11.9388 18.7401 11.2401L9.15901 1.65901C8.73705 1.23705 8.16476 1 7.56802 1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 4H4.0075V4.0075H4V4Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TagIcon;
