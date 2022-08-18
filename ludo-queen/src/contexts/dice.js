import { createContext } from "react";

const DiceContext = createContext();

const DiceProvider = ({ children }) => {
  

  return(
    <DiceContext.Provider>
      {children}
    </DiceContext.Provider>
  );
}

export default DiceProvider;
