import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from './App';
import {AboutMe}  from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import ContactMe from './ContactMe';

const router = createBrowserRouter([{
  path: '/',
  element: <Home/>

},

{

  path: '/AboutMe',
  element: <AboutMe/>,
},

{
  path: '/Timeline',
  element: <Timeline/>,



},
{
  path: '/Projects',
  element: <Projects/>,



},

{
  path: '/Contact-Me',
  element: <ContactMe/>,

}

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider
    router={router}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
