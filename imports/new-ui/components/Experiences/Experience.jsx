import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Button, Card, Icon, Intent, Position, Tag, Tooltip } from '@blueprintjs/core'



class Experience extends Component {

  render() {
    const { experience } = this.props
    return (
      <div>
        <div style={styles.card}>
          <Tooltip content="View more details about this experience" hoverOpenDelay={200}>
            <Card interactive={true}>
              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <div style={styles.icon('')}>
                  </div>
                  <div style={{maxWidth: '90%'}} className="pt-text-overflow-ellipsis">
                    <h3 style={styles.h3}>{experience.title}</h3>
                    <h6 style={styles.h3}>{experience.companyName}</h6>
                  </div>
                </div>
                <div style={styles.attributeContainer}>
                  <div style={styles.attributeColumn}>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Location</div>
                      <div>{experience.location}</div>
                    </div>
                  </div>
                  <div style={styles.attributeColumn}>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Description</div>
                      <div>{experience.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Tooltip>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  experience: PropTypes.object
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
  }
}

export default Experience;