import React from 'react';

export default function start({onStart, isWon}) {
  return (
      <>
      {
        isWon ? <div> You Won </div> : 
                <button
                    onClick = {onStart}
                >
                    Start
                </button>
      }
      </>
  );
}
