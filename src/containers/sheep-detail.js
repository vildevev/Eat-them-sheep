import React, { Component } from 'react';
import { connect } from 'react-redux';

class SheepDetail extends Component {
	render() {
		if (!this.props.sheep) {
			return <div>Select a sheep to get started.</div>;
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>Name: {this.props.sheep.name}</div>
				<div>Color: {this.props.sheep.color}</div>
				<div>Weight: {this.props.sheep.weight}</div>
				<div>Tastiness: {this.props.sheep.tastiness}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		sheep: state.activeSheep
	};
}

export default connect(mapStateToProps)(SheepDetail);