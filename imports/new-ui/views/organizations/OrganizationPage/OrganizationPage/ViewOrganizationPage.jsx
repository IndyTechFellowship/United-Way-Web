import React from 'react';
import { Button, Card, Intent, Tag } from '@blueprintjs/core'

import Position from '/imports/new-ui/components/Positions/Position'

const ViewOrganizationPage = ({ organization }) => {
  let location = "-"
  if (organization.city && organization.state) {
    location = `${organization.city}, ${organization.state}`
  } else if (organization.city || organization.state) {
    location = organization.city || organization.state
  }
  return (
    <div style={styles.container}>
      <Card className="pt-fill">
        <div style={styles.card}>
          <Button
            iconName='edit'
            intent={Intent.PRIMARY}
            className='pt-minimal'
            style={styles.editButton}
            text="Edit"
          />
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
                  <div>http://uwci.org</div>
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
        <div style={styles.positionCards}>
          {
            organization.positions.map(position => <Position key={position._id} position={position} />)
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
  }
}

export default ViewOrganizationPage;