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
        <div className='flex p-4 justify-between w-full items-center mt-6'>
            <div>
                <button className="border-4 border-[#231F20] rounded-none p-1" onClick={handleNavigate} {...props}>
                    <ArrowLeft color="#000000" strokeWidth={3} size={12} />
                </button>
            </div>
            <div className='border border-[#231F20] text-[#231F20] px-3 py-1'>
                <h1>{title}</h1>
            </div>
            <div />
        </div>
    )
}

export default index
