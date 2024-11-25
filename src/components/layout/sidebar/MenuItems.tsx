import CircleStackIcon from '@/assets/icons/circleStack';
import CogIcon from '@/assets/icons/cogIcon';
import MagnifyingGlassIcon from '@/assets/icons/magnifyingGlass';
import OutlineCheckIcon from '@/assets/icons/outlineCheck';
import ShoppingBagIcon from '@/assets/icons/shoppingBag';
import TagIcon from '@/assets/icons/tag';
import UnionIcon from '@/assets/icons/Union';

export const MenuItems = [
  {
    to: '/my-account/orders',
    buttonName: 'objednavky',
    icon: ShoppingBagIcon,
    label: 'Moje objednávky',
  },
  {
    to: '/my-account/invoice',
    buttonName: 'faktury',
    icon: OutlineCheckIcon,
    label: 'Faktury',
  },
  {
    to: '/my-account/progress',
    buttonName: 'seznam',
    icon: UnionIcon,
    label: 'Seznam přání',
  },
  {
    to: '/my-account/progress',
    buttonName: 'vernostni',
    icon: CircleStackIcon,
    label: 'Věrnostní program',
  },
  {
    to: '/my-account/progress',
    buttonName: 'slevy',
    icon: TagIcon,
    label: 'Slevové kódy',
  },
  {
    to: '/my-account/progress',
    buttonName: 'hlidane',
    icon: MagnifyingGlassIcon,
    label: 'Hlídané zboží',
  },
  {
    to: '/my-account/settings',
    buttonName: 'nastaveni',
    icon: CogIcon,
    label: 'Nastavení účtu',
  },
];
