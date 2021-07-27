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
// componentDidUpdate(){
//   this.winGame()
// }
  winGame = () => {
    const {board} = this.state
       if(board[0] === "❌" && board[1] === "❌" && board[2] === "❌"){
      console.log("win")
       } else if(board[3] === "❌" && board[4] === "❌" && board[5] === "❌"){
        
       } else if(board[6] === "❌" && board[7] === "❌" && board[8] === "❌"){

       } else if(board[0] === "❌" && board[3] === "❌" && board[6] === "❌"){

       } else if(board[1] === "❌" && board[4] === "❌" && board[7] === "❌"){

       } else if(board[2] === "❌" && board[5] === "❌" && board[8] === "❌"){

       } else if(board[0] === "❌" && board[4] === "❌" && board[8] === "❌"){

       } else if(board[2] === "❌" && board[4] === "❌" && board[6] === "❌"){

       } else if(board[3] === "🔵" && board[4] === "🔵" && board[5] === "🔵"){
        
      } else if(board[6] === "🔵" && board[7] === "🔵" && board[8] === "🔵"){

      } else if(board[0] === "🔵" && board[3] === "🔵" && board[6] === "🔵"){

      } else if(board[1] === "🔵" && board[4] === "🔵" && board[7] === "🔵"){

      } else if(board[2] === "🔵" && board[5] === "🔵" && board[8] === "🔵"){

      } else if(board[0] === "🔵" && board[4] === "🔵" && board[8] === "🔵"){

      } else if(board[2] === "🔵" && board[4] === "🔵" && board[6] === "🔵"){
        
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
