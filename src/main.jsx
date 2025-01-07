import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
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
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Details from './components/Details/Details.jsx';
import UpdateCampaign from './components/UpdateCampaign/UpdateCampaign.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AboutUs from './components/AboutUs/AboutUs.jsx';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/campaigns')
      },
      {
        path: "/campaigns",
        element: <AllCampaigns></AllCampaigns>,
      },
      {
        path: "/addCampaign",
        element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>,
      },
      {
        path: "/myCampaign",
        element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
      },
      {
        path: "/myDonations",
        element: <PrivateRoute><MyDonations></MyDonations>,</PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },    
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },    
      {
        path: "/campaigns/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`)
      },
      {
        path: "/updateCampaign/:id",
        element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
