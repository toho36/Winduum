import React from 'react';

interface OutlineCheckIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const OutlineCheckIcon: React.FC<OutlineCheckIconProps> = ({ color = '#0F172A', ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.125 1.25H2.625C2.00368 1.25 1.5 1.75368 1.5 2.375V19.625C1.5 20.2463 2.00368 20.75 2.625 20.75H15.375C15.9963 20.75 16.5 20.2463 16.5 19.625V10.625M7.125 1.25H7.5C12.4706 1.25 16.5 5.27944 16.5 10.25V10.625M7.125 1.25C8.98896 1.25 10.5 2.76104 10.5 4.625V6.125C10.5 6.74632 11.0037 7.25 11.625 7.25H13.125C14.989 7.25 16.5 8.76104 16.5 10.625M6 14L8.25 16.25L12 11"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OutlineCheckIcon;
