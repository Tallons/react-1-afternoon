import React from "react";

class Sum extends React.Component{
constructor(){
  super();

  this.state = {
    numberOne: 0,
    numberTwo: 0,
    sum: null
  }

}


  render(){
    return(
      <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input 
          className="inputLine" type='number'
          onChange={(event) => this.setState({numberOne: event.target.value})} />
      <input 
          className="inputLine" type='number'
          onChange={(event) => this.setState({numberTwo: event.target.value})} />
      <button 
          className="confirmationButton" type="number" 
          onClick={()=> this.setState({ sum: parseInt(this.state.numberOne) + parseInt(this.state.numberTwo) })}>Add</button>
      <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
}


export default Sum;