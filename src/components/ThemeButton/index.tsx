import { createContext, useContext } from 'react'

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
}

const ThemeContext = createContext(themes.light)

export function ThemeButton() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(_props: any) {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton() {
    const theme = useContext(ThemeContext)
    return (
        <button
            style={{ background: theme.background, color: theme.foreground }}
        >
            I am styled by theme context!
        </button>
    )
}
