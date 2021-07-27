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
    if(player1===true){
    board[index] = "❌" 
    this.setState({board: board, player1: false, player2:true})
  } else if(player2===true) {
      board[index] = "🔵"
        this.setState({board: board, player1: true, player2:false})
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
            />
          )
          })}
            </div>
            </>
    )
  }
}
export default App
