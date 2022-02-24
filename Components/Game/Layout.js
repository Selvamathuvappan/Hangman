import React from 'react'
import Lives from "./Lives"
import Word from "./Word"
import Letters from "./Letters"
import Start from "./Start"

function Layout({
    lives, puzzle, playedLetters, guess, isRunning, start, isWon 
}) {
  return (
    <div className = "game-wrapper">
        <div className="left-pane">
            <Lives livesLeft={lives} isWon = {isWon}/>
        </div>
        <div className = "right-pane"> 
            {<Word puzzle={puzzle} playedLetters={playedLetters} livesLeft = {lives}/>}
            <Letters guess={guess} isRunning={isRunning} playedLetters={playedLetters}/>
            <br/>
            <br/>
            <Start onStart={start} isWon={isWon} isRunning = {isRunning} livesLeft = {lives}/>
        </div>
    </div>
  )
}

export default Layout