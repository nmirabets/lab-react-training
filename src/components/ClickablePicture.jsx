import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
      super(props)
      this.state = {
        activePicUrl: this.props.img
      }
  }

  handleClickPic = () => {
    const { img, imgClicked } = this.props;
    this.setState({ activePicUrl: (this.state.activePicUrl === img) ? imgClicked : img })
  }

  render() {
      return (
          <img className="w-50" src={this.state.activePicUrl} alt="picture" onClick={this.handleClickPic}></img>
      )
  }
}

export default ClickablePicture;