import React, { Component } from "react";

class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeImgUrl: "./img/dice-empty.png",
        }
    }

    handleClickDice = () => {
        const position = Math.ceil(Math.random() * 6);

        this.setState({ activeImgUrl: "./img/dice-empty.png" });

        setTimeout(() => 
            this.setState({ 
                activeImgUrl: "./img/dice" + position + ".png",
            }
        ), 1000);
    }

    render () {
        return (
            <img className="w-20 m-4 " src={this.state.activeImgUrl} onClick={this.handleClickDice} alt="Dice"/>
        )
    }

}

export default Dice;