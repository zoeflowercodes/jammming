import { render, screen } from '@testing-library/react';
import Track from './track';

describe('Track Component', () => {
    const mockTrack = { name: 'Song A', artist: 'Artist A', album: 'Album A' };

    test('renders song name, artist and album\'', () => {
        render(<Track track={mockTrack}/>);
        expect(screen.getByText(/Song A/i)).toBeInTheDocument();
        expect(screen.getByText(/Artist A/i)).toBeInTheDocument();
        expect(screen.getByText(/Album A/i)).toBeInTheDocument();
    });
});
