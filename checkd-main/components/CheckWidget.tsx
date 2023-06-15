'use client'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { Timestamp } from 'firebase/firestore';
import formatAccno from '../utilities/formatAccountNumber';
type Cheque = {
    amount: number;
    bankName: string;
    chequeNumber: string;
    chequeStatus: number;
    payeeAccountNumber: string;
    timestamp: Timestamp;
};

type Prop = {
    data: Cheque;
};

export default function CheckWidget({data} : Prop) {
  return (
    <div className='h-36 w-44 p-3 mr-3 flex flex-col justify-between bg-white rounded-md milder__box__shadow mb-6 cursor-pointer hover:scale-[0.98] transition-[0.5s]' >
        {/* Top Container */}
        <div className='flex items-center justify-between' >
            <span className='text-3xl font-bold text-[#A287E7] ' >₹{data?.amount}</span>
            <span className='' >
                {
                    data?.chequeStatus
                    ?
                    <CheckCircleOutlineIcon className='text-[#4ADE80]' />
                    :
                    <CancelIcon className='text-[#e34f4f]' />
                }
            </span>
        </div>

        {/* Middle Container */}
        <div className='flex flex-col' >
            <span className='text-sm font-medium text-[#505050]' >To:</span>
            <span className='text-xs font-medium text-[#C7B6F2]' >{formatAccno(data?.payeeAccountNumber)}</span>
        </div>

        {/* Bottom Container */}
        <div className='w-full text-xs flex justify-end text-gray-500' >
            1:10PM - 02/25/2023
        </div>
    </div>
  )
}
