import { useState } from "react";
import Card from "../Components/card/card";
import "./Grid.css"
import isWinner from "../Components/Helper/isWinner";
function Grid({numberOfCards}){
  const [board,setBoard]=useState(Array(numberOfCards).fill(""));
  const [turn,setTurn]=useState(false);
  const [winner,setWinner]=useState(null);
  function play(index){
    if(turn==true){
      board[index]="0";
    }else{
      board[index]="X";
    }
    const win=isWinner(board,(turn)?"0":'X');
    if(win){
     setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  function reset(){
    setTurn(false);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }
  return (
    <div className="wrapper">
     
     {
      winner && (
        <>
        <h1>Congratulation!! Winner is {winner}</h1>
        <button className="reset" onClick={reset}>Reset</button>
        </>
      )
     }

    <h1>Current Turn:{turn?"0":"X"}</h1>  
    
    <div className="Grid"> 
      {board.map((el,idx)=> <Card gameEnd={winner?true:false} key={idx} onPlay={play} player={el} index={idx}/>)}
    </div>
    </div>
  )
}
export default Grid;