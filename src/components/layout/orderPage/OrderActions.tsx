import { useState } from 'react';
import ArrowUturnLeftIcon from '@/assets/icons/arrowUturnLeft';
import XMarkIcon from '@/assets/icons/xMark';

import { Button } from '@/components/ui/button';

type OrderActionsProps = {
  orderId: string;
};

/**
 * OrderActions component handles the actions related to an order such as repeating or canceling the order.
 * It changes the icon color based on hover and active states.
 *
 * @param {string} orderId - The ID of the order.
 */
export const OrderActions = ({ orderId }: OrderActionsProps) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const handleMouseEnter = (buttonName: string, orderId: string) => {
    setHoveredButton(`${buttonName}-${orderId}`);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getIconColor = (buttonName: string, orderId: string) => {
    const buttonKey = `${buttonName}-${orderId}`;
    return hoveredButton === buttonKey ? '#3b82f6' : '#171717';
  };

  return (
    <div className="flex ml-auto text-right gap-2xl">
      <Button
        variant={'link'}
        onMouseEnter={() => handleMouseEnter('zopakovat', orderId)}
        onMouseLeave={handleMouseLeave}
      >
        Zopakovat
        <ArrowUturnLeftIcon color={getIconColor('zopakovat', orderId)} />
      </Button>
      <Button
        variant={'link'}
        onMouseEnter={() => handleMouseEnter('storno', orderId)}
        onMouseLeave={handleMouseLeave}
      >
        Storno
        <XMarkIcon color={getIconColor('storno', orderId)} />
      </Button>
    </div>
  );
};
