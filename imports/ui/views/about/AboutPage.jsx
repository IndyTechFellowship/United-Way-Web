import React, { Component } from 'react'

import Content from '/imports/ui/components/Content'

class AboutPage extends Component {

  render() {
    return (
      <Content>
        <div style={styles.aboutContainer}>
          <h1 style={styles.header}>About</h1>
          <div>
            <div style={styles.block}>
              Welcome to BoardServeIndy, a United Way of Central Indiana initiative launched to increase volunteerism and
              support mission-aligned nonprofits within Central Indiana.
            </div>
            <div style={styles.block}>
              BoardServeIndy builds the capacity of mission-aligned nonprofits in Central Indiana by connecting them to a
              pool of prospective board and committee members.
            </div>
            <div style={styles.block}>
              The candidates represent a cross-section of Central Indiana residents of varied skills and backgrounds,
              all of whom are interested in non-profit board/committee service.
            </div>
          </div>
          <h2 style={styles.subHeader}>For Interested Individuals</h2>
          <div>Nonprofit board/committee service is a rewarding experience.
            By serving on the board or committee of a nonprofit organization, you will:
          </div>
          <ul>
            <li style={styles.list}>Connect with others who share your passion</li>
            <li style={styles.list}>Contribute your skills, expertise, and access to resources to strengthen nonprofit organizations in Central Indiana</li>
            <li style={styles.list}>Support and strengthen the community in which you live or work</li>
            <li style={styles.list}>Rally support and invite others to join you in advocating on behalf of the nonprofit’s mission</li>
            <li style={styles.list}>Develop new skills and hone your leadership abilities</li>
            <li style={styles.list}>Expand your social and professional networks</li>
          </ul>
          <div>
            Nonprofit organizations that participate in BoardServeIndy represent work around –
            education, health, financial stability and basic needs. They are actively seeking to broaden, strengthen, and
            diversify their existing boards/committees, and are looking for individuals with the following characteristics:
          </div>
          <ul>
            <li style={styles.list}>Live and/or work in Boone, Hamilton, Hancock, Hendricks, Marion or Morgan counties</li>
            <li style={styles.list}>Diversity in life experience, age, ethnicity, and profession, including expertise in any of the following
              fields: accounting, finance, governance, human resources, law, information technology, management/operations,
              marketing, public relations, fundraising, strategic planning, engineering, and many others.
            </li>
            <li style={styles.list}>Interest in, and enthusiasm for, board/committee service and volunteerism</li>
            <li style={styles.list}>Ability to commit time needed based on the volunteer role</li>
          </ul>
          <div>
            BoardServeIndy is eager to help you find the right match for your interests and skills.
            We welcome your participation in BoardServeIndy and wish you success in becoming a board member
            of a nonprofit organization of your choice.
          </div>
        </div>
      </Content>
    )
  }

}

const styles = {
  block: {
    margin: '0 0 16px 0',
  },

  list: {
    margin: '0 0 8px 0',
  },

  header: {
    color: '#0091ea',
  },

  subHeader: {
    color: '#0091ea'
  },

  aboutContainer: {
    margin: '0 0 40px 0',
    fontSize: '14px'
  },
}

export default AboutPage
