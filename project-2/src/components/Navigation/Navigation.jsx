import styles from "./Navigation.module.css";
import React from "react";
function Navigation(){
    return (
        <nav className={`${styles.navigation} container`}> 
            <div className="logo">
             <img src="https://cdn.vectorstock.com/i/1000x1000/45/26/code-house-logo-icon-design-vector-22734526.webp" alt=""/>   
            </div>
                <ul>
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
        </nav>
    )
}

export default Navigation