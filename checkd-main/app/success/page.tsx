import SuccessWidget from "../../components/SuccessWidget";

const data = {
    bankName: "AXIS BANK LTD",
    chequeNumber: "30906250021101242616031",
    amount: 329000,
    payeeAccountNumber: "911010049001545",
    receiverName: "Vijay Kumar Singh",
    ifsCode: "UTIB0000426",
    ocrStatus: true,
    signatureStatus: true
  };

export default function page() {
  return (
    <div className="flex flex-1 h-screen md:ml-[20vw]">
        <SuccessWidget data={data} />
    </div>
  );
}





























// <div className="flex flex-1 h-screen md:ml-[20vw]" >
//         <div className="flex flex-col p-8" >
//             <div className="text-5xl font-bold text-[#C7B6F2]" >Cheque processed Successfully</div>
//             <div className="mt-10 border-[2px] border-[#C7B6F2] w-fit md:w-4/6 rounded-md overflow-hidden" >
//                 <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1677991195/checkd/cheques/wra1ed31mclgzb9nfbwl.jpg" alt="cheque-img" className="w-fit" />
//             </div>
//             <div className="flex flex-col rounded-md mt-10 w-full md:w-4/6 h-fit bg-white p-2 space-y-3" >
//                 <div className="flex space-x-5 align-baseline p-1 pl-6 pr-6 rounded-md w-fit" >
//                     <span className="text-base font-bold text-[#C7B6F2]" >Receiver Name</span>
//                     <span className="font-semibold text-[#909090] text-sm" >Vijay Kumar Singh</span>
//                 </div>
//                 <div className="flex space-x-5 align-baseline p-1 pl-6 pr-6 rounded-md w-fit" >
//                     <span className="text-base font-bold text-[#C7B6F2]" >Amount</span>
//                     <span className="font-semibold text-[#909090] text-sm" >329000</span>
//                 </div>
//                 <div className="flex space-x-5 align-baseline p-1 pl-6 pr-6 rounded-md w-fit" >
//                     <span className="text-base font-bold text-[#C7B6F2]" >Bank Name</span>
//                     <span className="font-semibold text-[#909090] text-sm" >Axis Bank LTD</span>
//                 </div>
//                 <div className="flex space-x-5 align-baseline p-1 pl-6 pr-6 rounded-md w-fit" >
//                     <span className="text-base font-bold text-[#C7B6F2]" >Cheque Number</span>
//                     <span className="font-semibold text-[#909090] text-sm" >978654659865454984564</span>
//                 </div>
//                 <div className="flex space-x-5 align-baseline p-1 pl-6 pr-6 rounded-md w-fit" >
//                     <span className="text-base font-bold text-[#C7B6F2]" >Payee Account Number</span>
//                     <span className="font-semibold text-[#909090] text-sm" >897564213465798</span>
//                 </div>
//             </div>
//         </div>
//     </div>
