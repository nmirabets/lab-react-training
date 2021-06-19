import { Component } from 'react';

class IdCard extends Component {
  
  render() {
    return (
      <div className="flex flex-row m-2 border border-black ">
          <img className="m-2" src={this.props.picture} alt="Picture not available"/>
          <div>
            <p><label className= "font-bold">First name: </label>{this.props.firstName}</p>
            <p><label className= "font-bold">Last name: </label>{this.props.lastName}</p>
            <p><label className= "font-bold">Gender: </label>{this.props.gender}</p>
            <p><label className= "font-bold">Height: </label>{this.props.height}cm</p>
            <p><label className= "font-bold">Birth: </label>{this.props.birth}</p>
          </div>
      </div>
    );
  }
}

export default IdCard;