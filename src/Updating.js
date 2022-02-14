import React, {Component} from "react";

class Updating extends Component {
    state = {
        num : 23
    }

    componentDidUpdate(){
        console.log("This is componentDidUpdate");
    }
    render(){
        console.log("this is render function");
        return (
            <div>
                State variable current value is : {this.state.num}
                <button onClick = {()=>this.setState({num:this.state.num+1})}>Change</button>
            </div>
        )
    }
}

export default Updating