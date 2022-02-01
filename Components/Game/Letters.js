import React from 'react';

const ALL_ALPHABETS = "abcdefghijklmnopqrstuvwxyz"

export default function Letters({guess, isRunning, playedLetters}) {
  return (
    <div>
        {ALL_ALPHABETS.split("").map((ch, idx) => {
            return (
                <button
                onClick = {() => guess(ch)}
                disabled = {Boolean(!isRunning) || Boolean(playedLetters&(1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))))}
                key = {idx}
                >
                    {ch}
                </button>
            )
        })}
    </div>
  )
}
