import React from 'react';
import './Playlist.css';


/**
 * 
 *
 * @returns tracklist component with a save button
 */

const Playlist: React.FC = () => {
	return (
		<div className='Playlist'>
			<input value='New Playlist' />
			{/* <!-- Add a TrackList component --> */}
			<button className='Playlist-save'>SAVE TO SPOTIFY</button>
		</div>
	);
};

export default Playlist;
