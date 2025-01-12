import React, { useEffect, useState } from 'react';
import Header from '@/components/ui/Header';
import { Star, pradhiba, BgRank } from '@/assets/elements';
import classNames from 'classnames';



function CollegeTab() {
  const colleges = [
    { rank: 1, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
    { rank: 2, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
    { rank: 3, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
    { rank: 4, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
    { rank: 5, name: 'EMEA College of Arts and Science, Kondotty', points: 100 },
  ];


  const BgRank = ({ color }) => (
    <svg width="60" height="68" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_178_535)">
        <mask id="mask0_178_535" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="47" height="48">
          <path d="M47 0H0V48H47V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_178_535)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.32508 24.1013C1.95468 24.582 0.167851 26.718 0.167851 29.28L0.16785 42.72C0.16785 45.636 2.48254 48 5.33786 48H18.4979C21.0654 48 23.1959 46.0884 23.5992 43.5828C24.0699 46.0037 26.1614 47.8286 28.67 47.8286H41.83C44.6852 47.8286 47 45.4646 47 42.5486V29.1086C47 26.4864 45.1282 24.3106 42.6751 23.8987C45.0453 23.4179 46.8322 21.282 46.8322 18.72V5.28C46.8322 2.36394 44.5175 7.14946e-07 41.6622 5.87482e-07L28.5022 0C25.9346 -1.1462e-07 23.8041 1.91151 23.4009 4.4171C22.9301 1.99627 20.8387 0.171427 18.33 0.171427H5.17C2.31469 0.171427 0 2.53536 0 5.45143V18.8914C0 21.5136 1.87169 23.6894 4.32508 24.1013Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_178_535">
          <rect width="47" height="48" fill="" />
        </clipPath>
      </defs>
    </svg>
  );

  function pickBorderColor(rank) {
    if (rank === 1) {
      return 'border-[#276692]'
    } else if (rank === 2) {
      return 'border-[#00A99D]'
    } else if (rank === 3) {
      return 'border-[#8DC63F]'
    } else {
      return 'border-[#000000]'
    }
  }
  function pickBgColor(rank) {
    if (rank === 1) {
      return 'bg-[#276692]'
    } else if (rank === 2) {
      return 'bg-[#00A99D]'
    } else if (rank === 3) {
      return 'bg-[#8DC63F]'
    } else {
      return 'bg-[#000000]'
    }
  }

  function pickColor(rank) {
    if (rank === 1) {
      return '#276692'
    } else if (rank === 2) {
      return '#00A99D'
    } else if (rank === 3) {
      return '#8DC63F'
    } else {
      return '#000000'
    }
  }

  return (
    <div className="p-4">
      {colleges.map((college) => {

        return (
          <div
            key={college.rank}
            className={classNames(`flex justify-between items-center p-4 mb-4 border border-b-[3px]  max-w-[400px] mx-auto ${pickBorderColor(college.rank)}`)}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-14 h-2 relative flex items-center justify-center font-bold text-white mr-4"
              >
                <span className="text-4xl z-10"> {college.rank}</span>

                <div className='-z-10 absolute'>
                  <BgRank color={pickColor(college.rank)} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <p className="font-semibold leading-4">{college.name}</p>
                <hr className='border-[1.5px] border-black ' />
                <div className='flex items-end justify-end'>
                  <span className={`flex items-center justify-center px-2 py-[1px]  text-white font-bold rounded-none border border-black 
                   ${pickBgColor(college.rank)}`}>
                    {college.points} Pts
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div >
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
          className="border-b-[4px] border-b-[#00A99D]  max-w-[400px] mx-auto mb-4"
        >
          <div className='border rounded-none border-[#000] flex items-center flex-col gap-2 relative  p-3   '>
            <img src={Star} alt="Star" className="absolute -top-2 right-3" />
            <img src={pradhiba} alt="Pradhiba" className="absolute bottom-0" />
            <h3 className="font-bold text-gray-800 text-center">{individual.name}</h3>
            <div className='flex flex-1 w-full justify-around'>
              <div className='h-24 w-20 bg-gray-300' />
              <div className='flex flex-col gap-2'>
                <div className="flex-1">

                  <p className=" font-semibold">{individual.participant}</p>
                  <p className="text-sm ">{individual.college}</p>
                </div>
                <hr className='border-[1.5px] border-black ' />
                <div className='flex items-end justify-end'>
                  <span className="flex items-center justify-center px-2 py-1 bg-[#00A99D] text-white font-bold rounded-none border border-black">
                    {individual.points} Pts
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

function Index() {
  const [activeTab, setActiveTab] = useState('college');
  const ApiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ApiUrl}/results/leaderboard`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="w-full">
      <Header title="Score Board" href="/" />
      <section className='w-full max-w-[700px] mx-auto mt-10'>

        <div className="flex justify-center ">
          <button
            className={`py-2 px-4 ${activeTab === 'college' ? 'bg-[#276692] border border-[#276692] text-white' : 'bg-white border border-black border-r-0'
              }`}
            onClick={() => setActiveTab('college')}
          >
            College
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'individual' ? 'bg-[#276692] border border-[#276692] text-white' : 'bg-white border border-black border-l-0'
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
