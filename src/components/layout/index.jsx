import React from 'react';
import { Avatar_bl, Avatar_br } from '@/assets/elements';
import { Logo_p_logo } from '@/assets/logos';
import { Outlet, useOutletContext } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Content */}
      <main className="flex w-full mx-auto flex-grow h-[calc(100vh-200px)]">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="flex justify-center items-center w-full">
        <img src={Avatar_bl} alt="Bottom Left Avatar" className="absolute bottom-0 left-0" />
        <img src={Logo_p_logo} alt="Logo" className=" pb-14 max-w-[100px] " />
        <img src={Avatar_br} alt="Bottom Right Avatar" className="absolute bottom-0 right-0" />
      </footer>
    </div>
  );
};

export default Layout;
