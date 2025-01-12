import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function index({
    className,
    title,
    href,
    ...props
}) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(href)
    }

    return (
        <div className='flex p-4 justify-between w-full items-center mt-6 '>
            <div onClick={handleNavigate} className='border-[3px] border-[#231F20] rounded-none relative h-[22px] w-[22px] flex items-center justify-center cursor-pointer'>
                <button className=" px-1"  {...props}>
                    <ArrowLeft color="#000000" strokeWidth={3} size={11} />
                    <div className='bg-white h-1 w-2 absolute -left-[7px] top-[35%]' />
                    <div className='bg-white h-1 w-2 absolute -right-[7px] top-[35%]' />
                </button>
            </div>
            <div className='border-2 border-black text-[#231F20] px-8 font-semibold py-[2px]'>
                <h1>{title}</h1>
            </div>
            <div />
        </div>
    )
}

export default index
