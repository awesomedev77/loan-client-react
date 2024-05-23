import React from 'react';

import loan from '../assets/images/loan.png';
import calendar from '../assets/images/calendar.png';
import { useNavigate } from 'react-router-dom';

interface ItemProps {
  item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-xl p-[18px] flex flex-col gap-6">
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-[18px]'>
          <img alt='itemimage' src={`https://ui-avatars.com/api/?length=2&rounded=true&bold=true&name=${item.name}`} className='w-[68px] h-[68px] my-auto' />
          <div className='flex flex-col gap-1 my-auto'>
            <p className='text-[18px] font-semibold leading-normal '>{item.name}</p>
            <p className='text-[16px] font-semibold leading-normal text-[#656F93]'>{item.location}</p>
          </div>
        </div>
        <div className={`border-[1px] p-4 rounded-xl my-auto w-[108px] ${item.status === 0 ? "bg-[#FFF1E8] border-[#EB744166]" : item.status === 1 ? "bg-[#E7F0FF] border-[#4182EB66]" : "bg-[#F7F8F9] border-[#E0E2E9]"}`}>
          <p className={`text-[14px] font-semibold leading-normal text-center ${item.status === 0 ? "text-[#EB7441]" : item.status === 1 ? "text-[#4182EB]" : "text-[#656F93]"}`}>{item.status === 0 ? "Documents Processed" : item.status === 1 ? "Documents Uploaded" : "Upload Documents"}</p>
        </div>
      </div>
      <hr className='border-dashed border-[#D4D7E1]' />
      <div className='flex flex-col gap-7 pt-[-4px]'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-row gap-3'>
            <img alt='itemimage' src={loan} className='w-12 h-12 my-auto' />
            <div className='flex flex-col gap-1 my-auto'>
              <p className='text-[14px] font-semibold text-[#656F93] leading-normal'>Loan Amount</p>
              <p className='text-[16px] font-semibold text-[#161719] leading-normal'>AED {new Intl.NumberFormat('en-US').format(item.loan)}</p>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <img alt='itemimage' src={calendar} className='w-12 h-12 my-auto' />
            <div className='flex flex-col gap-1 my-auto'>
              <p className='text-[14px] font-semibold text-[#656F93] leading-normal'>Date and Time</p>
              <p className='text-[16px] font-semibold text-[#161719] leading-normal'>{item.date}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-3'>
          <img alt='itemimage' src={item.avatar} className='w-12 h-12' />
          <div className='flex flex-col gap-1 my-auto'>
            <p className='text-[14px] font-semibold text-[#656F93] leading-normal'>Applied By</p>
            <div className='flex flex-row gap-2'>
              <p className='text-[16px] font-semibold text-[#161719] leading-normal'>{item.position}</p>
              <p className='text-[16px] font-semibold text-[#161719] leading-normal'>|</p>
              <p className='text-[16px] font-semibold text-[#161719] leading-normal'>{item.user}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-[16px] rounded-full text-[18px] font-bold leading-[13px]" onClick={() => navigate('/detail')}>
        Interact With Application Document
      </button>
    </div>
  );
};

export default Item;