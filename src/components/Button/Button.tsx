import { MouseEventHandler, ReactNode } from "react"
import "../../assets/css/button.css"

interface Button {
    children: ReactNode,
    enabled: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
}


const Button = ({children, enabled, onClick}: Button) => {
    return (
        <button
           disabled={!enabled} 
           style={{
            backgroundColor: !enabled ? 'grey': 'rgb(32, 73, 255)'
           }}
           onClick={onClick}
           className="button"
        >{children}</button>
    )
}

export default Button