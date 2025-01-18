import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import { useNavigate } from 'react-router-dom';
import { eventData } from '@/const/StageData';
import { motion, AnimatePresence } from "motion/react";

function Schedule() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(Object.keys(eventData)[0]);

  const handleSelectStage = (id) => {
    navigate(`/stage/${selectedDate}/${id}`);
  };

  function pickColor(rank) {
    const colors = ['border-b-[5px] border-b-[#3592BA]', 'border-b-[5px] border-b-customEmerald', 'border-b-[5px] border-b-customGreen'];

    return colors[(rank - 1) % colors.length];
  }



  return (
    <div className="w-full">
      <Header title="Schedule" href="/" />

      <section className='mt-10'>
        {/* Date Navigation */}
        <motion.div
          className="flex items-center justify-center px-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-start gap-4 mb-6 overflow-auto scroll-pl-6 snap-x scrollbar-hide  mx-auto">
            {Object.keys(eventData).map(date => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-3 snap-start py-[5px]  whitespace-nowrap border-2 border-borderColor hover:bg-customBlue/90 hover:border-customBlue hover:text-white transition-all ease-in-out ${selectedDate === date
                  ? 'bg-customBlue text-white font-bold border !border-customBlue'
                  : 'bg-white '
                  }`}
              >
                {date}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {/* Stage Display */}
          <motion.div
            className="space-y-4 max-w-[600px] mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, y: 50 }} // Exit animation
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {eventData[selectedDate]?.stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className={`max-w-[400px] mx-auto ${pickColor(index + 1)}`}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <div className={`p-1  border-2 border-borderColor w-full  relative `}
                  key={stage.id}
                >
                  <div
                    onClick={() => handleSelectStage(stage.id)}
                    className={`p-2 text-center text-white cursor-pointer ${(index + 1) % 2 === 0 ? 'bg-[#605F5F]' : 'bg-black'
                      }`}
                  >
                    <h2 className="text-md font-bold  pb-0 ">{stage.stage}</h2>
                    <p className="text-2xl font-black uppercase">{stage.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section >

    </div >
  );
}

export default Schedule;
