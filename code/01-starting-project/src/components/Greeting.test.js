import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('Render Hello World as a text', () => {
        // Arrange ---
        render(<Greeting /> );
    
        // Act
        // ...  nothing ...
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!') ;
        expect(helloWorldElement).toBeInTheDocument();
    
    });

    test('renders good to see you .... Btn was not clicked', () => {
        render(<Greeting /> );
        const paragraphElement = screen.getByText('good to see you',{exact: false});
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders Changed! .... Btn was  clicked', () => {
        render(<Greeting /> );

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed!') ;
        expect(outputElement).toBeInTheDocument();
        
    });

});

