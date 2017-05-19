import React, { Component, PropTypes } from 'react'
import { TagCloud } from 'react-tagcloud'
import { Link } from 'react-router'

import Breadcrumbs from '/imports/ui/components/Breadcrumbs'
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
    marginRight: '32px'
  },
  columnTwo: {
    flex: 1,
    minWidth: 300,
    marginLeft: '32px'
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
      const interests = this.props.user.interests.map((interest,index) => ({
        value: interest.name,
        count: index
      }))
      const customRenderer = (tag, size, color) => {
        return (
          <div 
            key={tag.value} 
            style={Object.assign({fontSize: size}, styles.tag)} 
          >
            {tag.value}
          </div>
        )
      }
      const name = `${this.props.user.firstName} ${this.props.user.lastName}`
      return (
        <div style={styles.twoColumnLayout}>
          <div style={styles.columnOne}>
            <Breadcrumbs crumbs={[
                {text: 'Volunteers', path: '/users'},
                {text: name, path: null}
              ]}
            />
            <UserBasicInfo user={this.props.user} />
            <Title>Interests</Title>
            <TagCloud 
              style={styles.cloud}
              minSize={18}
              maxSize={36}
              tags={interests}
              renderer={customRenderer}
              disableRandomColor={true} 
            />
            <ProfessionalExperienceList experiences={this.props.user.professionalExperiences}/>
          </div>
          <div style={styles.columnTwo}>
            <UserProfileButtons />
            <Summary summary={this.props.user.summary} />
            { this.props.user.volunteerExperiences.length > 0 ? <VolunteerExperienceList experiences={this.props.user.volunteerExperiences}/> : "" }
          </div>
        </div>
      )
    }
  }

}

UserPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
}

export default UserPage
