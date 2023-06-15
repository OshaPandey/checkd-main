"use client";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Timestamp } from "firebase/firestore";
import formatAccno from "../utilities/formatAccountNumber";

type Transaction = {
  amount: number;
  bankName: string;
  chequeImage: string;
  chequeNumber: string;
  otpStatus: boolean;
  payeeAccountNumber: string;
  timestamp: Timestamp;
  transactionID: string;
  transactionStatus: boolean;
  isCredited: boolean;
};

type Props = {
  data: Transaction;
};

export default function TransactionItem({data} : Props) {
  return (
    <div className="bg-white p-3 rounded-md text-xs flex items-center justify-between max-w-[500px] cursor-pointer mild__box__shadow hover:scale-[0.98] transition-[0.5s]">
      <span className="p-1 bg-[#C7B6F2] rounded-full">
        {
          !data?.isCredited
          ?
          <CallMadeIcon className="text-lg text-white " />
          :
          <CallReceivedIcon className="text-lg text-white " />
        }
      </span>
      <span className={`font-semibold text-lg ${data?.isCredited ? "text-green-400" : "text-red-400"}`}>${data?.amount}</span>
      <span className="font-medium text-gray-500 text-sm">
        {formatAccno(data?.payeeAccountNumber)}
      </span>
      <div className="flex text-gray-500 text-[12px]">
        {/* <span className="">10:39 AM: </span> */}
        <span className="">2/26/2023</span>
      </div>
    </div>
  );
}
