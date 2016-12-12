import React, {Component} from 'react'
import VolunteerExperienceContent from '/imports/ui/views/users/VolunteerExperienceList/VolunteerExperienceContent'

class VolunteerExperienceList extends Component {

  render() {
    let VolunteerExperienceList = testExperienceList.map((item) => {
      return <VolunteerExperienceContent key={item.userId} volunteerExperience={item}/>

    })

    return (
        <div style={styles.listContainer}>
          <div style={styles.title}>Volunteer Experience</div>
          <div style={styles.listContainer}>
            {VolunteerExperienceList}
          </div>
        </div>
    )
  }
}

const testExperienceList = [
  {
    userId: 1,
    logoUrl: 'http://media.vocativ.com/photos/2015/01/Hipster-Statistics-001928277552.jpg',
    jobTitle: 'Hipster',
    companyName: 'Chic Inc.',
    startDate: new Date(2011, 6),
    endDate: new Date(2012, 7),
    current: false,
    description: 'We have really cool instagrams.'
  },
  {
    userId: 2,
    logoUrl: 'http://s3.amazonaws.com/digitaltrends-uploads-prod/2015/07/GoPro-is-working-on-a-new-mobile-app-that-will-let-you-edit-and-share-videos1.jpg',
    jobTitle: 'Personal GoPro Holder',
    companyName: 'EDM Unite',
    startDate: new Date(2014, 4),
    endDate: new Date(2015, 12),
    current: false,
    description: 'Just check out my youtube channel.'
  },
  {
    userId: 3,
    logoUrl: 'http://www.adventurecats.org/wp-content/uploads/2015/09/harness2-e1443158795556.jpg',
    jobTitle: 'Cat Walker',
    companyName: 'Meow You See Me',
    startDate: new Date(1999, 4),
    endDate: null,
    description: 'Special strength in multi-cat walking.'
  },
]

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: '20px',
  },
}

export default VolunteerExperienceList