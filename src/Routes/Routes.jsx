import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import Details from "../Pages/Details/Details";


const myCreatedRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/jobs",
                element:<Jobs></Jobs>,
            },
            {
                path:"/job/:id",
                element:<Details></Details>
            },
        ]
    }
]);
export default myCreatedRoutes;