import { createContext, useState } from 'react'
import { ThemeProvider } from '@mui/material'

import { light, dark } from '../themes'

interface IThemeContext {
  theme: unknown
  toggleTheme: () => void
  themeMode: string
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

interface IProps {
  children: React.ReactNode
}

export const ThemeContextProvider = (props: IProps) => {
  const [themeMode, setThemeMode] = useState('light')
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark')
      setTheme(dark)
    } else {
      setThemeMode('light')
      setTheme(light)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeMode,
      }}
    >
      <ThemeProvider
        theme={theme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
