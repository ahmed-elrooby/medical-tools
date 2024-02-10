import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/@fortawesome/fontawesome-free/js/all.min.js" 
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Stethoscope from './Components/Stethoscope/Stethoscope.jsx';
import Thermometer from './Components/Thermometer/Thermometer.jsx';
import Otoscope from './Components/Otoscope/Otoscope.jsx';
import Scrup from './Components/Scrup/Scrup.jsx';
import Contact from './Components/Contact/Contact.jsx';
import SteDetails from './Components/ToolDetails/SteDetails/SteDetails.jsx';
import ToolDetails from './Components/ToolDetails/HomeDetails/ToolDetails.jsx';
import ThermDetails from './Components/ToolDetails/Therm/ThermDetails.jsx';
import OtoscopeDetails from './Components/ToolDetails/OtoscopeDetail/OtoscopeDetails.jsx';
import ScrupDetails from './Components/ToolDetails/Scrup/ScrupDetails.jsx';
  let route = createBrowserRouter([
    {path:"",element:<App/>,children:[
      {path:"/",element:<Home/>},
      {path:"/home",element:<Home/>},
      {path:"/Stethoscope",element:<Stethoscope/>},      
      {path:"/thermometer",element:<Thermometer/>},
      {path: "tooldetails/:id", element: <ToolDetails />},
      {path:"stedetails/:id",element:<SteDetails />},
      {path:"termdetails/:id",element:<ThermDetails />},
      {path:"otoscope/:id",element:<OtoscopeDetails />},
      {path:"scrupdetails/:id",element:<ScrupDetails />},
      {path:"Otoscope",element:<Otoscope/>},
      {path:"scrup",element:<Scrup/>},
      {path:"contact",element:<Contact/>}
    ]},
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
