import React, { Component } from 'react'
import OrganizationLogo from '/imports/ui/components/UserProfileVolunteerExperience/OrganizationLogo'
import VolunteerExperienceDescription from '/imports/ui/components/UserProfileVolunteerExperience/VolunteerExperienceDescription'

class VolunteerExperienceContent extends Component {

	render() {
		return (
			<div>
				VolunteerExperienceContent
				<OrganizationLogo/>
				<VolunteerExperienceDescription/>
			</div>
		)
	}
}

export default VolunteerExperienceContent