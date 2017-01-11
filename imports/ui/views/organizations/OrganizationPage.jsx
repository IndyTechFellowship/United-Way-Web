import React, { Component } from 'react'

import OrganizationBasicInfo from '/imports/ui/views/organizations/OrganizationBasicInfo'
import AboutUsMission from '/imports/ui/views/organizations/AboutUsMission'
import PositionsList from '/imports/ui/views/organizations/PositionsList'

const test_org = {
  avatarUrl: 'http://unitedwaymoore.com/wp-content/uploads/united_way.jpg',
  name: "United Way",
  description: "We all have a stake in what befalls our fellow man. We all benefit when a child succeeds in school, when someone finds a job that will help them provide for their family, or when more people are able to access quality, affordable health care. The solutions we create for communities around the world go beyond short-term charity for a few.  When United Way’s support for Community Schools helps increase the graduation rate in the Vallejo City Unified School District by 11 percent in just three years, it’s not just the students, or even just the families of those students who benefit. Those proud graduates now have a much better chance of landing a job that pays a livable wage, of staying out of trouble with the law, and of living longer, healthier lives — and that translates into a safer, healthier and more prosperous community for everyone. We rise or fall together. With your support, we are reaching for great new heights.",
  info: {
    industryType: 'Economic Development',
    website: 'www.google.com',
  },
  images: [
    "http://www.swgeneral.com/assets/1/7/volunteeringHands.jpg",
    "http://www.nhs.uk/Livewell/volunteering/PublishingImages/why-volunteer_533x255_512194509.jpg",
  ],
}

// TODO: Move into org model?
const test_positions = [
  {
    name: 'Kitten Mental Health Specialist',
    description: 'Should be able to talk to all types of kittens in multiple languages.',
    positionType: 'Animal Services',
    opportunityType: 'committee',
    timeCommitment: '1 year',
    monetaryCommitment: '100',
    frequency: 'monthly',
    creator: 'Animal Kingdom',
    skills: ['empathetic', 'inter-species communication', 'love'],
    applicants: {},
    deadline: new Date(2017, 10, 10),
  },
  {
    name: 'Curriculum Chair',
    description: 'Get shit done.',
    positionType: 'Administration',
    opportunityType: 'board',
    timeCommitment: '2 years',
    monetaryCommitment: '2000',
    frequency: 'bi-weekly',
    creator: 'Mike Langy...',
    skills: ['beard', 'soylent', 'metro'],
    applicants: {},
    deadline: new Date(2017, 4, 8),
  },
]

const styles = {
  twoColumnLayout: {
    display: "flex",
    flexWrap: "wrap",
  },
  columnOne: {
    flex: 2,
    minWidth: 200,
  },
  columnTwo: {
    flex: 3,
    minWidth: 300,
  }
}

class OrganizationPage extends Component {

  render() {
    return (
      <div style={styles.twoColumnLayout}>
        <div style={styles.columnOne}>
          <OrganizationBasicInfo orgDetails={test_org}/>
          {/*TODO: Move into org model*/}
          <PositionsList positions={test_positions}/>
        </div>
        <div style={styles.columnTwo}>
          <AboutUsMission organization={test_org}/>
        </div>
      </div>
    )
  }

}

export default OrganizationPage
