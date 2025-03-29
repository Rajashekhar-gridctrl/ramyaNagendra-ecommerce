import BootstrapButton, { ButtonProps } from 'react-bootstrap/Button';
import clsx from 'clsx';
import styles from './button.module.scss';

export interface IButtonProps extends ButtonProps {
    label?: string;
    isFullWidth?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
    label = '',
    variant = 'primary',
    isFullWidth = false,
    children,
    ...props
}) => {
    const buttonClass = clsx(
        styles[`${variant}__btn`], // Style for the variant
        { [styles.full__width]: isFullWidth } // Apply full width if true
    );

    return (
        <BootstrapButton className={buttonClass} {...props}>
            {label} {children}
        </BootstrapButton>
    );
};