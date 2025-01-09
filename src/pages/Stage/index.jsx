import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/ui/Header';

const programs = {
  101: [
    { id: 1, time: '10:00 AM', name: 'Opening Ceremony' },
    { id: 2, time: '11:30 AM', name: 'Keynote Speech' },
  ],
  102: [
    { id: 1, time: '10:15 AM', name: 'Workshop A' },
    { id: 2, time: '12:00 PM', name: 'Workshop B' },
  ],
  103: [
    { id: 1, time: '9:00 AM', name: 'Morning Yoga' },
    { id: 2, time: '11:00 AM', name: 'Art Workshop' },
  ],
  // Add additional stages and their programs here
};

function Stage() {
  const { id } = useParams(); // Fetch stage ID from URL params
  const stagePrograms = programs[id] || programs[101];
  const stageName = Object.values(stagePrograms).length > 0 ? `Stage ${id}` : "Unknown Stage";

  return (
    <div className="w-full">
      <Header title="Stage" href="/schedule" />

      <section className='border border-black p-4 max-w-[600px] mx-auto mt-10'>
        <h1 className="text-center text-2xl font-bold my-4 bg-black text-white p-4">{stageName}</h1>

        <div className="max-w-[600px] mx-auto space-y-4 border border-black p-2">
          {stagePrograms.length > 0 ? (
            stagePrograms.map((program) => (
              <div
                key={program.id}
                className="p-2  text-white bg-[#605F5F] flex justify-between items-center"
              >
                <h2 className="text-lg font-bold">{program.name}</h2>
                <p className="text-sm">{program.time}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No programs available for this stage.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Stage;
