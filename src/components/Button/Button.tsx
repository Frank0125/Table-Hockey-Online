import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    text: string
    onClick: () => void;
    size: 'small' | 'large';
}

export const Button = ({ text, onClick, size }: ButtonProps) => {
    return (
        <a onClick={onClick}>
            <div  
                className={`${styles.buttonContainer} ${size === 'small' ? styles.buttonSmall : styles.buttonLarge}`}>
                <p className = {styles.buttonText}>{text}</p>
            </div>
        </a>
    )
}