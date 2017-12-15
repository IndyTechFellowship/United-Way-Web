import React, { Component } from 'react'

import { Tabs2, Tab2 } from '@blueprintjs/core'

class AboutPage extends Component {

  render() {
    return (
      <div style={styles.content}>
        <div style={styles.aboutContainer}>
          <Tabs2 id="Tabs2Example" vertical={true}>
            <Tab2 id="rx" title="Overview" panel={<Overview />} />
            <Tab2 id="ng" title="For Interested Individuals" panel={<InterestedIndividuals />} />
            <Tab2 id="mb" title="For Mission-Aligned Nonprofits" panel={<Nonprofits />} />
          </Tabs2>
        </div>
      </div>
    )
  }

}

const Overview = () => {
  return (
    <div>
      <h3>Overview</h3>
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
        <br />
        <h6>PLEASE NOTE:</h6> 
        <div style={styles.block}>
          <i>
            Due to the special role that board/committee members play as volunteers of a nonprofit organization, and the fact that board/committee membership that may require a formal application and selection process, BoardServeIndy requires engaged mission-aligned nonprofits and dedicated volunteers who are willing to commit to a process that demands active participation throughout all stages – from initial interest, mutual contact, conversations and cultivation, through the final decision of the mission-aligned nonprofit organization.
          </i>
        </div>
        <div style={styles.block}>
          <i>
            BoardServeIndy does not verify background information provided by prospective board/committee candidates and participating mission-aligned nonprofit organizations. All participants are encouraged and expected to engage in their own due diligence throughout the matching process.
          </i>
        </div>
      </div>
    </div>
  )
}

const InterestedIndividuals = () => {
  return (
    <div>
      <h3>For Interested Individuals</h3>
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
  )
}

const Nonprofits = () => {
  return (
    <div>
      <h3>For Mission-Aligned Nonprofits Seeking Board/Committee Members</h3>
      <div>
        The United Way of Central Indiana (UWCI) believes that high functioning or "healthy" boards are key assets for building organizational capacity. Healthy boards enable organizations to respond strategically to new challenges and to garner the human & financial resources needed to strengthen, stabilize and sustain their organizations. This is why UWCI is committed to strengthening the capacity of our agencies and partners.
      </div>
      <br />
      <h5>Who can participate?</h5>
      <div style={styles.block}>
        UWCI agencies and partners looking for change makers or the chance to diversify their boards/committees stand to benefit the most from BoardServeIndy. 
      </div>
      <div style={styles.block}>
        We’re looking for organizations focused on Education, Health, Financial Stability or Basic Needs and providing services one of UWCI’s six counties (Boone, Hamilton, Hancock, Hendricks, Marion or Morgan).
      </div>
    </div>
  )
}

const styles = {
  content: {
    width: '960px',
    margin: '0 auto'
  },

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
    color: '#0091ea',
    marginTop: '48px'
  },

  subSubHeader: {
    color: '#0091ea',
    fontSize: '16px'
  },

  aboutContainer: {
    padding: '40px',
    background: 'white'
  },
  text: {
    width: '500px'
  }
}

export default AboutPage