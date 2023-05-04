import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className={`dark:bg-backgroundDark dark:text-white`}>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
