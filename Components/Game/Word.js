import React from 'react';

export default function Word({puzzle, playedLetters}) {
    return (
      <div>
          {
            puzzle.split("").map((ch, idx) => (
                Boolean((playedLetters & (1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))))) ? 
                    (<span key = {idx} className = "font-large"> {ch} </span>) : 
                    (<span key = {idx} className = "font-large"> &nbsp;_&nbsp; </span>)
            ))
          }
          <br/>
          <br/>
      </div>
    );
}
