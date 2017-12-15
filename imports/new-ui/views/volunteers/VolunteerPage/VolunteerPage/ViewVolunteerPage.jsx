import React from 'react';
import { Button, Card, Intent, Tag } from '@blueprintjs/core'

import Experience from '/imports/new-ui/components/Experiences/Experience'

const ViewVolunteerPage = ({ volunteer }) => {
  return (
    <div style={styles.container}>
      <Card className="pt-fill">
        <div style={styles.card}>
          <div style={styles.icon(volunteer.profile.avatar ? volunteer.profile.avatar.original : '')}></div>
          <div>
            <h2 style={styles.header}>{volunteer.profile.firstName} {volunteer.profile.lastName}</h2>
            <h5 style={styles.header}>{volunteer.profile.tagline}</h5>
            <p>{volunteer.profile.summary}</p>
            <div style={styles.attributeContainer}>
              <div style={styles.attributeColumn}>
                <div style={styles.attribute}>
                  <div style={styles.label}>Interests</div>
                  <div>{volunteer.profile.interests.length > 0 ? volunteer.profile.interests.map(tag => <Tag key={tag._id} style={styles.tag}>{tag.name}</Tag>) : '-'}</div>
                </div>
              </div>
              <div style={styles.attributeColumn}>
                <div style={styles.attribute}>
                  <div style={styles.label}>Skills</div>
                  <div>{volunteer.profile.skills.length > 0 ? volunteer.profile.skills.map(tag => <Tag key={tag._id} style={styles.tag}>{tag.name}</Tag>) : '-'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div style={styles.experiences}>
        <h2>Volunteer Experience</h2>
        <div style={styles.experienceCards}>
          {
            volunteer.profile.volunteerExperiences.length > 0 
              ? volunteer.profile.volunteerExperiences.map(experience => <Experience key={experience._id} experience={experience} />)
              : <div className="pt-non-ideal-state">
                  <h4 className="pt-non-ideal-state-title">No volunteer experiences</h4>
                </div>
          }
        </div>
      </div>
      <div style={styles.experiences}>
        <h2>Professional Experience</h2>
        <div style={styles.experienceCards}>
          {
            volunteer.profile.professionalExperiences.length > 0
              ? volunteer.profile.professionalExperiences.map(experience => <Experience key={experience._id} experience={experience} />)
              : <div className="pt-non-ideal-state">
                  <h4 className="pt-non-ideal-state-title">No professional experiences</h4>
                </div>
          }
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px 0'
  },
  header: {
    color: '#106BA3'
  },
  card: {
    display: 'flex',
    padding: '20px'
  },
  icon: avatarUrl => ({
    height: '240px',
    width: '240px',
    borderRadius: '50%',
    border: '1px solid #106BA3',
    backgroundImage: `url(${avatarUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    color: 'white',
    flexShrink: '0',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  attributeContainer: {
    display: 'flex',
    height: '100%',
    overflow: 'auto',
    marginTop: '20px'
  },
  attributeColumn: {
    flex: '0 0 50%'
  },
  attribute: {
    padding: '0 10px 10px 0'
  },
  label: {
    fontWeight: 'bold'
  },
  tag: {
    margin: '2px'
  },
  experiences: {
    marginTop: '20px'
  },
  experienceCards: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

export default ViewVolunteerPage;