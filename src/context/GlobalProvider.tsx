import { ThemeContextProvider } from './ThemeContext'
// import { ClientProvider } from "./ClientContext"
// import { NumPadProvider } from "./NumPadContext"
// import { MessageProvider } from "./MessageContext"

interface IGlobalProvider {
  children: React.ReactNode
}

export default function GlobalProvider(props: IGlobalProvider) {
  return (
    <ThemeContextProvider>
      {props.children}
    </ThemeContextProvider>
  )
}
