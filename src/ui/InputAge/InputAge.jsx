import React from 'react'

const InputAge = ({
    className,
    type,
    name,
    placeholder,
    reff,
    onChange,
    ageError,
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
            ${ageError.length == 0 ? ' hidden ' : ' '}
            ${ageError.length == 1 || ageError.length == 2 ? ' text-[red] ' : ' hidden '}`}
        >
          Введите корректный возраст / класс
        </span>
      </>
    );
  };

export default InputAge