import React from 'react';

interface MagnifyingGlassIconProps {
  color: string;
}

const MagnifyingGlassIcon: React.FC<MagnifyingGlassIconProps> = ({ color, ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5C8.51899 12.5 9.89296 11.8852 10.8891 10.8891C11.8852 9.89296 12.5 8.51899 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.66252 13.4197 10.1906 12.4517 11.3911L15.7803 14.7197C16.0732 15.0126 16.0732 15.4874 15.7803 15.7803C15.4874 16.0732 15.0126 16.0732 14.7197 15.7803L11.3911 12.4517C10.1906 13.4197 8.66252 14 7 14C3.13401 14 0 10.866 0 7Z"
      fill={color}
    />
  </svg>
);

export default MagnifyingGlassIcon;
