import React, {Component} from 'react';

class RenderingState extends Component {
    constructor() {
        super()
        this.state = {
            cats: 2,
            dogs: 5,
        }
    }
    
    render() {
        let myState = {...this.state};
        let dogsNumber = myState.dogs;
        let catsNumber = myState.cats;
        let preferredAnimal = () => {
            return catsNumber > dogsNumber ? "cat" : "dog"; 
        }
 
        return(
            <div>
                <h1>You have {catsNumber} cats and {dogsNumber} dogs, therefore you are a {preferredAnimal()} person</h1>
            </div>
        )
    }
}

export default RenderingState;