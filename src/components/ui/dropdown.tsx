'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export default function CountrySelector() {
  const [country, setCountry] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value: string) => {
    setCountry(value);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outlineDropDown"
          className="w-full justify-between  min-h-[56px] px-lg  rounded-lg border border-gray-200 bg-white"
        >
          {country || 'Země'}
          <ChevronDown className="ml-2 h-[24px] w-[24px]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full justify-between min-w-[366px] min-h-[56px] px-lg  rounded-lg border  bg-white ">
        <DropdownMenuLabel>Vyberte zemi</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={country} onValueChange={handleSelect}>
          <DropdownMenuRadioItem value="Česká republika">Česká republika</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Slovensko">Slovensko</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Polsko">Polsko</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Německo">Německo</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Rakousko">Rakousko</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
