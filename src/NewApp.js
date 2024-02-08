import React, { useEffect, useState,lazy,Suspense  } from "react"
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";

const Grocery= lazy(()=> import("./components/Grocery"))

const AppLayout=()=>{

  const[userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name: "Mohan Gupta"
    }
    setUserName(data.name)
  },[])

    return (
       <Provider store={AppStore}>
        <div className="App">
           <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
              <Header/>
              <Outlet/> 
           </UserContext.Provider>           
        </div>
        </Provider> 
      
    )
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
          },
          {
            path:"/cart",
            element:<Cart/>
          }
        ],
        errorElement:<Error/>,
    }
])
const Root= ReactDOM.createRoot(document.getElementById("root"))
//Root.render(<AppLayout/>)

Root.render(<RouterProvider router={appRouter}/>)