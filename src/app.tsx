import { GlobalStyle } from './global-style';
import Board from './components/board';
import Name from './components/name';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Name />
      <Board />
    </>
  )
};

export default App;