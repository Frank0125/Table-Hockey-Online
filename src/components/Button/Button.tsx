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
                className={`${size === 'small' ? styles.buttonSmall : styles.buttonLarge}`}>
                <p className = {`${size === 'small' ? styles.buttonTextSmall : styles.buttonTextLarge}`}>{text}</p>
            </div>
        </a>
    )
}