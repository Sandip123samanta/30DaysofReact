import React, { useState, useRef, useEffect } from "react";
import GameBtn from "./GameBtn";
import red from '../assets/sounds/red.mp3'
import blue from '../assets/sounds/blue.mp3'
import green from '../assets/sounds/green.mp3'
import yellow from '../assets/sounds/yellow.mp3'
import wrong from '../assets/sounds/wrong.mp3'

const colors = ["green", "red", "yellow", "blue"];

function SimonGame() {
  // states
  const [sequence, setSequence] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [playingIdx, setPlayingIdx] = useState(0);

  // refs
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);


  // functions
 const playAudio = () =>{
   let audio;
   if(sequence[playingIdx%4] === "green") audio=new Audio(green)
   else if(sequence[playingIdx%4] === "red") audio=new Audio(red)
   else if(sequence[playingIdx%4] === "blue") audio=new Audio(blue)
   else if(sequence[playingIdx%4] === "yellow") audio=new Audio(yellow)
   audio.play()
 }

  const resetGame = () => {
    new Audio(wrong).play()
    setSequence([]);
    setPlaying(false);
    setPlayingIdx(0);
  };

  const addNewColor = () => {
    const color = colors[Math.floor(Math.random() * 4)];
    const newSequence = [...sequence, color];
    setSequence(newSequence);
  };

  const handleNextLevel = () => {
    if (!playing) {
      setPlaying(true);
      addNewColor();
    }
  };

  const handleColorClick = (e) => {
    if (playing) {
      e.target.classList.add("opacity-50");
      playAudio()
  
      setTimeout(() => {
        e.target.classList.remove("opacity-50");

        const clickColor = e.target.getAttribute("color");

        // clicked the correct color of the sequence
        if (sequence[playingIdx] === clickColor) {
          // clicked the last color of the sequence
          if (playingIdx === sequence.length - 1) {
            setTimeout(() => {
              setPlayingIdx(0);
              addNewColor();
            }, 250);
          }

          // missing some colors of the sequence to be clicked
          else {
            setPlayingIdx(playingIdx + 1);
          }
        }

        // clicked the incorrect color of the sequence
        else {
          resetGame();
          // alert("You Lost!");
        }
      }, 250);
    }
  };

  // useEffect
  useEffect(() => {
    // show sequence
    if (sequence.length > 0) {
      const showSequence = (idx = 0) => {
        let ref = null;
        let audio;
        if (sequence[idx] === "green"){
          ref = greenRef
          audio = new Audio(green)
        };
        if (sequence[idx] === "red") {
        ref = redRef
        audio = new Audio(red)
        };
        if (sequence[idx] === "yellow") {
          ref = yellowRef
          audio = new Audio(yellow)
        };
        if (sequence[idx] === "blue") {
          ref = blueRef
          audio = new Audio(blue)
        };

        // highlight the ref
        setTimeout(() => {
          ref.current.classList.add("brightness-[2.5]");
          audio.play()

          setTimeout(() => {
            ref.current.classList.remove("brightness-[2.5]");
            if (idx < sequence.length - 1) showSequence(idx + 1);
          }, 250);
        }, 250);
      };

      showSequence();
    }
  }, [sequence]);

  return (
      <div className="relative flex flex-col justify-center items-center">
        <div>
          <GameBtn
            color="green"
            border="rounded-tl-full"
            bg="bg-green-500"
            onClick={handleColorClick}
            ref={greenRef}
          />
          <GameBtn
            color="red"
            border="rounded-tr-full"
            bg="bg-red-500"
            onClick={handleColorClick}
            ref={redRef}
          />
        </div>

        <div>
          <GameBtn
            color="yellow"
            border="rounded-bl-full"
            bg="bg-yellow-400"
            onClick={handleColorClick}
            ref={yellowRef}
          />

          <GameBtn
            color="blue"
            border="rounded-br-full"
            bg="bg-blue-500"
            onClick={handleColorClick}
            ref={blueRef}
          />
        </div>
        <button
          className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duration-200 hover:scale-105"
          onClick={handleNextLevel}
        >
          {sequence.length === 0 ? "Play" : sequence.length}
        </button>
      </div>
  );
}

export default SimonGame;