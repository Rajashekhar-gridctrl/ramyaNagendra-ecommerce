import { FC } from 'react';
import clsx from 'clsx';
import { Button, IButtonProps } from '../../button/button';
import styles from './button.module.scss';


export const ProductCardBtn: FC<IButtonProps> = (props) => {
    return (
        <div className={clsx(styles.cardCtaWrapper, 'cardCtaWrapper')}>
            <Button {...props} />
        </div>
    )
}