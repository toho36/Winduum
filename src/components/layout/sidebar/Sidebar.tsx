import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SidebarButton } from '@/components/layout/sidebar/SidebarButton';
import { MenuItems } from '@/components/layout/sidebar/MenuItems';

export const Sidebar = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleMouseEnter = (buttonName: string) => setHoveredButton(buttonName);
  const handleMouseLeave = () => setHoveredButton(null);
  const handleButtonClick = (buttonName: string) => setActiveButton(buttonName);

  return (
    <aside className="w-[304px] h-fit p-4  py-4xl px-2xl bg-[white] rounded-xl">
      <div className="flex flex-col gap-2xl">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium text-center leading-[28px]">Daniil Filatov</h2>
          <p className="text-sm font-normal  text-center leading-[22px] text-main-tertiary">
            daniil.filatov@newlogic.cz
          </p>
        </div>
        <div className="flex flex-col gap-md">
          {MenuItems.map(button => (
            <SidebarButton
              key={button.buttonName}
              to={button.to}
              buttonName={button.buttonName}
              icon={button.icon}
              label={button.label}
              hoveredButton={hoveredButton}
              activeButton={activeButton}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
        <div>
          <Button variant={'warning'}>Odhlásit se</Button>
        </div>
      </div>
    </aside>
  );
};
