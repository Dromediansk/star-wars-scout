import React, {Component} from 'react';
import './People.css';

export class People extends Component {
	constructor() {
		super();
		this.state = {
      	showDetails: false
    }
    this.showDetails = this.showDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  showDetails(event) {
  	event.preventDefault();
  	this.setState({
  		showDetails: true
  	});
  }

  hideDetails() {
  	this.setState({
  		showDetails: false
  	});
  }

  render() {
		return (
	<div className='people card'>
		<h2> {this.props.name} </h2>
		{
		this.state.showDetails
		? (
			<div>
				<div onClick={this.hideDetails} id='hide'>
					<i className='fa fa-chevron-circle-up fa-5px'></i>
				</div>
				<ul className='details'>
		            <li> Height: {this.props.height}</li>
		            <li> Mass: {this.props.mass}</li>
		            <li> Hair Color: {this.props.hair_color}</li>
		            <li> Skin Color: {this.props.skin_color}</li>
		            <li> Eye Color: {this.props.eye_color}</li>
		            <li> Birth Year: {this.props.birth_year}</li>
		            <li> Gender: {this.props.gender}</li>
	        	</ul>
			</div>

        	)
		: (
			<div onClick={this.showDetails} className='show'>
				<i className='fa fa-chevron-circle-down fa-5px'></i>
			</div>
			)
        }
	</div>
	);
  }
}

export default People;