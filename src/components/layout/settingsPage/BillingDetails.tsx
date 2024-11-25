import CountrySelector from '@/components/ui/dropdown';
import { FloatingLabelInput } from '@/components/ui/input';

export const BillingDetails = () => (
  <div className="w-full flex flex-col gap-md">
    <div className="flex gap-md w-full">
      <FloatingLabelInput type="jmeno" label="Jméno" required className="flex-1" />
      <FloatingLabelInput type="prijmeni" label="Příjmení" required className="flex-1" />
    </div>
    <div className="flex gap-4">
      <div className="flex w-1/2 ">
        <FloatingLabelInput type="firma" label="Název firmy" required />
      </div>
      <div className="flex w-1/2 gap-4 ">
        <FloatingLabelInput type="ic" label="IČ" required />
        <FloatingLabelInput type="dic" label="DIČ" />
      </div>
    </div>
    <div className="flex gap-md w-full">
      <FloatingLabelInput type="ulice" label="Ulice a číslo popisné" className="flex-1" />
      <FloatingLabelInput type="mesto" label="Město" className="flex-1" />
    </div>
    <div className="flex gap-4 w-full">
      <div className="flex w-1/2 ">
        <FloatingLabelInput type="psc" label="PSČ" className="flex-1" />
      </div>
      <div className="flex w-1/2 ">
        <CountrySelector />
      </div>
    </div>
  </div>
);
