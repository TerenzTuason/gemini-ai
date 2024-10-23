import React, { useEffect, useState } from 'react'
import {GoogleGenerativeAI} from '@google/generative-ai'
import Swal from 'sweetalert2'

const Home = () => {

    const [answer, setAnswer] = useState("");
    const [prompt, setPrompt] = useState("");

    const genAI = new GoogleGenerativeAI("AIzaSyCqrgyVjbIV7IDDUdmpYmY7PTo2SjXgB9w");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    const storyWriter = async () => {
        const result = await model.generateContent(prompt + '. Format answer with no markdown syntax and only include body');
        const response = result.response;
        const text = response.text();
        setAnswer(text);
        console.log(answer);

        Swal.close();
    };

  return (
    <div className='min-h-screen bg-black text-white pb-[5%]'>
        <div className='flex flex-col items-center pt-[5%]'>
            <p className='text-[32px]'>Enter a prompt</p>
            <div className='flex w-[80%] mt-[20px]'>
                <input 
                    type="text" 
                    className='w-full p-[20px] rounded-[10px] bg-[#d3d3d3] text-black text-[20px]' 
                    onChange={(e) => setPrompt(e.target.value)} />
                <button 
                    className='bg-[#6995d0] w-[20%] ml-[10px] rounded-[10px] text-[20px]' 
                    onClick={() => {
                        Swal.fire({
                            title: 'Generating...',
                            text: 'Please wait while the content is being generated.',
                            allowOutsideClick: false,
                            didOpen: () => {
                                Swal.showLoading();
                            }
                        });
                        storyWriter()
                    }}>Enter</button>
            </div>
        </div>

        <div className='flex justify-center mt-[5%] text-[20px]'>
            <div className={`w-[80%] text-center text-black ${answer == "" ? 'bg-black' : 'bg-[#A9A9A9]'} p-[30px] rounded-[10px]`}>
                {answer}
            </div>
        </div>
    </div>
  )
}

export default Home