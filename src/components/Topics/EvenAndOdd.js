import React from 'react';

class EvenAndOdd extends React.Component{
  constructor(){
    super()
  this.state = {
  evenArray:  [],
  oddArray: [],
  userInput: ""
  }
  }

  updateUser = (value) => {
    this.setState({userInput: value})
  
    //  this.setState({ this.state.userInput:value})
  }

  updateValue = (userInput) => {
    let evenArray = [];
    let oddArray = [];
    let array = userInput.split(",")

    for(let i = 0; i <array.length; i++){

      if (array[i] %2 === 0)  {
        evenArray.push(array[i])

      }else{
        oddArray.push(array[i])
      }
    }
    this.setState({evenArray: evenArray, oddArray: oddArray, userInput: ""})
  }




  render(){
    return(
      <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input 
          className="inputLine"
          onChange={(event)=>this.updateUser(event.target.value)} />
           <button 
          className="confirmationButton"
          onClick={()=> this.updateValue(this.state.userInput)}>Split</button>
          <span className="resultsBox">{"Even:["+ this.state.evenArray + "]"}</span>
          <span className="resultsBox">{"Odd: ["+ this.state.oddArray + "]"}</span>

          

      </div>
      
    )
  }
}



export default EvenAndOdd;