import React, {useState} from 'react';
import Layout from "./Layout";

function Game() {
    const [puzzle, setPuzzle] = useState("");
    const [playedLetters, setPlayedLetters] = useState(0);

    const start = () => {
        setPuzzle("survivor");
        setPlayedLetters(0);
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
    const isWon = !!lives && !!allLetters && ((playedLetters&allLetters) === allLetters)
    const isRunning = !!lives && !!allLetters && !isWon
    
    return (
        < Layout 
        lives = {lives} 
        puzzle = {puzzle} 
        playedLetters = {playedLetters} 
        guess = {guess} 
        isRunning = {isRunning} 
        start = {start} 
        isWon = {isWon} 
        />
    )
}

export default Game;
