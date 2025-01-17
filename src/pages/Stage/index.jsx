import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/ui/Header';
import { eventData } from '@/const/StageData';
import classNames from 'classnames';

function Stage() {
  const { date, id } = useParams();
  const stage = eventData[date]?.stages.find(stage => stage.id === parseInt(id));
  const colors = ['#8DC63F', '#00A99D', '#3592BA'];
  if (!stage) {
    return <p className="text-center mt-10 text-red-600">Stage not found.</p>;
  }

  function pickColor(rank) {
    return colors[rank % 3];
  }
  return (
    <div className="w-full">
      <Header title="Stage" href="/schedule" color={pickColor(id)} />

      <section className='p-3 max-w-[500px] mx-auto mt-6'>
        <div className='border-black border p-2'>

          <h1 className="text-center text-2xl font-bold mb-2 bg-black text-white p-4">{stage.name || 'Stage Name'}</h1>

          <div className="max-w-[500px] mx-auto space-y-4 border border-black p-2">
            {stage.programs.length > 0 ? (
              stage.programs.map((program, index) => (
                <div
                  key={index}
                  className="p-2  text-black border border-black  flex justify-between items-center"
                >
                  <h2 className="text-lg font-bold max-w-[400px] ">{program.name}</h2>
                  <p className={classNames("text-sm  border border-black px-2 font-semibold text-white",
                    {
                      'bg-[#3592BA]': id % 3 === 2,
                      'bg-[#00A99D]': id % 3 === 1,
                      'bg-[#8DC63F]': id % 3 === 0
                    }
                  )}>{program.time}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No programs available for this stage.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stage;
