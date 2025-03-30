import clsx from 'clsx';
import styles from './actions.module.scss';
import { PropsWithChildren } from 'react';

export const ProductCardAction: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <ul className={clsx(styles.actions, 'actions')}>{children}</ul>;
};
