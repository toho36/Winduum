import { Button } from '@/components/ui/button';
import { dummyInvoice } from '@/utils/dummyInvoice';
import ArrowDownOnSquareStackIcon from '@/assets/icons/arrow-down-on-square-stack';

export const InvoicePage = () => {
  return (
    <div className="flex flex-col gap-4xl">
      <div className="bg-white gap-4xl rounded-t-lg  ">
        <div className="flex flex-col">
          <div className="flex width-[976px]">
            <div className="pl-lg pt-lg text-left font-semibold text-sm leading-[22px] border-b flex-1">
              Číslo faktury
            </div>
            <div className="py-lg  text-left font-semibold text-sm leading-[22px] border-b flex-1">
              Číslo objednávky
            </div>
            <div className="py-lg  text-left font-semibold text-sm leading-[22px] border-b flex-1">
              Cena celkem
            </div>
            <div className=" p-lg  text-right font-semibold text-sm leading-[22px] border-b flex-1">
              Stažení
            </div>
          </div>
          <div className=" flex flex-col pt-2xl pb-4 gap-[38px]">
            {dummyInvoice.map(invoice => (
              <div key={invoice.id} className=" flex hover:bg-gray-100 ">
                <div className="pl-2xl leading-6 font-normal flex-1">{invoice.id}</div>
                <div className="leading-6 font-normal flex-1">{invoice.orderNumber}</div>
                <div className="leading-6 font-normal flex-1">{invoice.price}</div>
                <div className="pr-2xl text-right leading-6 font-normal flex-1">
                  <a
                    href={invoice.download}
                    download
                    className="flex items-center justify-end text-blue-500 leading-6 font-normal text-xs"
                  >
                    <ArrowDownOnSquareStackIcon color="#3B82F6" className="mr-1" />
                    Stáhnout
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <div>
          <Button variant={'primary'}> Načíst další</Button>
        </div>
        <div className="flex gap-2 items-center justify-center align-middle">
          {[1, 2, '...', 56].map((page, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center align-middle bg-white cursor-pointer ${
                page === 1 ? 'text-primary ' : 'hover:text-primary'
              }`}
            >
              {page}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
