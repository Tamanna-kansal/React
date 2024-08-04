import React from 'react'
import styles from './Contact.module.css';
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
function ContactForm() {
  return (
   <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontsize="24px"/>}Button/>
      <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />}Button/>
      </div>
      <Button isOutline={true} text="Email Form" icon={<HiMail fontSize="24px"/>}></Button>
    </div>
    <div className={styles.contact_image}></div>
    </section>
  )
}

export default ContactForm;
