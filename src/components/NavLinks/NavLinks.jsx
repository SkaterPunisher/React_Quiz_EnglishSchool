import React from 'react';
import { useLocation } from 'react-router-dom';
import UlText from './UlText.jsx';
import Links from './Links.jsx';
import LinksHead from './LinksHead.jsx';
import BackToEnglishSchool from '../../ui/BackToEnglishSchool/BackToEnglishSchool.jsx';

const NavLinks = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col justify-center'>
      <BackToEnglishSchool />
      <div className='bg-white rounded-3xl px-4 md:px-8 py-6 items-center w-fit boxShadow mx-2 mb-10 md:mb-0'>
        <div className='text-center'>
          <h1 className='text-[30px] md:text-[30px] mb-4 lg:text-[40px] font-montserrat  text-[#1f1f1f]'>
            ONLINE тестирование по Английскому языку
          </h1>
        </div>
        <div className='md:flex-row flex flex-col'>
          <div className='w-full md:w-[40%] p-4'>
            <LinksHead />
            <Links />
          </div>
          <UlText />
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
