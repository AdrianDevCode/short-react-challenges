import React, {Component} from 'react';

class CallbackButton extends Component {
    
    render(){
        return(
            <button onClick={this.props.buttonCallback}>button</button>
        )
    }
}
export default CallbackButton;