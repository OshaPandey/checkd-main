'use client'
import { signIn } from "next-auth/react";
export default function Login() {
  return (
    <div className="h-screen w-screen space-y-10 bg-[#C7B6F2] flex flex-col items-center justify-center" >
        
        <div className="text-9xl font-bold text-white animate-pulse" >check:D</div>
        
        <div className="flex items-center space-x-3 p-2 rounded-md border-[2px] border-white cursor-pointer hover:bg-[#37374d] transition-[0.5s] " onClick={() => signIn('google')} >

            <img className="h-5" src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1677295291/checkd/5847f9cbcef1014c0b5e48c8_mzjsfa.png" alt="google-logo" />
            <span className=" text-white text-sm mb-1 font-medium" >Sign in with Google</span>
        
        </div>

    </div>
  )
}
