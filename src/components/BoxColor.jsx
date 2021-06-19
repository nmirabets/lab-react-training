import { Component } from 'react';

class BoxColor extends Component {

  render() {

    let { r,g,b } = this.props

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    return (
      <div className="flex m-2 border-2 border-black justify-center flex-row" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
          <div className= "flex flex-col items-center justify-center h-60">
            <p className= "text-2xl p-1">rgb({r},{g},{b})</p>
            <p className= "text-2xl p-1">{rgbToHex(r,g,b)}</p>
          </div>
      </div>
    );
  }
}

export default BoxColor;