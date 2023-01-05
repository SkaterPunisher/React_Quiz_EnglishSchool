import React from 'react';

const UlText = () => {
  return (
    <ul className='w-full md:w-[60%] px-4 py-8 bg-slate-50 rounded-3xl text-center md:ml-2'>
      <li className='font-montserrat text-[18px] sm:text-[20px] md:text-[21px] lg:text-[24px] text-[#1f1f1f] mb-2'>
        Тестирование - важная часть <br /> в эффективном обучении!
      </li>
      <li className='font-montserrat text-[18px] sm:text-[20px] md:text-[21px] lg:text-[24px] text-[#1f1f1f] mb-2'>
        Преподаватели English School <br /> разработали тестирование <br /> на
        основе авторской методики.
      </li>
      <li className='font-montserrat text-[18px] sm:text-[20px] md:text-[21px] lg:text-[24px] text-[#1f1f1f]'>
        Результаты тестирования помогут:
      </li>
      <li className='font-montserrat text-[18px] sm:text-[20px] md:text-[21px] lg:text-[24px] text-[#1f1f1f]'>
        - Узнать уровень владения языком
      </li>
      <li className='font-montserrat text-[18px] sm:text-[20px] md:text-[21px] lg:text-[24px] text-[#1f1f1f]'>
        - Подобрать правильную группу
      </li>
      <li className='font-montserrat text-[18px] sm:text-[20px] md:text-[21px] lg:text-[24px] text-[#1f1f1f]'>
        - Выбрать подходящий формат обучения <br /> (групповой, индивидуальный,{' '}
        <br /> очный или ONLINE)
      </li>
      <li className='font-montserrat text-[18px] sm:text-[20px] md:text-[21px] lg:text-[24px] text-[#1f1f1f]'>
        - Увидеть прогресс по окончанию курса
      </li>
    </ul>
  );
};

export default UlText;
