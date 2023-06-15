'use client'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useContext } from "react";
import { SuccessContext } from './SuccessContextProvider';
//import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

export default function UploadWidget() {
  const [files, setFiles] = useState<File | undefined>(undefined);
  const [fileName, setFileName] = useState<string>("Upload file here");
  const [selectedImage, setSelectedImage] = useState('');
  const session = useSession();
  const router = useRouter();
  const { isPopup, setIsPopup } = useContext(SuccessContext); 

  const getFiles = async (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const notification = toast.loading('Processing Cheque');
      setFiles(e.target.files?.[0]);
      setFileName(e.target.files?.[0]?.name.slice(0, 15));
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      formData.append('upload_preset', 'CheckdPreset');
      formData.append('cloud_name', 'dbzzj25vc');
      formData.append("api_key", '914423246894855');

      try{
        const response = await fetch(
          'https://api.cloudinary.com/v1_1/dbzzj25vc/image/upload',
          {
            method: 'POST',
            body: formData,
          }
        );
    
        const file = await response.json();
        setSelectedImage(file.secure_url);

        const data = {
          "accountNumber": "654321987546",
          "email": session?.data?.user?.email!,
          "balance": 1000000,
          "chequeImage": file.secure_url,
          "signatureImage": file.secure_url
        }

        const response1 = await axios.post('http://127.0.0.1:8000/transaction/', data);  

        console.log(response1?.data);
        console.log('API call made successfully.');
        toast.success('Cheque processed successfully!', {
          id: notification
        });
        //const redirect = toast.loading('Redirecting');
        router.replace('/success');
        setIsPopup(true);
      }

      catch(err){
        toast.error('Error processing your cheque');
      }

    }
  };

  // useEffect(() => {
  //   console.log("🌜", files);
  // }, [files]);

  return (
    <div className="h-32 w-40 p-3 flex flex-col justify-between bg-white rounded-md milder__box__shadow mb-6 cursor-pointer hover:scale-[0.98] transition-[0.5s]" >
        {/* Top Container */}
        <div className='flex items-center justify-between' >
            <span className='text-xl font-semibold text-[#727272]' >Upload</span>
            <span className='h-10 w-10 flex justify-start items-center pl-2 rounded-full bg-[#C7B6F2]' >
                <CenterFocusWeakIcon className='text-white' />
            </span>
        </div>

        {/* Bottom Container */}
        <div className=' text-xs font-semibold text-[#C7B6F2] flex justify-center pt-2 pb-2 border-[2px] border-dashed border-[#C7B6F2] rounded-sm cursor-pointer relative ' >
          <span className='absolute text-sm truncate' >{fileName}</span>
          <input type="file" className="opacity-0" name="file" id="file" onChange={(e) => getFiles(e)} />
        </div>
        
    </div>
  )
}

