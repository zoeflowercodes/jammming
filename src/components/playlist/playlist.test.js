import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from "./playlist";

describe('Playlist Component', () => {
    test('renders playlist input field', () => {
        render(<Playlist />);
        const inputField = screen.getByPlaceholderText(/Enter Playlist Name/i);
        expect(inputField).toBeInTheDocument();
    });

    test('displays playlist name in heading', () => {
        const playlist = { name: 'My Mix', tracks: [] };
        render(<Playlist playlist={playlist} />);
        expect(screen.getByText('My Mix')).toBeInTheDocument();
    });

    test('calls onUpdatePlaylistName when typing', () => {
        const mockOnUpdatePlaylistName = jest.fn();
        render(<Playlist onUpdatePlaylistName={mockOnUpdatePlaylistName} />);

        const inputField = screen.getByPlaceholderText(/Enter Playlist Name/i);
        fireEvent.change(inputField, { target: { value: 'New Playlist' } });
        expect(mockOnUpdatePlaylistName).toHaveBeenCalledWith('New Playlist');
    });

    test('does not render Save button when no tracks', () => {
        render(<Playlist playlist={{ name: 'Empty Playlist', tracks: [] }} />);
        expect(screen.queryByText(/Save to Spotify/i)).not.toBeInTheDocument();
    });

    test('renders Save button when tracks exist', () => {
        render(<Playlist playlist={{ name: 'Empty Playlist', tracks: [{name: "hello", artist: "adele", album: "world"}] }} />);
        expect(screen.getByText(/Save to Spotify/i)).toBeInTheDocument();
    });
});
