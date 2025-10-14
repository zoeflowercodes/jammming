import { fireEvent, render, screen } from '@testing-library/react';
import TrackList from './tracklist';

test('calls onRemoveFromPlaylist when button clicked', () => {
    const mockTracks = [
        { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
        { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    ];
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
