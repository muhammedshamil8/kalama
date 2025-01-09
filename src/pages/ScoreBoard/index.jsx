import React, { useState } from 'react';
import Header from '@/components/ui/Header';

function CollegeTab() {
  const colleges = [
    { rank: 1, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
    { rank: 2, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
    { rank: 3, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
    { rank: 4, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
    { rank: 5, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
  ];

  return (
    <div className="p-4">
      {colleges.map((college) => (
        <div
          key={college.rank}
          className={`flex justify-between items-center p-4 mb-4 border-2 rounded ${college.rank === 1
              ? 'border-blue-400'
              : college.rank === 2
                ? 'border-green-400'
                : college.rank === 3
                  ? 'border-yellow-400'
                  : 'border-black'
            }`}
        >
          <div className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center font-bold text-white mr-4 ${college.rank === 1
                  ? 'bg-blue-400'
                  : college.rank === 2
                    ? 'bg-green-400'
                    : college.rank === 3
                      ? 'bg-yellow-400'
                      : 'bg-black'
                }`}
            >
              {college.rank}
            </div>
            <p className="text-sm font-medium">{college.name}</p>
          </div>
          <div className="text-blue-500 font-bold">{college.points} Pts</div>
        </div>
      ))}
    </div>
  );
}

function IndividualTab() {
  const individuals = [
    {
      name: 'Kalaprathiba',
      participant: 'MUHAMMED SALEEL CP',
      college: 'EMEA College of Arts and Science, Kondotty',
      points: 100,
    },
    {
      name: 'Kalaprathiba',
      participant: 'MUHAMMED SALEEL CP',
      college: 'EMEA College of Arts and Science, Kondotty',
      points: 100,
    },
    {
      name: 'Kalaprathiba',
      participant: 'MUHAMMED SALEEL CP',
      college: 'EMEA College of Arts and Science, Kondotty',
      points: 100,
    },
  ];

  return (
    <div className="p-4">
      {individuals.map((individual, index) => (
        <div
          key={index}
          className="flex items-center p-4 mb-4 border-2 rounded border-green-400"
        >
          <div className="flex-1">
            <h3 className="font-bold text-gray-800">{individual.name}</h3>
            <p className="text-sm text-gray-600">{individual.participant}</p>
            <p className="text-xs text-gray-500">{individual.college}</p>
          </div>
          <div className="flex items-center justify-center w-20 h-12 bg-green-400 text-white font-bold rounded">
            {individual.points} Pts
          </div>
        </div>
      ))}
    </div>
  );
}

function Index() {
  const [activeTab, setActiveTab] = useState('college');

  return (
    <div className="w-full">
      <Header title="Score Board" href="/" />
      <section className='w-full max-w-[700px] mx-auto mt-10'>

        <div className="flex justify-center gap-4">
          <button
            className={`py-2 px-4 ${activeTab === 'college' ? 'bg-blue-400 text-white' : 'bg-gray-100'
              }`}
            onClick={() => setActiveTab('college')}
          >
            College
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'individual' ? 'bg-blue-400 text-white' : 'bg-gray-100'
              }`}
            onClick={() => setActiveTab('individual')}
          >
            Individual
          </button>
        </div>

        {activeTab === 'college' ? <CollegeTab /> : <IndividualTab />}
      </section>

    </div>
  );
}

export default Index;
