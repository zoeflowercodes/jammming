import { render, screen } from '@testing-library/react';
import SearchResults from './search-results';
import searchResults from "./search-results";

describe('SearchResults Component', () => {
    const mockTracks = [
        { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    ];

    test('renders title when showTitle is true', () => {
        render(
            <SearchResults
                searchResults={mockTracks}
                showTitle={true}
            />
        );
        expect(screen.getByText(/Results/i)).toBeInTheDocument();
    });

    test('does not render title when showTitle is false', () => {
        render(
            <SearchResults
                searchResults={mockTracks}
                showTitle={false}
            />
        );
        expect(screen.queryByText(/Results/i)).not.toBeInTheDocument();
    });
});
