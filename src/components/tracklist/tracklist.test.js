import { render, screen, fireEvent } from '@testing-library/react';
import TrackList from './tracklist';

describe('TrackList Component', () => {
    const mockTracks = [
        { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
        { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    ];
    test('renders list of tracks', () => {
        render(
            <TrackList
                trackList={mockTracks}
            />
        );
        expect(screen.getByText('Track 1')).toBeInTheDocument();
        expect(screen.getByText('Track 2')).toBeInTheDocument();
    });

    test('renders Add button when hasAddButton is true', () => {
        render(
            <TrackList
                trackList={mockTracks}
                hasAddButton={true}
            />
        );
        const addButtons = screen.getAllByRole('button', { name: /Add to Playlist/i })
        expect(addButtons).toHaveLength(mockTracks.length);
    });

    test('renders Remove button when hasDeleteButton is true', () => {
        render(
            <TrackList
                trackList={mockTracks}
                hasDeleteButton={true}
            />
        );
        const deleteButtons = screen.getAllByRole('button', { name: /Remove from Playlist/i })
        expect(deleteButtons).toHaveLength(mockTracks.length);
    });

    test('calls onAddToPlaylist when Add button clicked', () => {
        const mockOnAddToPlaylist = jest.fn();
        render(
            <TrackList
                hasAddButton={true}
                trackList={mockTracks}
                onAddToPlaylist={mockOnAddToPlaylist}
            />
        );
        const addButtons = screen.getAllByRole('button', { name: /Add to Playlist/i });
        fireEvent.click(addButtons[0]);

        expect(mockOnAddToPlaylist).toHaveBeenCalledTimes(1);
        expect(mockOnAddToPlaylist).toHaveBeenCalledWith(mockTracks[0]);
    });

    test('calls onRemoveFromPlaylist when remove button clicked', () => {
        const mockOnRemoveFromPlaylist = jest.fn();
        render(
            <TrackList
                hasDeleteButton={true}
                trackList={mockTracks}
                onRemoveFromPlaylist={mockOnRemoveFromPlaylist}
            />
        );

        const deleteButtons = screen.getAllByRole('button', { name: /Remove from Playlist/i });
        fireEvent.click(deleteButtons[0]);

        expect(mockOnRemoveFromPlaylist).toHaveBeenCalledTimes(1);
        expect(mockOnRemoveFromPlaylist).toHaveBeenCalledWith(mockTracks[0]);
    });
});
