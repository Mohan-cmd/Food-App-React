# Hello :) 


# Parcel
- Dev Build
- Local Server
- HMR Hot Module Replacement (Automatic page refresh)
- File Watching Algorithm which is build using C++
- Faster builds by using cache
- Image Optimizations
- Minification
- Building
- Compressing FIle
- Consistent Hshing
- Code SPlitting
- Differential Bundling - supporting older browsers
- Diagnostic (butiful readable error)
- Error Handling 
- Https
- Tree shaking -> remove unused code
- Different Dev and Prod bundles

# BrowsersList
- Useful for setting for which browsers our browsers are working
- we can use commonds like cover 99% of US ,last 2 chrome versions etc 

# React Hooks
(Normal JS Utility functions)
-> whenever state variable updates React rerenders the component
- UseState() - gives you Superpowerfull State variables in in react
- UseEffect() - renders after the component rendering at the last just like ngAfterviewinti in angular

# React rendering

- as soon as the page load we do rendering and then API and then rerender which provides best UX experiance

# 2 types of routing in React

- Client side routing - doesnt come from backennd again , does it from client side itself s
- Server Side Routing

# Chunking or Code Splitting or Dynamic Bundling or Lazy Loading or On demand loading or dynamic loading

- splitting our app into moudles so that load does not fall on single js file or bundle we divide it into bundles
- we will load when required 

# tailwind
- It is very light weight and it only loads the classes which are used in the code
- we can dynamically change things like change the background color based on screensize etc
- we can provide the darkmode in css along the go without doing it seperately

# React Dev tools in chrome extension
- we can get virual dom structure and also helps in debugging with that we can check which comp is taking more time, less etc etc

# controlled and uncontrolled component
with respect to parent and if child compoenent
- if a comnponent is controlling itself it is uncontrolled component else if controlled by parent it is controlled component 

-lifting the state up 

# Using createContext we can creaate and use that data anywhere in the application using useContext Hook

# Using example <UserContext.Provider value={{loggedInUser: userName}} we can override the values inside the tags whereever we have used them

# Difference between createContext and redux is both do same operation but redux is external library which we have to install it

# Redux
- for example if we want to add items in the cart when we click on add correseponding to product it dispatches Action -> which in turn calls a reducer function -> which updates the slice of the redux store than we use selector(i.e., called subscribing to the store) on the header of the cart to display the cart
 (Add -> Dispatch action -> Reducer Function -> updates slice of cart)

 - Install @reduxjs/toolkit and react-redux

 # Setting Up testing in js
 - install React Testing Library
 - installed jest
 - install babel dependency
 - config babel
 -config parcel config file to disable default babel transpilation
 - install jsdom lib