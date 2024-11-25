import { BillingDetails } from '@/components/layout/settingsPage/BillingDetails';
import { ContactDetails } from '@/components/layout/settingsPage/ContactDetails';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4xl w-full  bg-white p-2xl rounded-xl">
      <div>
        <p className="text-lg leading-[26px] font-semibold">Kontaktní údaje</p>
      </div>
      <ContactDetails />
      <hr />
      <div>
        <p className="text-lg leading-[26px] font-semibold">Fakturační údaje</p>
      </div>
      <BillingDetails />
      <hr />
      <div className="flex flex-col gap-md">
        <Checkbox label="Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky" />
        <Checkbox label="Přeji si dostávat informace o novinkách a slevách nebo inspiraci" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex gap-md">
          <Button variant="primaryLong">Uložit změny</Button>
          <Button variant="outline">Změnit heslo</Button>
        </div>
        <div className="flex ">
          <Button variant="warningOutline">Zrušit účet</Button>
        </div>
      </div>
    </div>
  );
};
