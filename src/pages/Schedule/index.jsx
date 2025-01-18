import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import { useNavigate } from 'react-router-dom';
import { eventData } from '@/const/StageData';

function Schedule() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(Object.keys(eventData)[0]);

  const handleSelectStage = (id) => {
    navigate(`/stage/${selectedDate}/${id}`);
  };

  function pickColor(rank) {
    const colors = ['border-b-[5px] border-b-[#3592BA]', 'border-b-[5px] border-b-[#00A99D]', 'border-b-[5px] border-b-[#8DC63F]'];

    return colors[(rank - 1) % colors.length];
  }



  return (
    <div className="w-full">
      <Header title="Schedule" href="/" />

      <section className='mt-10'>
        {/* Date Navigation */}
        <div className='flex items-center justify-center px-3'>
          <div className="flex justify-start gap-4 mb-6 overflow-auto scroll-pl-6 snap-x scrollbar-hide  mx-auto">
            {Object.keys(eventData).map(date => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-3 snap-start py-[5px]  whitespace-nowrap border-2 border-black hover:bg-[#276692]/90 hover:border-[#276692] hover:text-white transition-all ease-in-out ${selectedDate === date
                  ? 'bg-[#276692] text-white font-bold border !border-[#276692]'
                  : 'bg-white '
                  }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Stage Display */}
        <div className="space-y-4 max-w-[600px] mx-auto px-4">
          {eventData[selectedDate]?.stages.map((stage, index) => (
            <div className={`p-1  border-2 border-black max-w-[400px] mx-auto relative`}
              key={stage.id}
            >
              <div className={`w-full absolute -bottom-[7px] left-0 right-0 ${pickColor(index + 1)}`}></div>
              <div
                onClick={() => handleSelectStage(stage.id)}
                className={`p-2 text-center text-white cursor-pointer ${(index + 1) % 2 === 0 ? 'bg-[#605F5F]' : 'bg-black'
                  }`}
              >
                <h2 className="text-md font-bold  pb-0 ">{stage.name}</h2>
                <p className="text-2xl font-black uppercase">{stage.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section >

    </div >
  );
}

export default Schedule;
