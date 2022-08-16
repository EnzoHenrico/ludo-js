const red = 'var(--red)';
const green = 'var(--green)';
const blue = 'var(--blue)';
const yellow = 'var(--yellow)';

const topL = "linear-gradient(45deg, var(--red) 50%, var(--green) 50%) no-repeat";
const topR = "linear-gradient(-45deg, var(--yellow) 50%, var(--green) 50%) no-repeat";
const center = `conic-gradient(from 45deg, ${yellow} 0deg, ${yellow} 90deg, ${blue} 90deg, ${blue} 180deg, ${red} 180deg, ${red} 270deg, ${green} 270deg)`;
const btmL = "linear-gradient(-45deg, var(--blue) 50%, var(--red) 50%) no-repeat";
const btmR = "linear-gradient(45deg, var(--blue) 50%, var(--yellow) 50%) no-repeat";

const squareColors = {
  '0,0': red, '1,0': red, '2,0': red, '3,0': red, '4,0': red, '5,0': red,                                         '9,0': green, '10,0': green, '11,0': green, '12,0': green, '13,0': green, '14,0': green,  
  '0,1': red,                                                 '5,1': red,             '7,1': green, '8,1': green, '9,1': green,                                                             '14,1': green,  
  '0,2': red,                                                 '5,2': red,             '7,2': green,               '9,2': green,                                                             '14,2': green,  
  '0,3': red,                                                 '5,3': red,             '7,3': green,               '9,3': green,                                                             '14,3': green,  
  '0,4': red,                                                 '5,4': red,             '7,4': green,               '9,4': green,                                                             '14,4': green,  
  '0,5': red, '1,5': red, '2,5': red, '3,5': red, '4,5': red, '5,5': red,             '7,5':green,                '9,5': green, '10,5': green, '11,5': green, '12,5': green, '13,5': green, '14,5': green,  
              '1,6':red,                                                  '6,6': topL,'7,6': green, '8,6': topR,
              '1,7': red, '2,7': red, '3,7': red, '4,7': red, '5,7': red, '6,7': red, '7,7': center,'8,7': yellow,'9,7': yellow,'10,7': yellow,'11,7': yellow, '12,7': yellow, '13,7': yellow, 
                                                                          '6,8': btmL,'7,8': blue,  '8,8': btmR,                                                               '13,8':yellow, 
  '0,9': blue, '1,9': blue, '2,9': blue, '3,9': blue, '4,9': blue, '5,9': blue,       '7,9': blue,                 '9,9': yellow,'10,9': yellow,'11,9': yellow,'12,9': yellow,'13,9': yellow,'14,9': yellow,
  '0,10': blue,                                                     '5,10': blue,     '7,10': blue,                '9,10': yellow,                                                           '14,10': yellow, 
  '0,11': blue,                                                     '5,11': blue,     '7,11': blue,                '9,11': yellow,                                                           '14,11': yellow,  
  '0,12': blue,                                                     '5,12': blue,     '7,12': blue,                '9,12': yellow,                                                           '14,12': yellow,  
  '0,13': blue,                                                     '5,13': blue,'6,13': blue, '7,13': blue,       '9,13': yellow,                                                           '14,13': yellow,
  '0,14': blue,'1,14': blue,'2,14': blue,'3,14': blue,'4,14': blue, '5,14': blue,                                  '9,14': yellow, '10,14': yellow, '11,14': yellow, '12,14': yellow, '13,14': yellow, '14,14': yellow,  
};

const pieceInitialPlace = {
  // Blue pieces
  "2,11": {
    number: '1',
    color: "blue",
  },
  "3,11": {
    number: '1',
    color: "blue",
  },
  "2,12": {
    number: '1',
    color: "blue",
  },
  "3,12": {
    number: '1',
    color: "blue",
  },

  // Green pieces
  "11,2": {
    number: '1',
    color: "green",
  },
  "11,3": {
    number: '1',
    color: "green",
  },
  "12,2": {
    number: '1',
    color: "green",
  },
  "12,3": {
    number: '1',
    color: "green",
  },

  // Yellow pieces
  "11,11": {
    number: '1',
    color: "yellow",
  },
  "12,11": {
    number: '1',
    color: "yellow",
  },
  "11,12": {
    number: '1',
    color: "yellow",
  },
  "12,12": {
    number: '1',
    color: "yellow",
  },
  // Red pieces
  "2,2": {
    number: '1',
    color: "red",
  },
  "3,2": {
    number: '1',
    color: "red",
  },
  "2,3": {
    number: '1',
    color: "red",
  },
  "3,3": {
    number: '1',
    color: "red",
  },
}

export {squareColors, pieceInitialPlace};