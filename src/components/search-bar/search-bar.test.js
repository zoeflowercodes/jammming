import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './search-bar';

test('calls onSearch when typing', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const inputField = screen.getByPlaceholderText(/Enter A Song/i);
    fireEvent.change(inputField, { target: { value: 'Justin Bieber' } });
    fireEvent.change(inputField, { target: { value: 'Hello' } });
    expect(mockOnSearch).toHaveBeenCalledWith('Justin Bieber');
    expect(mockOnSearch).toHaveBeenCalledTimes(2);
});
