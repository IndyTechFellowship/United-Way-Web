import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Button, Card, Icon, Intent, Position, Tag, Tooltip } from '@blueprintjs/core'



class Organization extends Component {

  render() {
    const { organization } = this.props
    let location = "-"
    if (organization.city && organization.state) {
      location = `${organization.city}, ${organization.state}`
    } else if (organization.city || organization.state) {
      location = organization.city || organization.state
    }
    return (
      <div>
        <div style={styles.card}>
          <Tooltip content="View more details about this organization" hoverOpenDelay={200}>
            <Link to={`/organizations/${organization._id}`} style={styles.link}>
              <Card interactive={true}>
                <div style={styles.cardContent}>
                  <div style={styles.cardHeader}>
                    <div style={styles.icon(organization.avatarUrl || '')}>
                    </div>
                    <div style={{maxWidth: '90%'}} className="pt-text-overflow-ellipsis">
                      <h3 style={styles.h3}>{organization.name}</h3>
                      <h6 style={styles.h3}>{organization.tagline}</h6>
                    </div>
                  </div>
                  <div style={styles.attribute}>
                    <div style={styles.label}>Summary</div>
                    <div style={styles.summary}>{organization.description}</div>
                  </div>
                  <div style={styles.attributeContainer}>
                    <div style={styles.attributeColumn}>
                      <div style={styles.attribute}>
                        <div style={styles.label}>Location</div>
                        <div>{location}</div>
                      </div>
                    </div>
                    <div style={styles.attributeColumn}>
                      <div style={styles.attribute}>
                        <div style={styles.label}>Tags</div>
                        <div>{organization.tags.length > 0 ? organization.tags.map(tag => <Tag key={tag._id} style={styles.tag}>{tag.name}</Tag>) : '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </Tooltip>
        </div>
      </div>
    );
  }
}

Organization.propTypes = {
  organization: PropTypes.object
};

const styles = {
  card: {
    marginRight: '10px',
    marginBottom: '10px',
  },
  cardContent: {
    width: '430px',
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: '50px'
  },
  icon: avatarUrl => ({
    height: '60px',
    width: '60px',
    borderRadius: '5px',
    border: '1px solid #106BA3',
    background: `url(${avatarUrl})`,
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
  h3: {
    color: '#106BA3'
  },
  cardFooter: {
    flexShrink: '0',
    marginTop: '20px'
  },
  attributeContainer: {
    display: 'flex',
    height: '100%',
    overflow: 'auto'
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
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  summary: {
    overflow: 'scroll',
    maxHeight: '75px'
  }
}

export default Organization;