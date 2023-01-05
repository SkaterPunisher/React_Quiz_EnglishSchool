import React from 'react'

const InputPhone = ({
    className,
    type,
    name,
    placeholder,
    reff,
    onChange,
    phoneError,
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
            ${phoneError.length == 0 ? ' hidden ' : ' '}
            ${phoneError.length >= 1 && phoneError.length <= 10 ? ' text-[red] ' : ' hidden '}`}
        >
          Введите корректный возраст / класс
        </span>
      </>
    );
  };

export default InputPhone