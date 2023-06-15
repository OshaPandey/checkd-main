'use client'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
export default function Sidebar() {
    const session = useSession();
    const router = useRouter();

  return (
    <div className="w-1/5 hidden sm:flex md:w-1/6 h-screen flex-col items-center justify-between bg-[#C7B6F2] fixed top-0 " >
        {/* Top Container */}
        <div className="w-full pt-8">
            <div className="font-bold text-white text-2xl md:text-4xl w-full flex justify-center pb-3 cursor-pointer hover:text-[#a287e7] transition-[0.5s] " onClick={() => router.replace('/')} >
                <span className="" >check</span>
                <span className="text-white" >:D</span>
            </div>
            <div className="flex flex-col mt-5 items-center space-y-2" >
                <div className="sidebar__item" onClick={() => router.replace('/')}>Dashboard</div>
                <div className="sidebar__item" onClick={() => router.replace('/transactions')} >Transactions</div>
                <div className="sidebar__item" onClick={() => router.replace('/cheques')} >Your cheques</div>
                <div className="sidebar__item" onClick={() => router.replace('/account')} >Account</div>
            </div>
        </div>


        {/* Bottom Container */}
        <div className="pb-6">
            <div className="flex flex-col items-center space-y-1 mb-5" >
                <img className="h-10 w-10 rounded-full" src={session?.data?.user?.image!} alt="profile-img" />
                <span className="text-sm text-white font-semibold" >{session?.data?.user?.name!}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 border-[2px] border-white rounded-md p-1 cursor-pointer hover:bg-[#d7c9fa] transition-[0.5s]" onClick={() => signOut()} >
                <LogoutIcon className="text-lg text-white" />
                <span className="text-white text-base font-semibold" >Logout</span>
            </div>
        </div>
    </div>
  )
}
