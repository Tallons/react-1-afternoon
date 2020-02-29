import React from 'react';

class FilterString extends React.Component{
constructor(){
  super();
  this.state = {
    unfilteredArray: [ "Ammon","John", "Sarah Michelle", "Pip", "Tristin", "Johnny"],
    userInput: "",
    filteredArray: []
  }   
}


  changeHandler = (value) => {
    this.setState({userInput: value})
  }

  clickHandler = (userInput) => {
  
    this.setState({
      filteredArray: this.state.unfilteredArray.filter(function(element){ 
        return element.includes(userInput)})
    })

    }



  render(){
    return(
      <div>
        <div className="puzzleBox filterStringPB">
          <h4>FilterString</h4>
          <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray, null, " ")}</span>
          <input
             className="inputLine"
             onChange={(event)=> this.changeHandler(event.target.value)}/>
          <button 
          className="confirmationButton"
          onClick={()=> this.clickHandler(this.state.userInput)}>Filter
          </button>
          <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, " ")}</span>
        </div>
      </div>
    )
  }
}

export default FilterString