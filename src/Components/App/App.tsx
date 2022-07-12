import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { Track } from '../../models';

/**
 * returns imported components to be rendered in index.tsx
 *no parameters passed in the meantime
 * @returns organized jsx
 */
const App: React.FC = () => {
	const [item, setItem] = useState<string>('');
	const [items, setItems] = useState<Track[]>([]);
	const handleClick = (e: React.FormEvent) => {
		e.preventDefault();
	};
	console.log(item)
	return (
		<div>
			<h1>Playlist App Name Placeholder</h1>
			<div className='App'>
				<SearchBar item={item} setItem={setItem} handleClick={handleClick} />
				<div className='App-playlist'>
					<SearchResults />
					<Playlist />
				</div>
			</div>
		</div>
	);
};

export default App;
