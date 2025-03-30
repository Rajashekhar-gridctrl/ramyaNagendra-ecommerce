import { FC, PropsWithChildren } from 'react';
import SlickSlider, { Settings, CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import leftArrow from '../../../../assets/svg/left-arrow.svg';
import rightArrow from '../../../../assets/svg/right-arrow.svg';
import styles from './slider.module.scss';
import clsx from 'clsx';

export interface ISlider extends PropsWithChildren {
  settings?: Settings;
  leftArrowStyle?: React.CSSProperties;
  rightArrowStyle?: React.CSSProperties;
}

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(className, styles.sliderBtn)}
      style={style}
      onClick={onClick}
    >
      <img src={rightArrow} loading="lazy" style={{ margin: '5px 5px' }} />
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(className, styles.sliderBtn)}
      style={style}
      onClick={onClick}
    >
      <img src={leftArrow} loading="lazy" style={{ margin: '5px 0 0 3px' }} />
    </div>
  );
}

const Slider: FC<ISlider> = ({
  children,
  settings = {},
  leftArrowStyle = {},
  rightArrowStyle = {},
}) => {
  const customizedSettings = {
    nextArrow: <SampleNextArrow style={rightArrowStyle} />,
    prevArrow: <SamplePrevArrow style={leftArrowStyle} />,
    ...settings,
  };
  return <SlickSlider {...customizedSettings}>{children}</SlickSlider>;
};

export default Slider;
