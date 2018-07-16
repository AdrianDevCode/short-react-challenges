import React, {Component} from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state = {counter: 0,}
        this.handleClick = this.handleClick.bind(this);
        
    } 
    handleClick(){
       this.setState(prevState => ({counter: prevState.counter + 1 }));
    }
    
    render(){
        
        return(
            <div>
            <button onClick={this.handleClick}>{this.state.counter}</button>
            </div>
        )
    }
}

export default Counter;