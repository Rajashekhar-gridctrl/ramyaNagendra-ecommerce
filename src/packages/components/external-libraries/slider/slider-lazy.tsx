import { lazy, Suspense } from 'react';
const CustomSlider = lazy(() => import('./slider'));
type ISlider = import('./slider').ISlider;

export const Slider: React.FC<ISlider> = ({ children, settings }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <CustomSlider settings={settings}>{children}</CustomSlider>
  </Suspense>
);
