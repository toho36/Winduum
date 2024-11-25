import OutlineCheckIcon from '@/assets/icons/outlineCheck';
import RightIcon from '@/assets/icons/right';
import ShoppingBagIcon from '@/assets/icons/shoppingBag';
import CountrySelector from '@/components/ui/dropdown';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FloatingLabelInput } from '@/components/ui/input';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right';

export function Preview() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Button variant={'primary'}>
        Načíst další
        <ArrowUpRightIcon />
      </Button>

      <div>Hello, this is a test!</div>
      <Button variant={'primaryIcon'}>
        <div className="flex items-center gap-sm">
          <ShoppingBagIcon color="white" />
          Moje objednávky
        </div>
        <RightIcon color="white" />
      </Button>
      <Button variant={'primaryIcon'}>
        <div className="flex items-center gap-sm">
          <OutlineCheckIcon color="white" />
          Moje objednávky
        </div>
        <RightIcon color="white" />
      </Button>
      <div className="bg-color-base-black text-color-base-white">Hello, this is a test!</div>
      <Button variant={'warning'}>Odhlásit se</Button>
      <div className="bg-color-base-black text-color-base-white">Hello, this is a test!</div>
      <Badge variant={'akce'}>Akce</Badge>
      <div className="bg-color-base-black text-color-base-white">Hello, this is a test!</div>
      <Badge variant={'novinka'}>Novinka</Badge>
      <div className="bg-color-base-black text-color-base-white">Hello, this is a test!</div>
      <Badge variant={'nejprodavanejsi'}>Nejprodávanější</Badge>
      <div>
        <FloatingLabelInput type="email" label="Email" required />
        <div className="bg-color-base-black text-color-base-white">Hello, this is a test!</div>

        <FloatingLabelInput type="password" label="Password" />
        <div className="bg-color-base-black text-color-base-white">Hello, this is a test!</div>
        <FloatingLabelInput type="telefon" label="Telefon" />
        <div className="bg-color-base-black text-color-base-white">Hello, this is a test!</div>
        <CountrySelector />
        <div className="bg-color-base-black text-color-base-white">Hello, this is a test!</div>
        <div className="bg-color-base-black text-color-base-white">
          <Checkbox label="Hello, this is a test!"></Checkbox>
        </div>
      </div>
    </>
  );
}
