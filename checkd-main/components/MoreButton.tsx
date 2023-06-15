'use client'
import { useRouter } from "next/navigation";

type Prop = {
  route: string | null;
};

export default function MoreButton({route}: Prop) {
  const router = useRouter();
  return (
    <div className="mt-3 text-xs font-bold text-[#a287e7] pt-2 pb-2 pl-3 pr-3 bg-white rounded-3xl w-fit cursor-pointer hover:scale-[0.96] transition-[0.5s]" onClick={() => router.replace(route ? route! : '/')} >Show more...</div>
  )
}
