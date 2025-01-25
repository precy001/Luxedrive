import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Signin from "./routes/Signin.jsx";
import Signup from "./routes/Signup.jsx";
import TermsAndConditions from "./routes/TermsAndConditions.jsx";
import Home from "./routes/Home.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/terms", element: <TermsAndConditions /> },
  { path: "/home", element: <Home /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="587642184973-ntrah7s7hblpr9iup6add6fn9d4me8u5.apps.googleusercontent.com">
    
        <RouterProvider router={router} />
  
    </GoogleOAuthProvider>
  </StrictMode>
);
