import React, { Component } from 'react'

import { Chip } from 'material-ui'

class Skills extends Component {

	render() {
		let skills = fakeSkillPills.map((skill) => {
			return <Chip style={styles.chip}>{skill}</Chip>
		})
		return (
			<div style={styles.skillsBox}>
				{skills}
			</div>
		)
	}
}

const fakeSkillPills = ['leadership', 'cat-walking', 'netflix & chillin',
	'rbf', 'keeping the redbull can', 'emoji expert']

const styles = {
	skillsBox: {
		width: '250px',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},

	chip: {
		margin: '5px',
		flexBasis: 'fit-content',
	},
}

export default Skills