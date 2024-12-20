import React from 'react';

interface ShoppingBagIconProps {
  color: string; // Remove the extends, make color required
}

const ShoppingBagIcon: React.FC<ShoppingBagIconProps> = ({ color, ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.75 9.5V5C13.75 2.92893 12.0711 1.25 10 1.25C7.92893 1.25 6.25 2.92893 6.25 5V9.5M17.606 7.50723L18.8692 19.5072C18.9391 20.1715 18.4183 20.75 17.7504 20.75H2.24963C1.58172 20.75 1.06089 20.1715 1.13081 19.5072L2.39397 7.50723C2.45424 6.93466 2.93706 6.5 3.51279 6.5H16.4872C17.0629 6.5 17.5458 6.93466 17.606 7.50723ZM6.625 9.5C6.625 9.70711 6.4571 9.875 6.25 9.875C6.04289 9.875 5.875 9.70711 5.875 9.5C5.875 9.29289 6.04289 9.125 6.25 9.125C6.4571 9.125 6.625 9.29289 6.625 9.5ZM14.125 9.5C14.125 9.70711 13.9571 9.875 13.75 9.875C13.5429 9.875 13.375 9.70711 13.375 9.5C13.375 9.29289 13.5429 9.125 13.75 9.125C13.9571 9.125 14.125 9.29289 14.125 9.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShoppingBagIcon;
