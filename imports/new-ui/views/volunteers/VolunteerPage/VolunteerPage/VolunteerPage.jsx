import React from 'react';
import { Button, Card, Intent, NonIdealState, Tag, Tooltip } from '@blueprintjs/core'

import EditExperienceDialog from '/imports/new-ui/components/Experiences/EditExperienceDialog'
import EditVolunteerDialog from './EditVolunteerDialog'
import Experience from '/imports/new-ui/components/Experiences/Experience'
import Loader from '/imports/new-ui/components/Loader'

export default class VolunteerPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      addingVolunteerExperience: false,
      addingProfessionalExperience: false
    }
    this.toggleIsEditing = this.toggleIsEditing.bind(this)
    this.toggleAddVolunteerExperience = this.toggleAddVolunteerExperience.bind(this)
    this.toggleAddProfessionalExperience = this.toggleAddProfessionalExperience.bind(this)
  }

  toggleIsEditing() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  toggleAddVolunteerExperience() {
    this.setState({ addingVolunteerExperience: !this.state.addingVolunteerExperience })
  }

  toggleAddProfessionalExperience() {
    this.setState({ addingProfessionalExperience: !this.state.addingProfessionalExperience })
  }

  render() {
    const { loading, isMe, tags, volunteer } = this.props
    if (loading) return <Loader />
    return (
      <div style={styles.content}>
        <div style={styles.container}>
          <Card className="pt-fill">
            <div style={styles.card}>
                {isMe ?
                  <div style={styles.editButton}>
                    <Tooltip content="Edit this your profile" hoverOpenDelay={200}>
                      <Button
                        iconName='edit'
                        intent={Intent.PRIMARY}
                        text="Edit"
                        onClick={this.toggleIsEditing}
                      />
                    </Tooltip>
                  </div>
                : 
                  null
                }
              <div style={styles.icon(volunteer.profile.avatar ? volunteer.profile.avatar.original : '')}></div>
              <div>
                <h2 style={styles.header}>{volunteer.profile.firstName} {volunteer.profile.lastName}</h2>
                <h5 style={styles.header}>{volunteer.profile.tagline}</h5>
                <p>{volunteer.profile.summary}</p>
                <div style={styles.attributeContainer}>
                  <div style={styles.attributeColumn}>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Skills</div>
                      <div>{volunteer.profile.skills.length > 0 ? volunteer.profile.skills.map(tag => <Tag key={tag._id} style={styles.tag}>{tag.name}</Tag>) : '-'}</div>
                    </div>
                  </div>
                  <div style={styles.attributeColumn}>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Interests</div>
                      <div>{volunteer.profile.interests.length > 0 ? volunteer.profile.interests.map(tag => <Tag key={tag._id} style={styles.tag}>{tag.name}</Tag>) : '-'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          { volunteer.profile.volunteerExperiences.length > 0 || isMe
            ? <div style={styles.experiences}>
                <h2>Volunteer Experience</h2>
                <div style={styles.experienceCards}>
                  {
                    volunteer.profile.volunteerExperiences.length > 0 
                      ? volunteer.profile.volunteerExperiences.map(experience => <Experience key={experience._id} experience={experience} canEdit={isMe} volunteer={volunteer} experienceType='volunteer' />)
                      : <div style={styles.nonIdealState}>
                          <NonIdealState
                            visual="box"
                            title="No volunteer experiences added"
                            description="Click the button below to add a volunteer experience."
                          />
                        </div>
                  }
                </div>
                {isMe ?
                  <Button
                    className="pt-fill pt-large"
                    iconName='plus'
                    intent={Intent.PRIMARY}
                    text="Add Volunteer Experience"
                    onClick={this.toggleAddVolunteerExperience}
                  />
                :
                  null
                }
              </div>
            : null
          }
          { volunteer.profile.professionalExperiences.length > 0 || isMe
            ? <div style={styles.experiences}>
                <h2>Professional Experience</h2>
                <div style={styles.experienceCards}>
                  {
                    volunteer.profile.professionalExperiences.length > 0
                      ? volunteer.profile.professionalExperiences.map(experience => <Experience key={experience._id} experience={experience} canEdit={isMe} volunteer={volunteer} experienceType='professional' />)
                      : <div style={styles.nonIdealState}>
                          <NonIdealState
                            visual="box"
                            title="No professional experiences added"
                            description="Click the button below to add a professional experience."
                          />
                        </div>
                  }
                </div>
                {isMe ?
                  <Button
                    className="pt-fill pt-large"
                    iconName='plus'
                    intent={Intent.PRIMARY}
                    text="Add Professional Experience"
                    onClick={this.toggleAddProfessionalExperience}
                  />
                :
                  null
                }
              </div>
            : null
          }
        </div>
        <EditVolunteerDialog 
          volunteer={volunteer}
          tags={tags}
          isOpen={this.state.isEditing}
          toggleDialog={this.toggleIsEditing}
        />
        <EditExperienceDialog
          experienceType='volunteer'
          experience={{
            _id: null,
            title: '',
            companyName: '',
            description: '',
            location: '',
            startDate: null,
            endDate: null,
            tags: []
          }}
          volunteer={volunteer}
          isOpen={this.state.addingVolunteerExperience}
          toggleDialog={this.toggleAddVolunteerExperience}
        />
        <EditExperienceDialog
          experienceType='professional'
          experience={{
            _id: null,
            title: '',
            companyName: '',
            description: '',
            location: '',
            startDate: null,
            endDate: null,
            tags: []
          }}
          volunteer={volunteer}
          isOpen={this.state.addingProfessionalExperience}
          toggleDialog={this.toggleAddProfessionalExperience}
        />
      </div>
    )
  }
}

const styles = {
  content: {
    width: '960px',
    margin: '0 auto'
  },
  container: {
    margin: '20px 0'
  },
  header: {
    color: '#106BA3'
  },
  card: {
    display: 'flex',
    padding: '20px',
    position: 'relative'
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
  },
  editButton: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  nonIdealState: {
    margin: '32px 0',
    width: '100%'
  }
}