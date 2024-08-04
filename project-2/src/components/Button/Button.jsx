import React from 'react'
import {MdMessage}  from 'react-icons/md';
import styles from './Button.module.css';
function Button({isOutline,icon,text}) {
    // const{text,icon,isOutline}=props;
  return (
    <button className={isOutline?styles.outline_btn:styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button
