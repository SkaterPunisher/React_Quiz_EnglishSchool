import React from 'react';

const InputFIO_Parents = ({
  className,
  type,
  name,
  placeholder,
  reff,
  onChange,
  FIO_parentError,
}) => {
  return (
    <>
      <input
        onChange={onChange}
        ref={reff}
        className={className}
        type={type}
        required
        name={name}
        placeholder={placeholder}
      />
      <span
        className={`mt-2 text-[11px] text-[#301411] leading-[13px] 
          ${FIO_parentError.length == 0 ? ' hidden ' : ' '}
          ${FIO_parentError.length > 0 && FIO_parentError.length <= 10 ? ' text-[red] ' : ' hidden '}`}
      >
        Введите корректный ФИО родителя
      </span>
    </>
  );
};

export default InputFIO_Parents;
