import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let userType = localStorage.getItem("userType");
  let isLoggedIn = false;
  if (userType==="1"  || userType === "2") {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  } // determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
