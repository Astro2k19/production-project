import cls from './Button.module.scss';
import {classNames} from "shared/lib";
import {ButtonHTMLAttributes, FC, HTMLAttributes} from "react";

export enum ButtonVariants {
    CLEAR = 'clear',
    BORDERED = 'bordered'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariants
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        ...othersProps
    } = props;

    return (
        <button {...othersProps}
            className={classNames([cls.button, cls[variant]])} >
            {children}
        </button>
    )
}