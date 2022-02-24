import React from 'react';

const ALL_ALPHABETS = "abcdefghijklmnopqrstuvwxyz"

export default function Letters({guess, isRunning, playedLetters}) {
  return (
    <div className = "display-flex justify-content-center flex-wrap">
        {ALL_ALPHABETS.split("").map((ch, idx) => {
            return (
                <button
                className = "start-button start-button--letter"
                onClick = {() => guess(ch)}
                disabled = {!isRunning || !!(playedLetters&(1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))))}
                key = {idx}
                >
                    {ch}
                </button>
            )
        })}
    </div>
  )
}
