import React, { useState, useEffect } from 'react';
import ButtonChoice from '../../ui/ButtonChoice/ButtonChoice';
import questionPreschoolers from '../../quizQuestions/quizPreschoolers';
import questionSchool1_4 from '../../quizQuestions/quizSchool1_4';
import questionSchool5_8 from '../../quizQuestions/quizSchool5_8';
import questionSchool9_11 from '../../quizQuestions/quizSchool9_11';
import questionAdult from '../../quizQuestions/quizAdult';
import Question from '../Questions/Question';
import { v1 as uuidv1 } from 'uuid';
import FinishPage from '../FinishPage/FinishPage';
import { useDispatch } from 'react-redux';
import {
  getUser,
  getAnswers,
  removeAnswers,
} from '../../features/registration';
import styles from '../../style';
import ReturnBack from '../../ui/ReturnBack/ReturnBack';

const Quiz = () => {
  let link = JSON.parse(localStorage.getItem('Link'));
  let questions;
  if (link == '/preschoolers') {
    questions = questionPreschoolers;
  }
  if (link == '/school1_4') {
    questions = questionSchool1_4;
  }
  if (link == '/school5_8') {
    questions = questionSchool5_8;
  }
  if (link == '/school9_11') {
    questions = questionSchool9_11;
  }
  if (link == '/adult') {
    questions = questionAdult;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(removeAnswers());
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (item) => {
    if (item.isCorrect) {
      setScore(score + 1);
    }
    let answer = {
      Вопрос: questions[currentQuestion].questionText,
      Изображение: questions[currentQuestion].alt,
      Ответ: item,
    };
    dispatch(getAnswers(answer));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleFinishTest = () => {
    setShowScore(true);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] flex justify-center bg-white p-6 lg:p-16 rounded-3xl boxShadow mt-10 md:mt-0 sm:mx-6 md:mx-10 lg:mx-20'>
        {showScore ? (
          <FinishPage score={score} questions={questions} />
        ) : (
          <div className='lg:flex-row flex flex-col'>
            <Question
              currentQuestion={currentQuestion}
              questionPreschoolers={questions}
            />
            <div className='flex flex-col justify-center border-t-2 lg:border-l-2 lg:border-t-0 pt-6 lg:pt-0 md:pl-6 '>
              {questions[currentQuestion].answerOptions.map((item) => (
                <ButtonChoice
                  className={styles.buttonChoice}
                  key={uuidv1()}
                  onClick={() => handleAnswerOption(item)}
                  text={item.answerText}
                />
              ))}
              <ButtonChoice
                className={styles.buttonFinishTest}
                key={uuidv1()}
                onClick={handleFinishTest}
                text={'Устал...Закончить тест.'}
              />
            </div>
          </div>
        )}
      </div>
      <ReturnBack />
    </div>
  );
};

export default Quiz;
