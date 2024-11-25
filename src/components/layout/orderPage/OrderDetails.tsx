type Order = {
  id: string;
  status: string;
  orderDate: string;
  total: string;
};

export const OrderDetails = ({ order }: { order: Order }) => (
  <div className="flex justify:between">
    <div>
      <div>
        <p className="font-inter text-base font-normal leading-6">
          Datum objednávky:{' '}
          <span className="font-inter text-main-tertiary font-normal leading-relaxed">
            {order.orderDate}
          </span>
        </p>
      </div>
      <div>
        <p className="font-inter text-base font-normal leading-6">
          Cena celkem:{' '}
          <span className="font-inter text-main-tertiary font-normal leading-relaxed">
            {order.total}
          </span>
        </p>
      </div>
    </div>
    <div className="ml-auto text-right">
      <div>
        <p className="text-primary text-sm font-medium leading-6 ">Potřebujete poradit?</p>
      </div>
      <div>
        <p className=" text-sm font-medium leading-6 ">314 004 540 (po-pá 8:00-16:00)</p>
      </div>
    </div>
  </div>
);
