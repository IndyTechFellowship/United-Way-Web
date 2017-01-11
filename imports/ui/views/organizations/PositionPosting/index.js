import React, {Component} from 'react'

class PositionPosting extends Component {
	render() {
		return (
			<div>
				Posted Position
				<div style={styles.basicInfoContainer}>
					<div>
						Icon
					</div>
					<div>
						Header data
					</div>
					<div>
						interest button
					</div>
				</div>
				<div style={styles.descriptionContainer}>
					more details and description
				</div>
			</div>
		)
	}
}

const styles = {
	basicInfoContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	detailsContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
}

export default PositionPosting