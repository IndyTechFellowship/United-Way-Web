import React, { Component, PropTypes } from 'react'
import { TagCloud } from 'react-tagcloud'
import { Link } from 'react-router'

import Breadcrumbs from '/imports/ui/components/Breadcrumbs'
import Interests from '/imports/ui/views/users/Interests'
import Loading from '/imports/ui/components/Loading'
import ProfessionalExperienceList from '/imports/ui/views/users/ProfessionalExperienceList'
import Summary from '/imports/ui/views/users/Summary'
import Title from '/imports/ui/components/Title'
import UserBasicInfo from '/imports/ui/views/users/UserBasicInfo'
import UserProfileButtons from '/imports/ui/views/users/UserProfileButtons'
import VolunteerExperienceList from '/imports/ui/views/users/VolunteerExperienceList'

const test_user = {
  avatarUrl: 'http://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg',
  name: "John Smith",
}

const styles = {
  twoColumnLayout: {
    display: "flex",
    flexWrap: "wrap",
  },
  columnOne: {
    flex: 1,
    minWidth: 200,
    marginRight: '24px'
  },
  columnTwo: {
    flex: 1,
    minWidth: 300,
    marginLeft: '24px'
  },
  cloud: {
    display: 'flex',
    margin: '16px auto',
    maxWidth: '420px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tag: {
    padding: '4px'
  }
}

class UserPage extends Component {

  render() {
    if(this.props.loading) {
      return <Loading />
    } else {
      const name = `${this.props.user.profile.firstName} ${this.props.user.profile.lastName}`
      return (
        <div style={styles.twoColumnLayout}>
          <div style={styles.columnOne}>
            <Breadcrumbs crumbs={[
                {text: 'Volunteers', path: '/users'},
                {text: name, path: null}
              ]}
            />
            <UserBasicInfo user={this.props.user} tags={this.props.tags} />
            <Interests user={this.props.user} tags={this.props.tags} />
            <ProfessionalExperienceList experiences={this.props.user.profile.professionalExperiences}/>
          </div>
          <div style={styles.columnTwo}>
            <UserProfileButtons />
            <Summary user={this.props.user} />
            { this.props.user.profile.volunteerExperiences.length > 0 ? <VolunteerExperienceList user={this.props.user} experiences={this.props.user.profile.volunteerExperiences}/> : "" }
          </div>
        </div>
      )
    }
  }

}

UserPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired
}

export default UserPage
