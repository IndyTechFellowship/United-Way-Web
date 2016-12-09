import React, { Component } from 'react'

import UsersList from '/imports/ui/views/users/UsersList'

class HomePage extends Component {

  render() {
    return (
	    <div>
		    <UsersList loading="" users=""/>
	    </div>
    )
  }

}

export default HomePage
