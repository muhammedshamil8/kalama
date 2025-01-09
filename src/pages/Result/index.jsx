import React, { useState } from 'react';
import Header from '@/components/ui/Header';

function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const programs = [
    'Program A',
    'Program B',
    'Program C',
    'Program D',
    'Program E',
  ];

  const filteredPrograms = programs.filter(program =>
    program.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-full p-4'>
      <Header title="Results" href="/" />
      <section className='max-w-[700px] mx-auto'>
      <div className='mt-10'>
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-800  shadow-sm"
        />
      </div>

      {/* Program List */}
      <div className='mt-10 w-full mx-auto'>
        <div className='flex flex-wrap gap-4 items-center justify-center w-full mx-auto'>
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program, index) => (
              <div
                key={index}
                className='bg-[#605F5F] px-4 py-2 text-white font-semibold  rounded-none shadow-md flex items-center justify-center '
              >
                {program}
              </div>
            ))
          ) : (
            <p className='text-gray-500'>No programs found.</p>
          )}
        </div>
      </div>
    </section>
    </div >
  );
}

export default Index;
