import { Component } from 'react';

class Greetings extends Component {

  render() {

    const greet = () => {
        switch (this.props.lang) {
            case "de":
                return "Hallo"
            case "en":
                return "Hello"
            case "es":
                return "Hola"
            case "fr":
                return "Bonjour"
            default: 
                return "Hello"
        }
    } 

    return (
      <div className="flex flex-row m-2 border-2 border-black ">
          <div >
            <p className= "text-2xl p-1">{greet(this.props.lang)} {this.props.children}</p>
          </div>
      </div>
    );
  }
}

export default Greetings;