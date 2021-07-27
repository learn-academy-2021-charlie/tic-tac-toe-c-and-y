import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: [" ", " ", " ", " ",""," ", " ", " ", " "],
      player1: true,
      player2: false
    }
  }

  handleGamePlay = (index) => {
    const {board} = this.state
    const {player1} = this.state
    const {player2} = this.state
    if(player1===true && board[index] !== "🔵"){
      board[index] = "❌"
    this.setState({board: board, player1: false, player2:true})
  } else if(player2===true && board[index] !== "❌") {
    board[index] = "🔵"
        this.setState({board: board, player1: true, player2:false})
}
  }
  // find diff way to fire this.winGame
componentDidUpdate(){
  this.winGame()
}
  winGame = () => {
    const {board, handleGamePlay} = this.state
    
  
    // if(board[0] === "❌" && board[1] === "❌" && board[2] === "❌")
    // console.log("win")
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ]
       if(board[0] === "❌" && board[1] === "❌" && board[2] === "❌"){
      console.log("win")
       }
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
            winGame={this.winGame}
            />
          )
          })}
            </div>
            </>
    )
  }
}
export default App
