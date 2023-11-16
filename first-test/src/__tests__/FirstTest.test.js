import { render, screen } from '@testing-library/react'
import FirstTest, { SecondTest } from '../FirstTest';

test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})

test("Example 2 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/Yoooo/i);

    expect(element).toBeInTheDocument();
})

test("Example 3 renders successfully", () => {
    render(<SecondTest/>);

    const element = screen.getByText(/This is a paragraph/i);

    expect(element).toBeInTheDocument();
})