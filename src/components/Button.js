import React from 'react'

const Button = ({ text, color, bg, extraStyles, onClick }) => {
  return (
	  <button className={`${bg}  rounded p-1.5 px-2 ${color} ${extraStyles}`} onClick={onClick}>{text}</button>
  )
}

export default Button
