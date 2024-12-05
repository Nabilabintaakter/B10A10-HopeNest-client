import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/layout/MainLayout.jsx';
import AllCampaigns from './components/AllCampaigns/AllCampaigns.jsx';
import AddCampaign from './components/AddCampaign/AddCampaign.jsx';
import MyCampaign from './components/MyCampaign/MyCampaign.jsx';
import MyDonations from './components/MyDonations/MyDonations.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/campaigns",
        element: <AllCampaigns></AllCampaigns>,
      },
      {
        path: "/addCampaign",
        element: <AddCampaign></AddCampaign>,
      },
      {
        path: "/myCampaign",
        element: <MyCampaign></MyCampaign>,
      },
      {
        path: "/myDonations",
        element: <MyDonations></MyDonations>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
