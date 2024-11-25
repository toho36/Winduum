import { Link } from 'react-router-dom';

import RightIcon from '@/assets/icons/right';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface SidebarButtonProps {
  to: string;
  buttonName: string;
  icon: FC<{ color: string }>;
  label: string;
  hoveredButton: string | null;
  activeButton: string | null;
  handleMouseEnter: (buttonName: string) => void;
  handleMouseLeave: () => void;
  handleButtonClick: (buttonName: string) => void;
}

export const SidebarButton: FC<SidebarButtonProps> = ({
  to,
  buttonName,
  icon: Icon,
  label,
  hoveredButton,
  activeButton,
  handleMouseEnter,
  handleMouseLeave,
  handleButtonClick,
}) => {
  const getIconColor = () =>
    hoveredButton === buttonName || activeButton === buttonName ? 'white' : 'black';

  return (
    <Link to={to}>
      <Button
        variant={activeButton === buttonName ? 'primaryIcon' : 'primaryIconOutline'}
        onMouseEnter={() => handleMouseEnter(buttonName)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(buttonName)}
      >
        <div className="flex items-center gap-sm">
          <Icon color={getIconColor()} />
          {label}
        </div>
        <RightIcon color={getIconColor()} />
      </Button>
    </Link>
  );
};
