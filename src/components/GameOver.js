import React, { useContext } from 'react'
import { AppContext } from '../App'

export default function GameOver() {
  const { gameOver, currAttempt, correctWord } =useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{gameOver.gueesedWord ? "You correctly guessed" : "You Failed"}</h3>
        <h1> Correct: {correctWord} </h1>
        {gameOver.gueesedWord && (
            <h3> You guessed in { currAttempt.attempt } Attempts</h3>
        )} 
    </div>
  )
}
