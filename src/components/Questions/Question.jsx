import React from 'react';

const Question = ({ currentQuestion, questionPreschoolers }) => {
  return (
    <div className='mb-6 lg:mr-10 flex flex-col justify-center'>
      <div className='flex mb-2 sm:mb-4 items-baseline justify-center 2xl:justify-start'>
        <h2 className='text-[30px] font-bold font-montserrat'>
          Вопрос {currentQuestion + 1}
        </h2>
        &ensp;
        <span className='text-[20px] font-bold font-montserrat'>
          / {questionPreschoolers.length}
        </span>
      </div>
      <div className='flex items-center 2xl:flex-row flex-col-reverse'>
        {questionPreschoolers[currentQuestion].img.length > 3 ? (
          <img
            className='quizImg m-4 w-[300px] h-[300px] '
            src={questionPreschoolers[currentQuestion].img}
            alt={questionPreschoolers[currentQuestion].alt}
          />
        ) : (
          ''
        )}
        <p className='font-montserrat text-[18px] p-4'>
          {questionPreschoolers[currentQuestion].questionText}
        </p>
      </div>
    </div>
  );
};

export default Question;
