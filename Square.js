import React from 'react';
import './Square.css';

export default class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentColor: this.props.intialColor,
    };
  }
   setCurrentColor(currentColor){
     this.setState({
       currentColor,
     })
   }
  render(){
    let textInput;

    const style={
      backgroundColor: this.state.currentColor,
      width: '100px',
      height: '100px',

    };
    return(
      <div style={style} className="Square">

        <div className="Squarectrl">

            <input ref={(element) => { textInput=element; }} type="text" placeholder="Color..." />
            <button onClick={() =>{this.setCurrentColor(textInput.value)}}> Okay</button>

        </div>


      </div>);
  }
}
