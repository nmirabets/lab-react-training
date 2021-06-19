import { Component } from 'react';

class Random extends Component {

  render() {

    function random(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    return (
      <div className="flex flex-row m-2 border-2 border-black ">
          <div >
            <p className= "text-2xl p-1">Random value between {this.props.min} and {this.props.max} {"=>"} {random(this.props.min,this.props.max)}</p>
          </div>
      </div>
    );
  }
}

export default Random;