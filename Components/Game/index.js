import React, {useState} from 'react';
import Lives from "./Lives"
import Word from "./Word"
import Letters from "./Letters"
import Start from "./Start"

function Game() {
    const [puzzle, setPuzzle] = useState("");
    const [playedLetters, setPlayedLetters] = useState(0);

    const start = () => {
        setPuzzle("survivor");
    }

    let allLetters = 0;
    puzzle.split("").forEach((ch) => {
        allLetters |= (1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0)))
    }) 

    const guess = letter => {
        setPlayedLetters(prvMask => prvMask | (1 << (letter.charCodeAt(0) - 'a'.charCodeAt(0))))
    }

    const setBits = num => {
        let bitCnt = 0;
        while(num){
            bitCnt++;
            num &= num - 1;
        }
        return bitCnt;
    }

    let lives = 6 - (setBits(playedLetters&(~allLetters)))
    const isWon = Boolean(lives) && Boolean(allLetters) && Boolean((playedLetters&allLetters) === allLetters)
    const isRunning = Boolean(lives) && Boolean(allLetters) && Boolean(!isWon)
    
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
