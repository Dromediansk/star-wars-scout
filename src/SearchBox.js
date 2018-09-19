import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='searchbox'>
			<input
				type='search'
				placeholder='Search your character'
				onChange={searchChange}
				/>
		</div>
	)
}

export default SearchBox;