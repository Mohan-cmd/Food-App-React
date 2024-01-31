
const parent =React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"i am inside h1 Tag"),
     React.createElement("h2",{},"I am inside h2 tag")]
));


const heading=React.createElement("h1",{id:"headingg"},"Hello JS from React!!!!") //IT CREATES OBJECT
const Root=ReactDOM.createRoot(document.getElementById("root"))
Root.render(heading)   // IT CREATES ELEMENT AND REPLACES IF THERE IS ANY ELEMENT INSIDE IT
Root.render(parent)