import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import { useNavigate } from 'react-router-dom';

function Schedule() {
  const navigate = useNavigate();
  const dates = [
    '19-01-25',
    '20-01-25',
    '21-01-25',
    '22-01-25',
    '23-01-25',
    '24-01-25',
  ];

  const stages = {
    '19-01-25': [
      { id: 101, name: 'Main Arena', stage: 'Stage 1' },
      { id: 102, name: 'Community Hall', stage: 'Stage 2' },
      { id: 103, name: 'Green Lounge', stage: 'Stage 3' },
    ],
    '20-01-25': [
      { id: 201, name: 'The Plaza', stage: 'Stage 1' },
      { id: 202, name: 'Concert Hall', stage: 'Stage 2' },
    ],
    '21-01-25': [
      { id: 301, name: 'Sports Complex', stage: 'Stage 1' },
      { id: 302, name: 'Event Deck', stage: 'Stage 2' },
      { id: 303, name: 'Sky Dome', stage: 'Stage 3' },
      { id: 304, name: 'Open Field', stage: 'Stage 4' },
    ],
    '22-01-25': [
      { id: 401, name: 'Grand Ballroom', stage: 'Stage 1' },
      { id: 402, name: 'Clubhouse', stage: 'Stage 2' },
    ],
    '23-01-25': [
      { id: 501, name: 'Riverside Pavilion', stage: 'Stage 1' },
      { id: 502, name: 'Community Theater', stage: 'Stage 2' },
      { id: 503, name: 'Garden Tent', stage: 'Stage 3' },
    ],
    '24-01-25': [
      { id: 601, name: 'Amphitheater', stage: 'Stage 1' },
      { id: 602, name: 'Innovation Hub', stage: 'Stage 2' },
      { id: 603, name: 'Creative Studio', stage: 'Stage 3' },
      { id: 604, name: 'Workshop Area', stage: 'Stage 4' },
    ],
  };

  const [selectedDate, setSelectedDate] = useState(dates[0]);

  const handleSelectStage = (id) => {
    navigate(`/stage/${id}`);
  }

  return (
    <div className="w-full">
      <Header title="Schedule" href="/" />

      <section className='mt-10'>
        {/* Date Navigation */}
        <div className='flex items-center justify-center px-3'>
          <div className="flex justify-start gap-4 mb-6 overflow-auto scroll-pl-6 snap-x scrollbar-hide  mx-auto">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 snap-start py-2  whitespace-nowrap border border-black ${selectedDate === date
                  ? 'bg-[#B99814] text-black font-bold'
                  : 'bg-white '
                  }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Stage Display */}
        <div className="space-y-4 max-w-[600px] mx-auto ">
          {stages[selectedDate]?.map((stage) => (
            <div
              key={stage.id}
              onClick={() => handleSelectStage(stage.id)}
              className={`p-4  border border-black bg-clip-content text-center ${stage.stage === 'Stage 1'
                ? 'bg-black text-white'
                : stage.stage === 'Stage 2'
                  ? 'bg-gray-300'
                  : stage.stage === 'Stage 3'
                    ? 'bg-gray-500 text-white'
                    : 'bg-gray-700 text-white'
                }`}
            >
              <h2 className="text-md font-bold p-2 pb-0 ">{stage.stage}</h2>
              <p className="text-xl font-black p-2">{stage.name}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Schedule;
