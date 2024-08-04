import React from 'react'
import styles from './ContactHeader.module.css'
const ContactHeader=()=>{
    return(
        <div className={`container ${styles.contact_section}`}>
        <h1>CONTACT US</h1>
        <p>LETS'S CONNECT :WE'RE HERE TO HELP AND WE"D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION,COMMENT,OR JUST WANT TO CHAT,YOU CAN REACH OUT TO US THROUGH THE CONTACT FROM OF THIS OAGE,OR BY PHONE,EMAIL , OR SOCIAL MEDIA.{" "}
        </p>
        </div>

    )
}
export default ContactHeader