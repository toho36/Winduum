import { FloatingLabelInput } from '@/components/ui/input';

export const ContactDetails = () => (
  <div className="w-full flex flex-col gap-md">
    <div className="flex gap-md w-full">
      <FloatingLabelInput type="jmeno" label="Jméno" required className="flex-1" />
      <FloatingLabelInput type="prijmeni" label="Příjmení" required className="flex-1" />
    </div>
    <div className="flex gap-4 w-full">
      <FloatingLabelInput type="telefon" label="Telefon" className="flex-1" />
      <FloatingLabelInput type="email" label="E-mail" required className="flex-1" />
    </div>
  </div>
);
