import React from 'react';

export default function Word({puzzle, playedLetters}) {
    return (
      <div>
          {
            puzzle.split("").map((ch, idx) => (
                Boolean((playedLetters & (1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))))) ? 
                    (<span key = {idx}> {ch} </span>) : 
                    (<span key = {idx}> &nbsp;_&nbsp; </span>)
            ))
          }
      </div>
    );
}
