import React from 'react'

const InputFIO_Children = ({
    className,
    type,
    name,
    placeholder,
    reff,
    onChange,
    FIO_childrenError,
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
            ${FIO_childrenError.length == 0 ? ' hidden ' : ' '}
            ${FIO_childrenError.length > 0 && FIO_childrenError.length <= 10 ? ' text-[red] ' : ' hidden '}`}
        >
          Введите корректный ФИО ребенка
        </span>
      </>
    );
  };

export default InputFIO_Children