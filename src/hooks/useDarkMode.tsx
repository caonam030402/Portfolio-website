import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('dark' || localStorage.getItem('theme'))
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return { colorTheme, theme, setTheme }
}

export default useDarkMode
