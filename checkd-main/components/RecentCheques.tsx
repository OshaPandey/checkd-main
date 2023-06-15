'use client'
import MoreButton from "./MoreButton";
import CheckWidget from "./CheckWidget";
import { Timestamp } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useSession } from "next-auth/react";

type Cheque = {
  amount: number;
  bankName: string;
  chequeNumber: string;
  chequeStatus: number;
  payeeAccountNumber: string;
  timestamp: Timestamp;
};

type Cheques = Cheque[];

export default function RecentCheques() {
  const session = useSession();
  const [cheques, setCheques] = useState<Cheques>([]);
  const [accountNumber, setAccountNumber] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const accountNumberRef = collection(db, "users", session?.data?.user?.email!, "accounts");

  useEffect( () => {
    getCheques();
  }, []);

  useEffect(() => {
    getChequeData();
  }, [accountNumber]);

  // useEffect(() => {
  //   console.log(cheques);
  // }, [cheques]);

  const getCheques = async () => {
    try{
      setLoading(true);
      const data = await getDocs(accountNumberRef);
      if(data?.docs[0]?.data()?.accountNumber) setAccountNumber(data?.docs[0]?.data().accountNumber);
    }
    catch(err){
      console.log(err);
    }
  };

  const getChequeData = async () => {
    try{
      const acno = accountNumber?.trim();
      const chequeRef = collection(db, "users", session?.data?.user?.email!, "accounts", acno!, "cheques");
      const data1 = await getDocs(chequeRef);
      const filteredData = data1?.docs?.map((item) => item?.data());
      setCheques(filteredData);
      setLoading(false);
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className='' >
        <div className='text-lg font-semibold text-[#666666]' >Recent Cheques</div>
        {/* Transactions Table */}
        <div className='mt-3 flex flex-wrap' >
            {
              cheques?.map((item) => <CheckWidget data={item} key={item?.chequeNumber} />)
            }
            {/* {
              cheques.map((item) => <CheckWidget data={item} key={item?.chequeNumber} />)
            } */}
        </div>
        <MoreButton route={'cheques'} />

    </div>
  )
}
