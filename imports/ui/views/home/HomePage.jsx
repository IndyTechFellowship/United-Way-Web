import React, { Component } from 'react'

import UsersList from '/imports/ui/views/users/UsersList'
import VolunteerExperienceList from '/imports/ui/components/UserProfileVolunteerExperience/VolunteerExperienceList'

class HomePage extends Component {

  render() {
    return (
	    <div>
		    <UsersList loading="" users=""/>
		    <VolunteerExperienceList />
	    </div>
    )
  }

}

export default HomePage
