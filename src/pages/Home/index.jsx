import React from 'react';
import { Logo_aikiam, Logo_kalama, Logo_kaloolsavm } from '@/assets/logos';
import HomeBtn from '@/components/ui/HomeBtn';
import { useNavigate } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full gap-10 justify-around py-10 mx-auto">
      {/* Logo Aikiam */}
      <div className="flex justify-center">
        <img src={Logo_aikiam} alt="Aikiam Logo" className="" />
      </div>

      {/* Logo Kaloolsavm */}
      <div className="flex justify-center">
        <img src={Logo_kaloolsavm} alt="Kaloolsavm Logo" className="" />
      </div>

      {/* Logo Kalama */}
      <div className="flex flex-1 flex-grow justify-center items-center">
        <img src={Logo_kalama} alt="Kalama Logo" className="" />
      </div>

      <div className="flex flex-col justify-center gap-4 z-30 relative">
        <div className='max-w-[340px] mx-auto'>
          <HomeBtn label="Score Board" className="w-full" onClick={() => navigate('scoreboard')} />
        </div>
        <div className="flex justify-center  gap-4 w-full">
          <HomeBtn label="Result" onClick={() => navigate('Result')} />
          <HomeBtn label="Schedule" onClick={() => navigate('Schedule')} />
        </div>
      </div>
    </div>
  );
}

export default Index;
