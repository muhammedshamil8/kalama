import { Star, pradhiba, BgRank, Empty } from '@/assets/elements';
import classNames from 'classnames';
import { college } from '@/assets/icons';
import { useState } from 'react';
import { Share2 } from 'lucide-react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import CollegeCard from '@/components/collegeCard';



function CollegeTab({ data }) {

    const [searchTerm, setSearchTerm] = useState('');

    const [parent] = useAutoAnimate()

    // console.log(data);



    const rankedList = data.map((item, index) => ({
        ...item,
        rank: index + 1
    }));

    const filteredData = rankedList.filter((item) =>
        item.collegeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="border border-customBlue p-6 px-10 rounded-[50px] bg-white/60 blur-10 z-10">

            <div className='mt-8 flex gap-4 w-full'>
                <div className='px-2 w-[160px] relative flex flex-col  items-center justify-center'>
                    <h1 className='absolute -rotate-90 font-semibold right-0 whitespace-nowrap text-[48px] leading-[1px]'>
                        Score Board
                    </h1>
                    <div className='bg-customBlue py-1 px-4 absolute -rotate-90 text-white font-semibold right-0 text-3xl'>
                        College
                    </div>
                </div>
                <div ref={parent} className='flex-1 flex-grow w-full flex flex-col'>
                    {filteredData.length > 0 ? filteredData.slice(0, 6).map((college, index) => {
                        return (
                            <div className='w-full flex-1 flex-grow' key={index}>
                                <CollegeCard college={college} />
                            </div>
                        );
                    }) :
                        (
                            <div className="flex justify-center items-center w-full h-[300px] my-10">
                                <img src={Empty} alt="Empty" className="w-1/2" />
                            </div>
                        )}
                </div>
            </div>
        </div >
    );
}

export default CollegeTab;