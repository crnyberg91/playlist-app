import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


/**
 * returns imported components to be rendered in index.tsx
 *no parameters passed in the meantime
 * @returns organized jsx
 */
const App: React.FC = () => {
	return (
		<div>
			<h1>
				Ja<span className='highlight'>mmm</span>ing
			</h1>
			<div className='App'>
				<SearchBar />
				<div className='App-playlist'>
					<SearchResults />
					<Playlist />
				</div>
			</div>
		</div>
	);
};

export default App;
