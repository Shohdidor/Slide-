import useDarkSide from "../hooks/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

export default function Switcher () {
    const [ colorTheme , setTheme ] = useDarkSide ()
    const [ darkSide ,setDarkSide ] = useState (
        colorTheme === "light" ? true : false 
    )
    const toggleDarkMode = ( checked ) => {
        setTheme ( colorTheme )
        setDarkSide ( checked )
    }
    return (
        <>
        <div>
            <DarkModeSwitch 
            className="text-[red] dark:text-orange-500 transition-[0.2s]"
            checked = { darkSide }
            onChange = { toggleDarkMode }
            size = { 36 }
            />
        </div>
        </>
    )
}