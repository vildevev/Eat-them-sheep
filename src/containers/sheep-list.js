import React, { Component } from 'react';
import { connect } from 'react-redux'

class SheepList extends Component {
	renderList() {
		return this.props.sheep.map((sheep) => {
			return (
				<li key={sheep.name} className="list-group-item">{sheep.name}</li>
			);
		});
	}
	
	render() {
		<ul className="list-group col-sm-4">
			{this.renderList()}
		</ul>
	}
}


function mapStateToProps(state) {
	return (
		sheep: state.sheep
	);
}

export default connect(mapStateToProps)(SheepList);