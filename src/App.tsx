import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className={`dark:bg-backgroundDark dark:text-white`}>
      <Home />
    </div>
  )
}

export default App
