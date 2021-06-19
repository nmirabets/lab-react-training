import { Component } from 'react';

class CreditCard extends Component {

  render() {

    let number = this.props.number.substr(this.props.number.length - 4);



    return (
        <div className= "m-2 p-2 rounded-xl flex flex-col items-center justify-center h-60 " style={{backgroundColor: this.props.bgColor}}>
            <img className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png" />
            <div className="text-4xl">···········{number}</div>
            <div>
                <p><label >Expires {this.props.expirationMonth}/{this.props.expirationYear}</label><label className="ml-6">{this.props.bank}</label></p>
                <p>{this.props.owner}</p>
            </div>
        </div>
    );
  }
}

export default CreditCard;