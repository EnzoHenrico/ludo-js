const r = 'var(--red)';
const g = 'var(--green)';
const b = 'var(--blue)';
const y = 'var(--yellow)';

const especialColors = {
  topLeft :"linear-gradient(45deg, var(--red) 50%, var(--green) 50%) no-repeat",
  topRight : "linear-gradient(-45deg, var(--yellow) 50%, var(--green) 50%) no-repeat",
  center : `conic-gradient(from 45deg, ${y} 0deg, ${y} 90deg, ${b} 90deg, ${b} 180deg, ${r} 180deg, ${r} 270deg, ${g} 270deg)`,
  btmLeft : "linear-gradient(-45deg, var(--blue) 50%, var(--red) 50%) no-repeat",
  btmRight : "linear-gradient(45deg, var(--blue) 50%, var(--yellow) 50%) no-repeat",  
}

const squareColors = [
  [r,r,r,r,r,r,0,0,0,g,g,g,g,g,g], // 1 
  [r,0,0,0,0,r,0,g,g,g,0,0,0,0,g], // 2
  [r,0,r,r,0,r,0,g,0,g,0,g,g,0,g], // 3
  [r,0,r,r,0,r,0,g,0,g,0,g,g,0,g], // 4
  [r,0,0,0,0,r,0,g,0,g,0,0,0,0,g], // 5
  [r,r,r,r,r,r,0,g,0,g,g,g,g,g,g], // 6
  [0,r,0,0,0,0,0,g,0,0,0,0,0,0,0], // 7
  [0,r,r,r,r,r,r,0,y,y,y,y,y,y,0], // 8
  [0,0,0,0,0,0,0,b,0,0,0,0,0,y,0], // 9
  [b,b,b,b,b,b,0,b,0,y,y,y,y,y,y], // 10
  [b,0,0,0,0,b,0,b,0,y,0,0,0,0,y], // 11
  [b,0,b,b,0,b,0,b,0,y,0,y,y,0,y], // 12
  [b,0,b,b,0,b,0,b,0,y,0,y,y,0,y], // 13
  [b,0,0,0,0,b,b,b,0,y,0,0,0,0,y], // 14
  [b,b,b,b,b,b,0,0,0,y,y,y,y,y,y], // 15
// 1 2 3 4 5 6 7 8 9 1 1 2 3 4 5 
];

function getInitialPlaces(number, color){
  if(color === 'blue') {
      if(number === 1) {
        return "12/3";
      }
      if(number === 2) {
        return "12/4";
      }
      if(number === 3) {
        return "13/3";
      }
      if(number === 4) {
        return "13/4";
      }
    }
    else if(color === 'green') {
      if(number === 1) {
        return "3/12";
      }
      if(number === 2) {
        return "3/13";
      }
      if(number === 3) {
        return "4/12";
      }
      if(number === 4) {
        return "4/13";
      }
    }
    else if(color === 'yellow') {
      if(number === 1) {
        return "12/12";
      }
      if(number === 2) {
        return "12/13";
      }
      if(number === 3) {
        return "13/12";
      }
      if(number === 4) {
        return "13/13";
      }
    }
    else if(color === 'red') {
      if(number === 1) {
        return "3/3";
      }
      if(number === 2) {
        return "3/4";
      }
      if(number === 3) {
        return "4/3";
      }
      if(number === 4) {
        return "4/4";
      }
    } else {
      return null;
    } 
  }

export { squareColors, getInitialPlaces, especialColors };
