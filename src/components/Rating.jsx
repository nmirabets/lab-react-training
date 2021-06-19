import { Component } from 'react';

class Rating extends Component {

  render() {
    let roundedRating = Math.round(this.props.children);
    let result = "★★★★★".slice(0,roundedRating) + "☆☆☆☆☆".slice(0,5-roundedRating);

    return (
      <div className="">{result}</div>
    );
  }
}

export default Rating;