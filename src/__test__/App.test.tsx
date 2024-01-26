import App from "../App"
import { screen, render, fireEvent } from "@testing-library/react"

describe('App.js', () => {
    it("Deve renderizar os componentes corretamente", () => {
        render(<App/>)
    })
})
export {}