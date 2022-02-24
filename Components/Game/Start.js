import React from 'react';

export default function start({onStart, isWon, isRunning, livesLeft}) {
  return (
      <>
      {
        isWon ? <div className = "font-large"> You Won </div> : 
                <button
                    className = {"start-button " + (!livesLeft || isRunning && "display-none")}
                    onClick = {onStart}
                >
                    Start
                </button>
      }
      </>
  );
}
