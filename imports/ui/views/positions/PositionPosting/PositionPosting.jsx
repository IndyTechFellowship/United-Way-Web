import React, {Component} from 'react'

import PositionBasics from './PositionBasics'
import PositionDetails from './PositionDetails'

class PositionPosting extends Component {
	constructor(props) {
		super(props)
	}

	handleShowMore() {
		console.log('show more clicked');
	}

	render() {
		return (
			<div style={styles.positionContainer}>
				<PositionBasics position={this.props.position}/>
				<PositionDetails position={this.props.position}/>

				<div onClick={this.handleShowMore} style={styles.showMore}>Show More</div>
			</div>
		)
	}
}

const styles = {
	positionContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '300px',
		height: '300px',
	},

	showMore: {
		color: 'blue',
		textDecoration: 'underline',
	},
}

export default PositionPosting