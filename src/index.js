import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import {Home} from './App';
import {AboutMe}  from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import ContactMe from './ContactMe';


const router = createHashRouter([{
  path: '/Timeline',
  element: <Home/>

},

{

  path: '/AboutMe',
  element: <AboutMe/>,
},

{
  path: '/',
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
