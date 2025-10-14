import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from "./playlist";

test('calls onUpdatePlaylistName when typing', () => {
    const mockOnUpdatePlaylistName = jest.fn();
    render(<Playlist onUpdatePlaylistName={mockOnUpdatePlaylistName} />);

    const inputField = screen.getByPlaceholderText(/Enter Playlist Name/i);
    fireEvent.change(inputField, { target: { value: 'New Playlist' } });
    expect(mockOnUpdatePlaylistName).toHaveBeenCalledWith('New Playlist');
});
