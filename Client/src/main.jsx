import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Layout from "./Components/Layout.jsx";
import Order from "./Components/PlaceOrder/Order.jsx";
import GetAllOrders from "./Components/GetAllOrders/GetAllOrders.jsx";
import Login from "./Components/Login/Login.jsx";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Route/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       {
//         path:"github",
//         element:<Github/>,
//         loader : {gitinfo}
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="placeOrder" element={<Order />} />
      {/* <Route path="/login" element={<Login />}> */}
        <Route path="getallorders" element={<GetAllOrders />} />
      {/* </Route> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
