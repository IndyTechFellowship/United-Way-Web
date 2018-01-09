import React, { Component } from 'react'
import { Button, Card, Intent, NonIdealState, Tag, Tooltip } from '@blueprintjs/core'

import EditPositionDialog from '/imports/new-ui/components/Positions/EditPositionDialog'
import EditOrganizationDialog from './EditOrganizationDialog'
import Loader from '/imports/new-ui/components/Loader'
import Position from '/imports/new-ui/components/Positions/Position'

class OrganizationPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      addingPosition: false
    }
    this.toggleIsEditing = this.toggleIsEditing.bind(this)
    this.toggleAddPosition = this.toggleAddPosition.bind(this)
  }

  toggleIsEditing() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  toggleAddPosition() {
    this.setState({ addingPosition: !this.state.addingPosition })
  }

  render() {
    const { loading, isMyOrganization, organization, tags } = this.props
    if (loading) return <Loader />
    let location = "-"
    if (organization.city && organization.state) {
      location = `${organization.city}, ${organization.state}`
    } else if (organization.city || organization.state) {
      location = organization.city || organization.state
    }
    return (
      <div style={styles.content}>
        <div style={styles.container}>
          <Card className="pt-fill">
            <div style={styles.card}>
              {isMyOrganization ?
                <div style={styles.editButton}>
                  <Tooltip content="Edit this organization's profile" hoverOpenDelay={200}>
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
              <div style={styles.icon(organization.avatarUrl)}></div>
              <div>
                <h2 style={styles.header}>{organization.name}</h2>
                <h5 style={styles.header}>{organization.tagline}</h5>
                <p>{organization.description}</p>
                <div style={styles.attributeContainer}>
                  <div style={styles.attributeColumn}>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Location</div>
                      <div>{location}</div>
                    </div>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Website</div>
                      <div>{organization.websiteUrl || '-'}</div>
                    </div>
                  </div>
                  <div style={styles.attributeColumn}>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Tags</div>
                      <div>
                        {
                          organization.tags.length > 0 
                            ? organization.tags.map(tag => 
                                <Tag
                                  key={tag._id} 
                                  style={styles.tag}
                                >
                                  {tag.name}
                                </Tag>
                              ) 
                            : '-'
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <div style={styles.positions}>
            <h2>Positions</h2>
            {
              organization.positions.length > 0 || isMyOrganization
              ? organization.positions.length > 0 
                  ? <div>
                      <div style={styles.positionCards}>
                        {
                          _.sortBy(organization.positions, ['name']).map(position => <Position key={position._id} position={position} />)
                        }
                      </div>
                      {isMyOrganization ?
                        <Button
                          className="pt-fill pt-large"
                          iconName='plus'
                          intent={Intent.PRIMARY}
                          text="Add Position"
                          onClick={this.toggleAddPosition}
                        />
                      :
                        null
                      }
                    </div>
                  :
                    <div>
                      <div style={styles.nonIdealState}>
                        <NonIdealState
                          visual="box"
                          title="No positions added"
                          description="Click the button below to add a position."
                        />
                      </div>
                      <Button
                        className="pt-fill pt-large"
                        iconName='plus'
                        intent={Intent.PRIMARY}
                        text="Add Position"
                        onClick={this.toggleAddPosition}
                      />
                    </div>
              :
                <div style={styles.nonIdealState}>
                  <NonIdealState
                    visual="box"
                    title="No positions currently open"
                    description="Check back later to see if any positions have become available."
                  />
                </div>
            }
          </div>
        </div>
        <EditOrganizationDialog 
          organization={organization}
          tags={tags}
          isOpen={this.state.isEditing}
          toggleDialog={this.toggleIsEditing}
        />
        <EditPositionDialog
          position={{
            _id: null,
            name: '',
            opportunityType: 'Committee',
            description: '',
            positionType: '',
            timeCommitment: '',
            monetaryCommitment: '',
            skills: [],
            organization: organization
          }}
          isOpen={this.state.addingPosition}
          toggleDialog={this.toggleAddPosition}
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
    borderRadius: '5px',
    border: '1px solid #106BA3',
    backgroundImage: `url(${avatarUrl})`,
    backgroundSize: 'contain',
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
  positions: {
    marginTop: '20px'
  },
  positionCards: {
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

export default OrganizationPage