import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home/Home'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])
  return (
    <div className={`dark:bg-backgroundDark dark:text-white`}>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
