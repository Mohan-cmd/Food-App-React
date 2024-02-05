import React from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import Grocery from "./components/Grocery";
import { lazy,Suspense } from "react";

const Grocery= lazy(()=> import("./components/Grocery"))

const AppLayout=()=>{
    return <div className="App">
        <Header/>
        
            <Outlet/>
    </div>
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>, 
        children:[
            {
              path:"/",
              element:<Body/>
            },
          {
           path:"/about",
           element:<About/>
          },
          {
           path:"/contact",
           element:<Contact/>
          },
          {
            path:"/restaurants/:restaurantId",
            element:<Restaurants/>
          },
          {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
          }
        ],
        errorElement:<Error/>,
    }
])
const Root= ReactDOM.createRoot(document.getElementById("root"))
//Root.render(<AppLayout/>)

Root.render(<RouterProvider router={appRouter}/>)