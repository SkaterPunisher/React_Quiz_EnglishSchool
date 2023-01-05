import React from 'react'

const ButtonChoice = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>{text}</button>
  )
}

export default ButtonChoice