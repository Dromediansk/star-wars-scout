import React from 'react';
import './People.css';

const People = ({ key, id, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }) => {
	return (
		<div className='people card'>
			<h2> { name } </h2>
            <p> height: {height} </p>
            <p> Mass: {mass} </p>
            <p> Hair Color: {hair_color} </p>
            <p> Skin Color: {skin_color} </p>
            <p> Eye Color: {eye_color} </p>
            <p> Birth Year: {birth_year} </p>
            <p> Gender: {gender} </p>
		</div>
	);
}

export default People;