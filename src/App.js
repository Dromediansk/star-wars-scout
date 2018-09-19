import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Urls from './Urls.js';

class App extends Component {
	constructor() {
		super()
		this.state = {
			heroes: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		let characArray = [];
    	Urls.map(url => {
      return (
        fetch(url).then(response => response.json())
          .then(result => characArray.push(result))
          .then(persons => {this.setState({ heroes: characArray })})
      );
    });
  }

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredHeroes = this.state.heroes.filter(heroes => {
			return heroes.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
			<h1>Star Wars Scout</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList heroes={filteredHeroes} />
		</div>
		);
	}
}

export default App;