import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { OrderPage } from '@/pages/OrderPage';
import { InvoicePage } from '@/pages/InvoicePage';
import { Settings } from '@/pages/SettingsPage';
import { useParams, useNavigate } from 'react-router-dom';
import { PageInProgress } from '@/pages/PageInProgress';

const menuConfig = {
  orders: { component: OrderPage, title: 'Moje objednávky' },
  invoice: { component: InvoicePage, title: 'Faktury' },
  settings: { component: Settings, title: 'Nastavení účtu' },
  progress: { component: PageInProgress, title: 'Ve vývoji' },
};

export function MyAccount() {
  const { menuItem } = useParams<{ menuItem: keyof typeof menuConfig }>();
  const navigate = useNavigate();

  const config = menuItem ? menuConfig[menuItem] : undefined;

  if (!config) {
    navigate('/404', { replace: true });
    return null;
  }

  return (
    <>
      <header className="w-full py-4xl px-8xl ">
        <h1 className="text-[32px] font-semibold leading-[40px]">{config.title}</h1>
      </header>
      <div className="flex gap-4xl px-8xl pb-32">
        <Sidebar />
        <main className=" flex flex-col w-3/4 gap-4xl">{<config.component />}</main>
      </div>
    </>
  );
}
