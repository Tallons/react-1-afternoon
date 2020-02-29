import React from "react";


class FilterObject extends React.Component{

  constructor(){
    super();

    this.state = {
      unfilteredArray: [
            {
            "name": "apple",
            "color": "red",
            "type": "fruit",
          },
            {
            "name": "orange",

            "type": "fruit",
          },
            {
            "name": "grape",
            "type": "fruit",
          },
            {
            "name": "kiwi",
            "color": "brown",

          }],

      userInput: "",
      filteredArray: []
    }   
  }

  changeHandler = (value) => {
    this.setState({
      userInput: value
    })
  }

  clickHandler = (userInput) => {
    console.log(userInput, this.array)
    const array =  this.state.unfilteredArray.filter(function
    (element,index){
     return element[userInput] !== undefined;
   })

   this.setState({
     filteredArray: array
   })
  }


  render(){
    return(
      <div>
        <div className="puzzleBox filterObjectPB">
        <h4>FilterObject</h4>
        <span className="puzzleText">Original {JSON.stringify(this.state.unfilteredArray, null, " ")}</span>
        <input 
          onChange={(event)=>this.changeHandler(event.target.value)} 
          className="inputLine"/>
        <button 
        className="confirmationButton"
        onClick={()=>this.clickHandler(this.state.userInput)}>Filter
        </button>
        <span className="resultBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, " ")}</span>
        </div>
      </div>
    )
  }
}

export default FilterObject;