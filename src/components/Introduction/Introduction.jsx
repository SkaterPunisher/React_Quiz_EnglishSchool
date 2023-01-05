import React, { useState, useRef, useEffect } from 'react';
import styles from '../../style';
import Button from '../../ui/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputFIO_Parents from '../../ui/InputFIO_Parents/InputFIO_Parents';
import InputFIO_Children from '../../ui/InputFIO_Children/InputFIO_Children';
import InputAge from '../../ui/InputAge/InputAge';
import InputPhone from '../../ui/InputPhone/InputPhone';
import {
  FIO_Parent,
  FIO_Children,
  Age,
  phoneNumber,
  getLink,
} from '../../features/registration';
import ReturnBack from '../../ui/ReturnBack/ReturnBack';

const Introduction = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const { link } = location.state;

  useEffect(() => {
    dispatch(getLink(link));
    link == '/adult' ? setCheckFIO_children(true) : '';
  }, []);

  const [checkPhone, setCheckPhone] = useState(false);
  const [checkAge, setCheckAge] = useState(false);
  const [checkFIO_children, setCheckFIO_children] = useState(false);
  const [checkFIO_parent, setCheckFIO_parent] = useState(false);

  const FIO_parent = useRef('');
  const FIO_children = useRef('');
  const age = useRef('');
  const phone = useRef('');

  const [FIO_parentError, setFIO_parentError] = useState('');
  const [FIO_childrenError, setFIO_childrenError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const onChangeFIO_parent = () => {
    let inputFIO_parent = FIO_parent.current;
    setFIO_parentError(inputFIO_parent.value);
    dispatch(FIO_Parent(inputFIO_parent.value));
    inputFIO_parent.value.length > 10 ? setCheckFIO_parent(true) : '';
  };
  const onChangeFIO_children = () => {
    let inputFIO_children = FIO_children.current;
    setFIO_childrenError(inputFIO_children.value);
    dispatch(FIO_Children(inputFIO_children.value));
    inputFIO_children.value.length > 10 ? setCheckFIO_children(true) : '';
  };
  const onChangeAge = () => {
    let inputAge = age.current;
    setAgeError(inputAge.value);
    dispatch(Age(inputAge.value));
    inputAge.value.length > 2 ? setCheckAge(true) : '';
  };
  const onChangePhone = () => {
    let inputPhone = phone.current;
    setPhoneError(inputPhone.value);
    dispatch(phoneNumber(inputPhone.value));
    inputPhone.value.length > 10 ? setCheckPhone(true) : '';
  };
  const handleClick = (e) => {
    e.preventDefault();
    FIO_parentError.length == 0 ? setFIO_parentError(' ') : '';
    FIO_childrenError.length == 0 ? setFIO_childrenError(' ') : '';
    ageError.length == 0 ? setAgeError(' ') : '';
    phoneError.length == 0 ? setPhoneError(' ') : '';
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[95vw] sm:w-full bg-white p-6 md:p-10 mt-10 md:mt-0 rounded-3xl min-w-[300px] md:min-w-[320px] boxShadow'>
        <h1 className='text-center mb-4 font-montserrat text-[20px] text-[#1f1f1f]'>
          Давайте знакомиться &#128519;
        </h1>
        <form className='flex flex-col min-w-[265px] md:min-w-[300px]'>
          {link == '/adult' ? (
            <InputFIO_Parents
              onChange={onChangeFIO_parent}
              reff={FIO_parent}
              FIO_parentError={FIO_parentError}
              className={`${styles.input}`}
              type={'text'}
              name={'ФИО'}
              placeholder={'ФИО'}
            />
          ) : (
            <InputFIO_Parents
              onChange={onChangeFIO_parent}
              reff={FIO_parent}
              FIO_parentError={FIO_parentError}
              className={`${styles.input}`}
              type={'text'}
              name={'ФИО родителя'}
              placeholder={'ФИО родителя'}
            />
          )}

          {link == '/adult' ? (
            ''
          ) : (
            <InputFIO_Children
              onChange={onChangeFIO_children}
              reff={FIO_children}
              FIO_childrenError={FIO_childrenError}
              className={`${styles.input}`}
              type={'text'}
              name={'ФИО ребенка'}
              placeholder={'ФИО ребенка'}
            />
          )}
          {link == '/adult' ? (
            <InputAge
              onChange={onChangeAge}
              reff={age}
              ageError={ageError}
              className={`${styles.input}`}
              type={'text'}
              name={'Возраст обучающего'}
              placeholder={'Укажите возраст'}
            />
          ) : (
            <InputAge
              onChange={onChangeAge}
              reff={age}
              ageError={ageError}
              className={`${styles.input}`}
              type={'text'}
              name={'Возраст обучающего'}
              placeholder={'Возраст обучающего или класс'}
            />
          )}

          <InputPhone
            onChange={onChangePhone}
            reff={phone}
            phoneError={phoneError}
            className={`${styles.input}`}
            type={'text'}
            name={'Сотовый'}
            placeholder={'Номер телефона'}
          />

          {/* {checkPhone && checkAge && checkFIO_children && checkFIO_parent ? ( */}
          {checkPhone && checkAge && checkFIO_children && checkFIO_parent ? (
            <div className='w-[100%] text-center'>
              <Link to='/quiz' state={{ link: link }}>
                <Button className={styles.buttonEnabled} text={'Продолжить'} />
              </Link>
            </div>
          ) : (
            <Button
              onClick={handleClick}
              className={styles.buttonDisable}
              text={'Продолжить'}
            />
          )}
        </form>
      </div>
      <ReturnBack />
    </div>
  );
};

export default Introduction;
