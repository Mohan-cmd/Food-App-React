import  React from 'react';
import  ReactDOM  from 'react-dom/client';
const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"i am inside h1 Tag"),
     React.createElement("h2",{},"I am inside h2 tag")]
));


const heading=React.createElement("h1",{id:"headingg"},"Hello JS from React!!!!") //IT CREATES OBJECT (React Element)
const jsxheading =<h1 id="heading" className='Headding'>Hello Js from ReactElement!!</h1> //It also creates Object just like above syntax


//JSX attributes should be written in camelCasing
//JSX( Parcel uses BABEL(also called JS Compilers) transpiles the above code into pure javscript which browser understands before giving it to JS Engine)

//JSX =>converted by Babel to  React.createElement => ReactElement - JS Object => HTMLElement(render)

const Root=ReactDOM.createRoot(document.getElementById("root"))
Root.render(heading)   // IT CREATES ELEMENT AND REPLACES IF THERE IS ANY ELEMENT INSIDE IT
Root.render(parent)

// Using JSX we can directly write them as below
const Title=()=>(
    <h1 className='head' tabIndex="5">
        Namasthe React using JSX 🚀
    </h1>
)
const HeadingComponent=()=>(
    <div id="container">
    <Title/>
    {/* {or we can call them as belwo} */}
    {Title()}
    {/* you can write javascript or use react elements inside flowerbraces */}
    {jsxheading}  
        <h1 className='heading'>Namasthe React Functional Component</h1>
    </div>
);

Root.render(<HeadingComponent/>)