import { fireEvent, render, screen } from "@testing-library/react"
import BasicAppComponent from "./BasicAppComponent"

global.alert = jest.fn()
describe('BasicAppComponent', () => {
    test('rendered the input and button', () => {
        render(<BasicAppComponent />)

        let input = screen.getByPlaceholderText(/Enter your name/i)
        expect(input).toBeInTheDocument()

        let password = screen.getByPlaceholderText(/Enter your password/i)
        expect(password).toBeInTheDocument()

        let login = screen.getByDisplayValue(/Login/i)
        expect(login).toBeInTheDocument()
    })

    //get the element
    //type some text to the element
    //clcik the button
    //verify text is equal to alart text.
    test("allow user to type input and click button then verify alert displayed", () => {
        render(<BasicAppComponent />)

        //typing text to input
        let input = screen.getByPlaceholderText(/Enter your name/i)
        fireEvent.change(input, {
            target: {
                value: "Moorthy"
            }
        })

        //clicking the button
        let login = screen.getByDisplayValue(/Login/i)
        fireEvent.click(login) 

        //verify print dialog
        expect(global.alert).toHaveBeenCalledWith("Moorthy")
    })

    test("allow user to type and verify typed text is displayed", () => {
        render(<BasicAppComponent />)
        // TYpe the text to input
        let input = screen.getByPlaceholderText(/Enter your name/i)
        fireEvent.change(input, {
            target: {
                value: "Moorthy"
            }
        })
        // Type text is displayed or not
        let h1 = screen.getByDisplayValue("Moorthy")
        expect(h1).toBeInTheDocument()
    })
})