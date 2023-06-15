'use client'
import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useContext } from "react";
import { SuccessContext } from "./SuccessContextProvider";
import { useRouter } from "next/navigation";

type TransactionRes = {
    bankName: "AXIS BANK LTD";
    chequeNumber: "30906250021101242616031";
    amount: 329000;
    payeeAccountNumber: "911010049001545";
    receiverName: "Vijay Kumar Singh";
    ifsCode: "UTIB0000426";
    ocrStatus: true;
    signatureStatus: true;
  };

type TransactionResProps = {
    data: TransactionRes;
};


export default function SuccessWidget({data} : TransactionResProps) {
  const { isPopup, setIsPopup } = useContext(SuccessContext);
  const router = useRouter();
  const okPress = () => {
    setIsPopup(false)
    //router.replace('/');
}
  //console.log("🐚", isPopup);
  //const [isSuccess, setIsSuccess] = useState(true);
  return (
    <div className={`absolute z-10 w-[80%] h-[80%] justify-center items-center ${isPopup ? "flex" : "hidden"}`} >
    <div className='bg-slate-100 h-fit w-96 flex flex-col p-5 rounded-md border-[1px] border-[#ccbcf6] strong__box__shadow'>

        <div className='flex space-x-3 items-center justify-between' >
            <div className='font-bold text-4xl text-green-500' >Success 👍</div>
            <CheckCircleIcon className='text-green-500' />
        </div>
        
        <div className='text-xs font-medium text-gray-500 mt-2' >{data?.bankName}</div>
        
        <div className='mt-6 flex justify-between flex-wrap' >
            
            <div className='flex flex-col' >
                <div className='font-semibold text-sm text-[#c2b3e9]' >Receiver Name</div>
                <div className='font-bold text-2xl text-gray-600' >{data?.receiverName}</div>
            </div>

            <div className='flex flex-col mb-4' >
                <div className='font-semibold text-sm text-[#c2b3e9]' >Amount</div>
                <div className='font-bold text-2xl text-green-500' >₹{data?.amount}</div>
            </div>

            <div className='flex flex-col mb-4' >
                <div className='font-semibold text-sm text-[#c2b3e9]' >Cheque Number</div>
                <div className='font-bold text-base text-gray-600' >{data?.chequeNumber}</div>
            </div>

            <div className='flex flex-col' >
                <div className='font-semibold text-sm text-[#c2b3e9]' >Payee Account Number</div>
                <div className='font-bold text-base text-gray-600' >{data?.payeeAccountNumber}</div>
            </div>

            <div className='text-lg font-bold text-white rounded-md cursor-pointer pl-4 pr-4 pt-2 pb-2 bg-[#A287E7] hover:scale-90 bg-[#bea6fc] transition-[0.4s]' onClick={() => okPress()} >ok</div>

        </div>
    </div>
    </div>
  )
}
