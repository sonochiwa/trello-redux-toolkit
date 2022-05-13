import { GlobalStyle } from "./global-style"
import Board from "./components/board"
import Name from "./components/name"

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Name />
      <Board />
    </div>
  )
}

export default App