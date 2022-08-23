import { createContext, useEffect, useState } from "react";

const TurnContext = createContext();

const TurnProvider = ({ children }) => {
  const [ colorPlaying, setColorPlaying ] = useState('blue');
  const [ diceNumber, setDiceNumber ] = useState(null);
  const [ rolledDice, setRolledDice ] = useState(false);
  const [ movedPiece, setMovedPiece ] = useState(false);
  const [ turnIsOver, setTurnIsOver ] = useState(false);

  console.log({
    'color playing': colorPlaying,
    'rolled dice? ': rolledDice,
    'dice number': diceNumber,
    'moved piece': movedPiece,
    'turn is over?': turnIsOver,
  });

  const finishMove = () =>  {
    setDiceNumber(null);
    setMovedPiece(true);
    if(diceNumber !== 6) setTurnIsOver(true);
  }

  // Create new turn
  useEffect(() => {
    if(turnIsOver) {  
      let nextColor;
      
      if(colorPlaying === 'blue') {
        nextColor = 'red'
      }
      else if(colorPlaying === 'red') { 
        nextColor = 'green'
      }
      else if(colorPlaying === 'green') {
        nextColor = 'yellow'
      }
      else if(colorPlaying === 'yellow') {
        nextColor = 'blue'
      }

      console.log({'turn over': turnIsOver, "new color": nextColor});

      setColorPlaying(nextColor);
      setDiceNumber(null);
      setRolledDice(false);
      setMovedPiece(false);
      setTurnIsOver(false);
    }
  }, [turnIsOver]);

  return(
    <TurnContext.Provider
      value={{ 
        rolledDice, 
        setRolledDice, 
        diceNumber, 
        setDiceNumber, 
        colorPlaying, 
        setColorPlaying, 
        movedPiece, 
        setMovedPiece,
        turnIsOver, 
        setTurnIsOver,
        finishMove
       }}
    >
      {children}
    </TurnContext.Provider>
  );
}

export {TurnProvider, TurnContext};
