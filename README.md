# HopeNest: Crowdfunding with Compassion🌍

HopeNest is a dynamic crowdfunding platform designed to help individuals and organizations raise funds for various causes. From personal needs to creative projects and startups, HopeNest empowers users to connect with contributors and bring their dreams to life. With a sleek design, seamless user experience, and powerful features, HopeNest offers a platform where hope truly finds a nest.

## 🚀 Live Site URL

🔗 [Visit HopeNest](https://hopenest-7f670.web.app/)  

## ✨ Key Features

- **Responsive Design**: Fully responsive for mobile, tablet, and desktop devices.
- **Authentication**: Secure email/password-based login and registration with Google login integration.
- **Protected Routes**: Private routes for user-specific functionalities like adding and managing campaigns and donations.
- **Campaign Management**: Add, view, update, and delete campaigns with features like sorting and filtering.
- **Dark/Light Mode**: A toggle for switching between dark and light themes.
- **Real-Time Data**: Display running campaigns with deadlines and details fetched from a live database.
- **Interactive UI**: Smooth animations, tooltips, and reveal effects for an engaging user experience.

## 📂 Project Structure

### Pages:
- **Home Page**: Showcases running campaigns, a banner slider, and additional sections for enhanced user engagement.
- **Campaigns**: Displays all campaigns with sorting functionality and detailed views for each campaign.
- **Add Campaign**: A protected form to add new campaigns with essential details.
- **My Campaigns**: User-specific campaigns with options to update or delete.
- **My Donations**: Displays all campaigns a user has donated to, presented in card format.
- **404 Page**: Custom "Not Found" page for invalid routes.


## 🖼️ Screenshots

### Home Page:
<img src="https://i.ibb.co.com/chQgMMj/hopenest-1.jpg" alt="Home Page Screenshot" width="100%" />

### My Campaigns Page:
<img src="https://i.ibb.co.com/8DkCQ6L/hopenest-2.jpg" alt="Campaigns Page Screenshot" width="100%" />



## 🛠️ Technologies Used

### Dependencies:
- **Frontend Framework**: React (v18.3.1)
- **State Management**: React Query (`@tanstack/react-query`)
- **Routing**: React Router DOM (v6.28.0)
- **Styling**: Tailwind CSS (v3.4.16) with DaisyUI (v4.12.14)
- **Animations**: React Awesome Reveal, Swiper, and Lottie React
- **Tooltips**: React Tooltip
- **Alerts**: SweetAlert2
- **HTTP Client**: Axios
- **Data Storage**: Firebase and LocalForage
- **Sorting**: Match Sorter, Sort-By

### Dev Dependencies:
- **Development Server**: Vite (v6.0.1)
- **Linting**: ESLint, ESLint Plugin React
- **TypeScript Support**: Types for React and React DOM
- **CSS Processor**: PostCSS, Autoprefixer

## 🖥️ Installation Guide

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nabilabintaakter/HopeNest-client.git
1. **Navigate to the project directory:**
   ```bash
   cd HopeNest-client
1. **Install dependencies:**
   ```bash
   npm install
1. **Run the development server:**
   ```bash
   npm run dev

### Live API

The backend API for the HopeNest project is hosted and can be accessed live:

🔗 [Check Backend repository](https://github.com/Nabilabintaakter/B10A10-HopeNest-server)

🔗 [Live API](https://b10-a10-hope-nest-server.vercel.app/)

You can use the live API endpoints directly to interact with the data (e.g., fetch campaigns, donate to campaigns, etc.).

Make sure to configure the frontend to connect with the live backend for full functionality.
