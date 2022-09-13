import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // sanpshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

//  the test will check if the emoji has been inserted into the <h2> element in the Nav component.
describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        //arrange
        const { getByLabelText } = render(<Nav />)
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// verify that the text content is being inserted into the <a> tags
// (i.e., that the links are visible to users).  
describe('links are visible', () => {
    it('insert text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})