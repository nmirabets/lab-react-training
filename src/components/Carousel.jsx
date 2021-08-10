import React, { Component } from 'react';

class Carousel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activeIndx: 0,
        }
    }
    
    handleClickPrevious = () => {
        const { activeIndx } = this.state;
        
        this.setState({ 
            activeIndx: (activeIndx !== 0 ? activeIndx - 1 : this.props.imgs.length-1)
        });
    }

    handleClickNext = () => {
        const { activeIndx } = this.state;
        
        this.setState({ 
            activeIndx: (activeIndx !== this.props.imgs.length - 1 ? activeIndx + 1 : 0)
        });
    }

    render () {
        return (
            <div className="flex items-center">
                <button className="h-1/2 w-1/6 m-2 p-2 border rounded-md border-black bg-gray-500 text-white" onClick={this.handleClickPrevious} >Previous</button>
                <img src={this.props.imgs[this.state.activeIndx]} />
                <button className="h-1/2 w-1/6 m-2 p-2 border rounded-md border-black bg-gray-500 text-white" onClick={this.handleClickNext} >Next</button>
            </div>
        )
    }
}

export default Carousel;