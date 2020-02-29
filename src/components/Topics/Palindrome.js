import React from 'react';

class Palindrome extends React.Component{
  constructor(){
    super()
    this.state = {
    userInput: "",
    palindrome: ""
    }
  }


  isPalindrome(userInput){
    let reverse = userInput;
    console.log(userInput)
    reverse = reverse.split("");
    reverse = reverse.reverse();
    reverse = reverse.join("");

    if (reverse === userInput){
      this.setState({ palindrome: "true"})
    }else{
      this.setState({ palindrome: "false"})
    }
  }


  render(){
    return(
      <div>
        <div className="puzzleBox palindromePB"> 
          <h4>Palindrome</h4>
          <input className="inputLine" 
          onChange={(event) => this.setState({userInput: event.target.value})} />
          <button className="confirmationButton" 
          onClick={()=> this.isPalindrome(this.state.userInput)}>check</button>

          <span className='resultsBox'>Palindrome {this.state.palindrome}</span>
        </div>
      </div>
    )
  }
}

export default Palindrome;