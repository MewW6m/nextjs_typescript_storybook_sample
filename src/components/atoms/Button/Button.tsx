import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
    /** className */
    classNameString?: string;
    /** Index contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({label, classNameString, ...props}) => {
    return (
        <a
            className={"uk-button uk-button-default " + styles.ukButtonKai + " " + classNameString}
            {...props}
        >
            {label}
        </a>
    );
};
