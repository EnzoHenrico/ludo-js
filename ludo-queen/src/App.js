import Board from './components/Board';
import { MatchProvider } from './contexts/match';
import { TurnProvider } from './contexts/turn';

function App() {
  return (
    <MatchProvider>
      <TurnProvider>
        <Board />
      </TurnProvider>
    </MatchProvider>
  );
}

export default App;
