import PhotoIcon from '@/assets/icons/photo';
import { OrderDetails } from '@/components/layout/orderPage/OrderDetails';
import { OrderActions } from '@/components/layout/orderPage/OrderActions';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { dummyOrders } from '@/utils/dummyOrders';

export const OrderPage = () => {
  return (
    <>
      {dummyOrders.map(order => (
        <div key={order.id} className="bg-white p-2xl rounded-xl ">
          <div className="flex flex-col  gap-2xl">
            <div className="flex flex-col justify-between gap-md">
              <div className="flex justify-between ">
                <h2 className="text-lg font-semibold leading-">Číslo objednávky: {order.id}</h2>
                <Badge variant={'novinka'} className="ml-auto text-right">
                  {order.status}
                </Badge>
              </div>
              <div className="flex gap-4">
                <PhotoIcon color="#9ca3af" />
                <PhotoIcon color="#9ca3af" />
                <PhotoIcon color="#9ca3af" />
              </div>
            </div>
            <OrderDetails order={order} />
            <div className="flex justify:between gap-4 items-center">
              <Button variant={'primaryLong'}>Detail</Button>
              <OrderActions orderId={order.id.toString()} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
