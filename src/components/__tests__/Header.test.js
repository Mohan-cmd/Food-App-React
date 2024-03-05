import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react"
import AppStore from "../../utils/AppStore"
import "@testing-library/jest-dom";

it("Should should render Header Component with a login Button",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
            <Header/>  
            </Provider>
        </BrowserRouter>
    )
    const loginbutton = screen.getByRole("button",{name:"Login"});

    expect(loginbutton).toBeInTheDocument();

})

it("Should should render Header Component with Cart Item ",()=>{
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
               <Header/>  
            </Provider>
        </BrowserRouter>
    )
    const loginbutton = screen.getByText(/Cart/);
    
     expect(loginbutton).toBeInTheDocument();
    
    })

it("Should should change Login button to Logout on Click ",()=>{
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                   <Header/>  
                </Provider>
            </BrowserRouter>
        )
        const loginbutton = screen.getByRole("button",{name:"Login"})
         
          
         //expect(loginbutton).toBeInTheDocument();

         fireEvent.click(loginbutton);
          const Logoutbutton =screen.getAllByRole("button",{name:" Logout "})
        
         expect(Logoutbutton).toBeInTheDocument();
        
})