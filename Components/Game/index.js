import React, {useState} from 'react';
import Lives from "./Lives"
import Word from "./Word"
import Letters from "./Letters"
import Start from "./Start"

function Game() {
    const [lives, setLives] = useState(6);
    const [puzzle, setPuzzle] = useState("");
    const [playedLetters, setPlayedLetters] = useState(0);
    const [allLetters, setAllLetters] = useState(0);

    const start = () => {
        setPuzzle("survivor");
        let mask = 0;
        puzzle.split("").forEach((ch) => {
            mask |= (1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0)))
        })
        setAllLetters(mask) 
    }

    const guess = letter => {
        if(!(allLetters & (1 << (letter.charCodeAt(0) - 'a'.charCodeAt(0))))) setLives(prvLives => prvLives - 1)
        setPlayedLetters(prvMask => prvMask | (1 << (letter.charCodeAt(0) - 'a'.charCodeAt(0))))
    }

    const isWon = Boolean(lives) && Boolean(allLetters) && Boolean((playedLetters&allLetters) === allLetters)
    const isRunning = Boolean(lives) && Boolean(allLetters) && Boolean(!isWon)
    console.log(isRunning, isWon);
    console.log(allLetters);
    return (
        <div> 
            <Lives livesLeft={lives}/>
            {isRunning && <Word puzzle={puzzle} playedLetters={playedLetters} />}
            <Letters guess={guess} isRunning={isRunning} playedLetters={playedLetters}/>
            <Start onStart={start} isWon={isWon}/>
        </div>
    )
}

export default Game;
