import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import './index.css';
import Routes from './config/routes';
import {
  RouterProvider,
} from "react-router";
import { Header } from './packages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={Routes} />
  </StrictMode>
);


