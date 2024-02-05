

import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        //it calls the constructor of the parent class, React.Component, which is necessary to initialize the new component that is being created.
     // console.log(props)

     //For creating state variables
    //  this.state={
    //     count:0,
    //     count2:0
    //  }

    this.state={
        userInfo:{
            name: "Dummy",
            location:"Default"
        }
    }
    }

    async componentDidMount(){
        // Will be Called After the class mounted i.e., loaded like useEffect
        //if this is child then once componetDidMount function is loaded then the parent componentDidMount is called
        //if there are multiple childs then all the childs are called at the end from first child to parent 
        // because As DOM manuplations(components rendering) are very expensive React finishes them first in single go

        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json =await data.json();
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        //executes aft componetDidMount
    }

    componentWillUnmount(){
        //when page unmounts while moving to another page from current
    }


    render(){
    //  const {count2} =this.state
     const {name,location}=this.state.userInfo
        return(
            <div className="user-card">
            {/* <h4>Count: {this.state.count}</h4>
            <button onClick={
                ()=>{
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    })
                }
            }>Count Increase</button>
            <h4>Count2: {count2}</h4> */}
              <h2>Name: {name} </h2>
              <h3>Location: {location}</h3>
              <h4>Contact: @mohan123</h4>
            </div>
        )
    }
}

export default UserClass;