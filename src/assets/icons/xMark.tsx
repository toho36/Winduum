import React from 'react';

interface XMarkIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const XMarkIcon: React.FC<XMarkIconProps> = ({ color = '#0F172A', ...props }) => (
  <div
    style={{
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L3.93934 5L0.21967 8.71967C-0.0732233 9.01256 -0.0732233 9.48744 0.21967 9.78033C0.512563 10.0732 0.987437 10.0732 1.28033 9.78033L5 6.06066L8.71967 9.78033C9.01256 10.0732 9.48744 10.0732 9.78033 9.78033C10.0732 9.48744 10.0732 9.01256 9.78033 8.71967L6.06066 5L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934L1.28033 0.21967Z"
        fill={color}
      />
    </svg>
  </div>
);

export default XMarkIcon;
