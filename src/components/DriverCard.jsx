import { Component } from 'react';
import Rating from './Rating';

class DriverCard extends Component {

  render() {

    return (
        <div className= "m-2 p-2 rounded-xl flex flex-row items-center justify-center h-60 bg-blue-800">
            <img className=" h-24 rounded-full" src={this.props.img} />
            <div className="text-white font-bold">
                <p>{this.props.name}</p>
                <Rating>{this.props.rating}</Rating>
                <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
            </div>
        </div>
    );
  }
}

export default DriverCard;