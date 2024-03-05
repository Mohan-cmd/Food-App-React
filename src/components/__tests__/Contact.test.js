import Contact from "../Contact"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

// here Describe groups test cases
//here instead of test we can write it aslo
describe("Contact Us Test Case",()=>{
test("Should load Contacts Component",()=>{
    render(<Contact/>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument()
})

test("Should load Contacts Component",()=>{
    render(<Contact/>);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument()
})

test("Should load Input name of Contacts Component",()=>{
    render(<Contact/>);
    const inputname = screen.getByPlaceholderText("name");

    expect(inputname).toBeInTheDocument()
})

test("Should have 2 input boxes in Contacts Component",()=>{
    render(<Contact/>);

    const inputs =screen.getAllByRole("textbox");
     // return array of input objects 
    expect(inputs.length).toBe(2);
    expect(inputs.length).not.toBe(3);
})

})