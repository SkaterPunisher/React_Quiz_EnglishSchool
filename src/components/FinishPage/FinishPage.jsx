import React from 'react';
import { useSelector } from 'react-redux';
import ButtonChoice from '../../ui/ButtonChoice/ButtonChoice';
import styles from '../../style';

const FinishPage = ({ score, questions }) => {
  const TOKEN = '5649030951:AAG-FKF_jtI0DuXoA7WL_ITJ1znXTm5PIpk';
  const CHAT_ID = '550809095';
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const axios = require('axios').default;

  const result = useSelector((state) => state.registration.answers);
  let FIO_Parent = JSON.parse(localStorage.getItem('Родитель'));
  let FIO_Children = JSON.parse(localStorage.getItem('Ребенок'));
  let Age = JSON.parse(localStorage.getItem('Возраст / Класс'));
  let phoneNumber = JSON.parse(localStorage.getItem('Сотовый'));
  let user = {
    Родитель: FIO_Parent,
    Ребенок: FIO_Children,
    'Возраст / Класс': Age,
    Сотовый: phoneNumber,
  };

  let stringifyResult = JSON.stringify(result);
  let stringifyUser = JSON.stringify(user);

  let message = `<b>Онлайн тест с English School</b> \n \n`;
  message += `<b>Общий результат :</b> Правильных ответов ${score} из ${questions.length} \n \n`;
  message += `<b>Ответы :</b> ${stringifyResult} \n \n`;
  message += `<b>Пользователь :</b> ${stringifyUser} \n \n`;

  const sendResult = () => {
    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then((res) => {
      })
      .catch((err) => {
        alert('Произошла ошибка. Попробуйте позже.');
        console.log(err);
      });
      alert(
        'Результат отправлен! Мы свяжемся с Вами в ближайшие 15 минут!'
      );
    document.location.href = 'https://enbg.ru';
  };

  return (
    <div className='min-h-[232px] flex items-center justify-center flex-col'>
      {score == questions.length ? <span className='text-[60px]'>&#129395;</span> : ''}
      {score < questions.length / 2 && score !== 0 ? <span className='text-[60px]'>&#128578;</span> : ''}
      {score > questions.length / 2 && score !== questions.length ? <span className='text-[60px]'>&#128579;</span> : ''}
      {score == questions.length / 2 ? <span className='text-[60px]'>&#128524;</span> : ''}
      {score == 0 ? <span className='text-[60px]'>&#128530;</span> : ''}
      <h1 className='mb-6 font-montserrat text-[#1f1f1f]'>
        Правильных ответов {score} из {questions.length}
      </h1>
      <ButtonChoice onClick={sendResult} text={'Отправить результат'} className={styles.buttonChoice}/>
    </div>
  );
};

export default FinishPage;
