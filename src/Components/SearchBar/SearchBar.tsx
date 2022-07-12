import React, { useRef } from 'react';
import './SearchBar.css';

interface Props {
	item: string;
	setItem: React.Dispatch<React.SetStateAction<string>>;
	handleClick: (e: React.FormEvent) => void;
}

/**
 * functional component to search the spotify api
 * @parameter event what the user input entered
 * @returns api get request search results from spotify based on event
 */
const SearchBar: React.FC<Props> = ({ item, setItem, handleClick }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className='SearchBar'
			onSubmit={(e) => {
				handleClick(e);
				inputRef.current?.blur();
        setItem('');
			}}
		>
			<input
				ref={inputRef}
				placeholder='Enter A Song, Album, or Artist'
				type='input'
				value={item}
				onChange={(e) => setItem(e.target.value)}
			/>
			<button className='SearchButton' type='submit'>
				SEARCH
			</button>
		</form>
	);
};

export default SearchBar;
