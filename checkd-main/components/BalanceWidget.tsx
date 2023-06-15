'use client'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ConditionalAction } from '@cloudinary/url-gen/actions/conditional';
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

type Transactions = Transaction[];

export default function BalanceWidget() {
  const [transactions, setTransactions] = useState<Transactions>([]);
  const [balance, setBalance] = useState(0.0);
  const [accountNumber, setAccountNumber] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const accountNumberRef = collection(db, "users", session?.data?.user?.email!, "accounts");

  useEffect(() => {
    getTransactions();
  }, [transactions]);

  useEffect(() => {
    getTransactionData();
  }, [accountNumber]);

  // useEffect(() => {
  //   getBalance(transactions);
  //   console.log(transactions);
  // }, [transactions]);

  const getBalance = (filteredData: Transactions):number => {
    let bal = 0;
    bal += filteredData.map((item) => {
      if (item?.isCredited) return item?.amount;
      return -item?.amount;
    }).reduce((acc, val) => acc + val, 0);
    return bal;
  };

  const getTransactions = async () => {
    try{
      setLoading(true);
      const data = await getDocs(accountNumberRef);
      if(data?.docs[0]?.data()?.accountNumber) setAccountNumber(data?.docs[0]?.data()?.accountNumber);
    }
    catch(err){
      console.log(err);
    }
  };

  const getTransactionData = async () => {
    try{
      if(accountNumber){
        const acno = accountNumber?.trim();
        const transactionsCollectionRef = collection(db, "users", session?.data?.user?.email!, "accounts", acno!, "transactions");
        //console.log(transactionsCollectionRef);
        const data1 = await getDocs(transactionsCollectionRef);
        const filteredData = data1?.docs?.map( (item) => item.data());
        setTransactions(filteredData);
        setLoading(false);
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div
      onClick={() => router.replace('/account')} 
      className="h-32 w-40 p-3 flex flex-col justify-between bg-white rounded-md milder__box__shadow mb-6 cursor-pointer hover:scale-[0.98] transition-[0.5s]" >
        {/* Top Container */}
        <div className='flex items-center justify-between' >
            <span className='text-xl font-semibold text-[#727272]' >Balance</span>
            <span className='h-10 w-10 flex justify-start items-center pl-2 rounded-full bg-[#C7B6F2]' >
                <AccountBalanceWalletIcon className='text-white' />
            </span>
        </div>

        {/* Bottom Container */}
        <div className='font-bold text-[#C7B6F2] text-3xl mb-3' >
        ₹{getBalance(transactions)}
        </div>
    </div>
  )
}
