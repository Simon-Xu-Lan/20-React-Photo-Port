import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('contact form component', () => {
    // baseline test, render test
    it('renders', () => {
        render(<ContactForm />);
    });
    // snapshot test
    it('renders', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });
});