import React from 'react';
import { Link } from 'react-router-dom';

const ReturnBack = () => {
  return (
    <Link to={'/'}>
      {/* <Link to={'/quiz/index.html'}> */}
      <h1 className='text-center mt-4 font-montserrat text-[20px] text-[#1f1f1f] hover:underline underline-offset-2'>
        &#128281;&ensp;Вернуться назад
      </h1>
    </Link>
  );
};

export default ReturnBack;
