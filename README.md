# React Lifecycle

A React component , goes through three different phases i.e. Mounting, Updating and Unmounting.


Mounting phase occurs when the component gets rendered on the DOM for the very first time. It included three major methods i.e. 
    1. constructor : In this function we, initialize the state object of the component
    2. render : This function returns the HTML or JSX part of the component
    3. componentDidMount : This is a lifecycle method in React . We can make all the server or API calls in this function.
    
    
Updating phase occurs when any change in state variable occurs or the props value gets updated then the component has to be updated means it will 
be reloaded on the DOM. It included two major methods i.e.
    1. render : This will return the HTML part of the component
    2. componentDidUpdate 
    
    
Unmounting Phase occurs when you forcibly removes a component from the DOM by using conditional rendering. It incudes only one method.
    1. componentWillUnmount : This method will be executed when that component has been removed from the DOM.
