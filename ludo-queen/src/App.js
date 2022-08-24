import Board from "./components/Board";
import { BoardProvider } from "./contexts/board";
import { TurnProvider } from "./contexts/turn";

function App() {
  return (
    <BoardProvider>
      <TurnProvider>
        <Board />
      </TurnProvider>
    </BoardProvider>
  );
}

export default App;
