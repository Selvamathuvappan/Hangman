import React from 'react';

export default function Lives({ livesLeft, isWon }) {
  return (
    <div className="hangman-container">
      <div className="pole"></div>
      <div className = {"hangman hangman-" + (isWon ? "win" : `${6 - livesLeft}`)}>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
      </div>
      { !isWon && 
        <div className={`lives lives-${livesLeft}`}>
          <span className="heart"></span>
          <span className="heart"></span>
          <span className="heart"></span>
          <span className="heart"></span>
          <span className="heart"></span>
          <span className="heart"></span>
        </div>}
    </div>
  )
}
