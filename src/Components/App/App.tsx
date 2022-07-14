import React, { useEffect, useState } from 'react';
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
	const CLIENT_ID: string = 'bfce19bfe87e427786d3177b01cb9eba';
	const REDIRECT_URI: string = 'http://localhost:3000';
	const AUTH_ENDPOINT: string = 'https://accounts.spotify.com/authorize';
	const RESPONSE_TYPE: string = 'token';

	const [token, setToken] = useState<string>('');
	const [item, setItem] = useState<string>('');
	const [items, setItems] = useState<Track[]>([]);
	const isLoggedIn: boolean = false;
	const handleClick = (e: React.FormEvent) => {
		e.preventDefault();
	};

	useEffect(()=> {
		const hash: string = window.location.hash;
		let token = window.localStorage.getItem('token');
		if (!token && hash) {

		}
	})
	console.log(item)
	return (
		<div>
			<h1>Playlist App Name Placeholder</h1>
			<div className='App'>
				<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Log In</a>
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
