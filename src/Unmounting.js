import React from "react";

class Unmounting extends React.Component {

    componentWillUnmount () {
        console.log(" this is componentWillUnmount");
    }

    render(){
        return(
            <div>
                This is componet. We will be removing this  component.
            </div>
        )
    }
}

export default Unmounting