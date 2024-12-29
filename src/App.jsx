import { useEffect, useState } from 'react';
import { Aikiam, Coming_Soon, Kalaama, Kaloolsavm, our_logo, Coming_Soon_lap, date } from './assets';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation once the component is mounted
    setTimeout(() => setIsLoaded(true), 100); // Slight delay for smoothness
  }, []);

  return (
    <>
      <div
        className={`h-screen flex items-center flex-col gap-20  select-none transition-opacity duration-[2000ms]  ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="mt-10 flex flex-col gap-5">
          <img src={Aikiam} alt="Aikiam" className='h-6 md:h-10' />
          <div className="flex gap-2 flex-col">
            <img src={Kaloolsavm} alt="Kaloolsavm" className='h-16 md:h-[60px]' />
            <img src={date} alt="date" className='h-[14px] md:h-[18px]' />
          </div>
        </div>

        <div>
          <img src={Kalaama} alt="Kalaama" className='h-[300px] md:h-[380px]' />
        </div>

        <div>
          <img src={Coming_Soon} alt="Coming Soon" className='md:hidden' />
          <img src={Coming_Soon_lap} alt="Coming Soon Lap" className='hidden md:block' />
        </div>

        <div className="mb-2 md:mb-5 flex flex-1 flex-grow items-end">
          <img src={our_logo} alt="Our Logo" className='h-10 md:h-14' />
        </div>
      </div>

      {/* Blur color shadows */}
      <div className="fixed w-full flex min-h-screen flex-col justify-between top-0 bottom-0 overflow-clip">
        <div className="relative">
          <div
            className={`rounded-full bg-[#8DC63F] w-28 h-24 top-36 md:w-32 md:h-32 blur-[75px] md:blur-[60px] absolute -left-10 md:left-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`rounded-full bg-[#2E769F] w-28 h-24 md:w-32 md:h-32 blur-[75px] md:blur-[60px] absolute -right-10 md:-top-[250px] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`rounded-full bg-[#F99D1C] w-28 h-24 md:w-32 md:h-32 blur-[75px] md:blur-[60px] absolute -bottom-20 md:left-6 md:-bottom-[350px] -left-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </div>
        <div className="relative">
          <div
            className={`rounded-full bg-[#20BBAD] w-28 h-24 md:w-32 md:h-32 blur-[75px] md:blur-[60px] absolute bottom-0 -right-10 md:right-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </div>
      </div>
    </>
  );
}

export default App;
