import { fireEvent, getByLabelText, getByPlaceholderText, render, screen } from "@testing-library/react"
import Form from "../components/Form/Form"


describe ("Form.tsx: ", () => {
    it("should render form components correctly:", () => {
        const { getByPlaceholderText, getByText } = render(<Form/>)
        
        // inputs
        expect(getByPlaceholderText('Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Email')).toBeInTheDocument();
        expect(getByPlaceholderText('Password')).toBeInTheDocument();
        expect(getByPlaceholderText('ConfirmPassword')).toBeInTheDocument();
        expect(getByPlaceholderText('Profession')).toBeInTheDocument();

        expect(getByText('Enviar')).toBeInTheDocument();

    })
})

export default {}