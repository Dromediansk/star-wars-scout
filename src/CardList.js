import React from 'react';
import People from './People';

const CardList = ({ heroes }) => {
	return (
		<div>
		{
			heroes.map((user, i) => {
		return (
			<People
				key = {i}
                id = {i}
                name = {heroes[i].name}
                height = {heroes[i].height}
                mass = {heroes[i].mass}
                hair_color = {heroes[i].hair_color}
                skin_color = {heroes[i].skin_color}
                eye_color = {heroes[i].eye_color}
                birth_year = {heroes[i].birth_year}
                gender = {heroes[i].gender}
				/>
			);
		})
	}
	</div>
	)
}

export default CardList;