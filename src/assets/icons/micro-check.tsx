import React from 'react';

interface MicroCheckIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const MicroCheckIcon: React.FC<MicroCheckIconProps> = ({ color = '#fafafa', ...props }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.41603 0.37595C9.76067 0.605715 9.8538 1.07137 9.62404 1.41601L4.62404 8.91601C4.4994 9.10297 4.2975 9.2242 4.0739 9.24634C3.8503 9.26848 3.62855 9.1892 3.46967 9.03032L0.46967 6.03032C0.176777 5.73742 0.176777 5.26255 0.46967 4.96966C0.762563 4.67676 1.23744 4.67676 1.53033 4.96966L3.88343 7.32276L8.37596 0.583963C8.60573 0.239316 9.07138 0.146186 9.41603 0.37595Z"
      fill={color}
    />
  </svg>
);

export default MicroCheckIcon;
