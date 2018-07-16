import React, {Component} from "react";
let shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
class Poker extends Component {
    constructor(){
        super()
        this.state = {
            pokerHand: [
                {
                    suit: "clubs",
                    number: 2
                },
                {
                    suit: "hearts",
                    number: 7
                }
            ],
            suits: ["clubs","hearts","diamonds","spades","stars"],
            numbers: [1,2,3,4,5,6,7,8,9,10,"king","queen","jack", "princess","Ace","Joker"]
        }
    
        this.handleClick = this.handleClick.bind(this)
        this.turnToJoker = this.turnToJoker.bind(this)
    }
    handleClick() {
        let newSuit = shuffle(this.state.suits);
        let newNum = shuffle(this.state.numbers);
        this.setState(prevState => ({
            prevState: prevState.pokerHand.push({ 
                    suit: newSuit[0],
                    number: newNum[0]
                
            })
        
        }));
    }
    turnToJoker() {
        let length = this.state.pokerHand.length;
        let jokerHand = []
        for(let i = 0; i < length; i++){
            jokerHand.push({
                suit: "joker",
                number: "joker"
            })
        }
        this.setState({
            pokerHand: jokerHand
        });
    }
    render(){
        let myPokerHand = this.state.pokerHand.map((card, index) => {
           return (
            <h1 key={index}>{card.number} of {card.suit}</h1> 
            )
        })
        return(
            <div>
                {myPokerHand}
                <button onClick={this.handleClick}>Add a card to hand</button>
                <button onClick={this.turnToJoker}>turn all cards into joker</button>
            </div>
        )
    }
}

export default Poker;