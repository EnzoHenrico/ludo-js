
// Board Colors 
const r = 'var(--red)';
const g = 'var(--green)';
const b = 'var(--blue)';
const y = 'var(--yellow)';

// Especial board colors
// Top left corner
const u = `linear-gradient(45deg, ${r} 50%, ${g} 50%) no-repeat`;
// Top right corner
const v = `linear-gradient(-45deg,${y} 50%, ${g} 50%) no-repeat`;
// Center square
const c = `conic-gradient(from 45deg, ${y} 0deg, ${y} 90deg, ${b} 90deg, ${b} 180deg, ${r} 180deg, ${r} 270deg, ${g} 270deg)`;
// Bottom left corner
const x = `linear-gradient(-45deg, ${b} 50%, ${r} 50%) no-repeat`;
// Bottom right corner
const z = `linear-gradient(45deg, ${b} 50%, ${y} 50%) no-repeat`;
// White squares without border
const w = 'white';

const squareColors = [
  [r,r,r,r,r,r,0,0,0,g,g,g,g,g,g], // 1 
  [r,w,w,w,w,r,0,g,g,g,w,w,w,w,g], // 2
  [r,w,w,w,w,r,r,g,0,g,w,w,w,w,g], // 3
  [r,w,w,w,w,r,0,g,0,g,w,w,w,w,g], // 4
  [r,w,w,w,w,r,0,g,0,g,w,w,w,w,g], // 5
  [r,r,r,r,r,r,0,g,0,g,g,g,g,g,g], // 6
  [0,r,0,0,0,0,u,g,v,0,0,0,g,0,0], // 7
  [0,r,r,r,r,r,r,c,y,y,y,y,y,y,0], // 8
  [0,0,b,0,0,0,x,b,z,0,0,0,0,y,0], // 9
  [b,b,b,b,b,b,0,b,0,y,y,y,y,y,y], // 10
  [b,w,w,w,w,b,0,b,0,y,w,w,w,w,y], // 11
  [b,w,w,w,w,b,0,b,0,y,w,w,w,w,y], // 12
  [b,w,w,w,w,b,0,b,y,y,w,w,w,w,y], // 13
  [b,w,w,w,w,b,b,b,0,y,w,w,w,w,y], // 14
  [b,b,b,b,b,b,0,0,0,y,y,y,y,y,y], // 15
// 1 2 3 4 5 6 7 8 9 1 1 2 3 4 5 
];

export default squareColors;
