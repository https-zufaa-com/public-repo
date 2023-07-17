import App from "../../App";
import Home from "../Home/Home";

const { FaHome } = require("react-icons/fa");
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    }
])