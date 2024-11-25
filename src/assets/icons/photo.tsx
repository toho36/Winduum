import React from 'react';

interface PhotoIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const PhotoIcon: React.FC<PhotoIconProps> = ({ color = '#9ca3af', ...props }) => (
  <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center">
    <svg
      width="20"
      height="20"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.25 12.75L6.40901 7.59099C7.28769 6.71231 8.71231 6.71231 9.59099 7.59099L14.75 12.75M13.25 11.25L14.659 9.84099C15.5377 8.96231 16.9623 8.96231 17.841 9.84099L20.75 12.75M2.75 16.5H19.25C20.0784 16.5 20.75 15.8284 20.75 15V3C20.75 2.17157 20.0784 1.5 19.25 1.5H2.75C1.92157 1.5 1.25 2.17157 1.25 3V15C1.25 15.8284 1.92157 16.5 2.75 16.5ZM13.25 5.25H13.2575V5.2575H13.25V5.25ZM13.625 5.25C13.625 5.45711 13.4571 5.625 13.25 5.625C13.0429 5.625 12.875 5.45711 12.875 5.25C12.875 5.04289 13.0429 4.875 13.25 4.875C13.4571 4.875 13.625 5.04289 13.625 5.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default PhotoIcon;
