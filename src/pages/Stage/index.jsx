import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/ui/Header';

import { programs, getStageDetails } from '@/const/StageData';

function Stage() {
  const { id } = useParams();
  const stagePrograms = programs[id] || programs[101];
  const numericId = parseInt(id, 10);
  const stageDetails = getStageDetails(numericId, '19-01-25');
  console.log(stageDetails);
  return (
    <div className="w-full">
      <Header title="Stage" href="/schedule" />

      <section className='p-3 max-w-[500px] mx-auto mt-6'>
        <div className='border-black border p-2'>

          <h1 className="text-center text-2xl font-bold mb-2 bg-black text-white p-4">{stageDetails.name || 'Stage Name'}</h1>

          <div className="max-w-[500px] mx-auto space-y-4 border border-black p-2">
            {stagePrograms.length > 0 ? (
              stagePrograms.map((program) => (
                <div
                  key={program.id}
                  className="p-2  text-black border border-black  flex justify-between items-center"
                >
                  <h2 className="text-lg font-bold max-w-[400px] ">{program.name}</h2>
                  <p className="text-sm bg-emerald-400 border border-black px-2 font-semibold text-white">{program.time}</p>
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
