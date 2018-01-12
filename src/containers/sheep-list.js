import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSheep } from '../actions/index';
import { bindActionCreators } from 'redux';

class SheepList extends Component {
	renderList() {
		return this.props.sheep.map((sheep) => {
			return (
				<li 
					key={sheep.name} 
					onClick={() => this.props.selectSheep(sheep)}
					className="list-group-item">
					{sheep.name}
				</li>
			);
		});
	}
	
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}


function mapStateToProps(state) {
	return {
		sheep: state.sheep
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectSheep: selectSheep }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SheepList);