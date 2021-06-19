import { Component } from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 0,
        };
      }
  
      handleIncrement = () => {
          this.setState({
            value: this.state.value + 1,
          });
        };
    
  render() {

    let colorArray = ['purple','blue','green','yellow','orange','red'];

    return (
      <button className="flex flex-row m-2 border border-black" 
      style={{backgroundColor:`${colorArray[this.state.value]}`}} 
      onClick={this.handleIncrement}>{this.state.value} Likes</button>
    );
  }
}

export default LikeButton;