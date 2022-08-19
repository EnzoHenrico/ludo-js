const getInitialPlaces = (number, color) => {
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

export default getInitialPlaces;