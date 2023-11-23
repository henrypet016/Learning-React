import { render, screen } from '@testing-library/react'
import FirstTest from '../src/FirstTest';

test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})

export default function FirstTest
