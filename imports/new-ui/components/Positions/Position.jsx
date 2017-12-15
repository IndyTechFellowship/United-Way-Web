import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Button, Card, Icon, Intent, Tag, Tooltip } from '@blueprintjs/core'

import PositionDialog from './PositionDialog'

class Position extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleDialog = this.toggleDialog.bind(this)
  }

  toggleDialog() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { position } = this.props
    return (
      <div>
        <div style={styles.card}>
          <Tooltip content="View more details about this position" hoverOpenDelay={200}>
            <Card interactive={true} onClick={this.toggleDialog}>
              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <Tooltip content={position.opportunityType === 'Board' ? 'Board Position' : 'Committee Position'} hoverOpenDelay={200}>
                    <div style={styles.icon(position.opportunityType === 'Board')}>
                      <Icon iconName={position.opportunityType === 'Board' ? 'pt-icon-person' : 'pt-icon-people'} />
                    </div>
                  </Tooltip>
                  <div style={{maxWidth: '90%'}} className="pt-text-overflow-ellipsis">
                    <h3 style={styles.h3}>{position.name}</h3>
                    <h6 style={styles.h3}>
                      <Tooltip content="View this organization's profile" hoverOpenDelay={200}>
                        <Link to={`/organizations/${position.organization._id}`}>{position.organization.name}</Link>
                      </Tooltip>
                    </h6>
                  </div>
                </div>
                <div style={styles.attributeContainer}>
                  <div style={styles.attributeColumn}>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Position Category</div>
                      <div>{position.positionType || '-'}</div>
                    </div>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Time Commitment</div>
                      <div>{position.timeCommitment || '-'}</div>
                    </div>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Monetary Commitment</div>
                      <div>{position.monetaryCommitment || '-'}</div>
                    </div>
                  </div>
                  <div style={styles.attributeColumn}>
                    <div style={styles.attribute}>
                      <div style={styles.label}>Desired Skills</div>
                      <div>{position.skills.length > 0 ? position.skills.map(skill => <Tag key={skill._id} style={styles.tag}>{skill.name}</Tag>) : '-'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Tooltip>
        </div>
        <PositionDialog 
          position={position}
          isOpen={this.state.isOpen}
          toggleDialog={this.toggleDialog}
        />
      </div>
    );
  }
}

Position.propTypes = {
  position: PropTypes.object
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
    paddingBottom: '30px'
  },
  icon: isBoardPosition => ({
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    background: isBoardPosition ? '#F29D49' : '#15B371',
    color: 'white',
    flexShrink: '0',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  }
}

export default Position;