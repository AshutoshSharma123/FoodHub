// import React from 'react';
// import MainRoutes from './routes/MainRoutes.jsx';
// import Navbar from './components/Navbar.jsx';

// const App = () => {
//   return (
//     <div
//       className="font-[font1] w-full min-h-screen text-black bg-cover bg-center p-5"
//       style={{ backgroundImage: "url('/images/wallpaper.jpg')" }}
//     >
//       <Navbar />
//       <MainRoutes />
//     </div>
//   );
// };

// export default App;


import MainRoutes from './routes/MainRoutes.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <div
      className="font-[font1] w-full min-h-screen text-black bg-cover bg-center p-5"
      style={{ backgroundImage: "url('FoodHub/images/wallpaper.jpg')" }}
    >
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
