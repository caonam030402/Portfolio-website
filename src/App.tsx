import useDarkMode from './hooks/useDarkMode'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className={`dark:bg-[#050816] dark:text-white`}>
      <Home />
    </div>
  )
}

export default App
