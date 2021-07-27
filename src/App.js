import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: [" ", " ", " ", " ",""," ", " ", " ", " "],
      player1: null,
      player2: null
    }
  }

  handleGamePlay = (index) => {
    console.log(index)
    const {board} = this.state
    
      board[index] = "❌"
      this.setState({board: board})
    
    //   else if(index === this.state.player2){
    //   board[index] = "🔵"
    //   this.setState({board: board})
    // }
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id="gameboard">
        {this.state.board.map((value, index) => {
          return (
            <Square 
            value={value} 
            key={index} 
            index={index} 
            handleGamePlay={this.handleGamePlay}
            />
          )
          })}
            </div>
            </>
    )
  }
}
export default App
