import { createBrowserRouter } from "react-router-dom";
import MainHome from "../components/MainHome";
import Home from "../components/Home";
import Brands from "../components/Brands";
import MyProfile from "../components/MyProfile";
import Reviews from "../components/Reviews";
import AboutDev from "../components/AboutDev";
import Login from "../Pages/login";
import Registration from "../Pages/Registration";
import BrandDetails from "../components/BrandDetails";
import NotFound from "../components/NotFound";
import PrivateRoute from "./PrivateRoute";
import ChangeProfileData from "../components/ChangeProfileData";
import ForgetPassword from "../components/ForgetPassword";



const router=createBrowserRouter([
    {
        path:"/",
        element:<MainHome></MainHome>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch("/data.json")
            },
            {
                path:"/brands",
                element:<Brands></Brands>,
                loader:()=> fetch("/data.json")
            },
            {
                path:"/my-profile",
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
                
            },
            {
                path:"/change-profile-data",
                element:<PrivateRoute><ChangeProfileData></ChangeProfileData></PrivateRoute>
            },
            
            {
                path:"/reviews",
                element:<Reviews></Reviews>
            },
            {
                path:"/about-dev",
                element:<AboutDev></AboutDev>
            },
            {
                path:"/brand/:id",
                element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
                loader:async({params})=>{
                    const res=await fetch("/data.json")
                    const data=await res.json()
                    const brandDetails=data.find(brand=> brand._id==params.id)
                    return brandDetails
                }   
            }
        ]
    },
    {
        path:"/auth/login",
        element:<Login></Login>
    },
    {
        path:"/forget-password",
        element:<ForgetPassword></ForgetPassword>
    },
    {
        path:"/reviews",
        element:<Reviews></Reviews>
    },
    {
        path:"/auth/registration",
        element:<Registration></Registration>
    }

    
])


export default router
