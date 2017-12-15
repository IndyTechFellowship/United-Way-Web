import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Button, Dialog, Icon, Intent, Popover, Position, Tag, Tooltip } from '@blueprintjs/core'

import ShowInterestPopover from './ShowInterestPopover'

class PositionDialog extends Component {

  render() {
    const { position, isOpen, toggleDialog } = this.props
    return (
      <Dialog
        isOpen={isOpen} 
        onClose={toggleDialog}
        title={<div>Position Details</div>}
      >
        <div className="pt-dialog-body" style={styles.dialogContent}>
          <div style={styles.cardHeader}>
            <div>
              <h3 style={styles.h3}>{position.name}</h3>
              <h6>
                <Tooltip content="View this organization's profile" hoverOpenDelay={200}>
                  <Link to={`/organizations/${position.organization._id}`}>{position.organization.name}</Link>
                </Tooltip>
              </h6>
            </div>
            <div style={styles.actions}>
              <Tooltip content="Bookmark this position for later" hoverOpenDelay={200}>
                <Button intent={Intent.PRIMARY} className="pt-icon-bookmark" text="Bookmark" />
              </Tooltip>
            </div>
          </div>
          <div>
            <p>{position.description}</p>
          </div>
          <div style={styles.attributeContainer}>
            <div style={styles.attributeColumn}>
              <div style={styles.attribute}>
                <div style={styles.label}>Position Category</div>
                <div>Hello</div>
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
                <div style={styles.label}>Position Type</div>
                <div>
                  <span style={styles.icon(position.opportunityType === 'Board')}><Icon iconName={position.opportunityType === 'Board' ? 'pt-icon-person' : 'pt-icon-people'} /></span>
                  {position.opportunityType === 'Board' ? 'Board' : 'Committee'}
                </div>
              </div>
              <div style={styles.attribute}>
                <div style={styles.label}>Desired Skills</div>
                <div>{position.skills.length > 0 ? position.skills.map(skill => <Tag key={skill._id} style={styles.tag}>{skill.name}</Tag>) : '-'}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-dialog-footer" style={styles.dialogFooter}>
          <Button text="Close" onClick={toggleDialog} />
          {false ?
            <Tooltip style={{display: 'none'}} content="Recommend someone for this position" hoverOpenDelay={200}>
              <Button 
                intent={Intent.PRIMARY} 
                className="pt-icon-people" 
                text="Recommend"
              />
            </Tooltip>
          :
            <Tooltip content="Tell the organization you are interested in their position" hoverOpenDelay={200}>
              <Popover 
                position={Position.TOP}
                content={<ShowInterestPopover />} 
                target={
                  <Button 
                    text="Show Interest"
                    intent={Intent.PRIMARY}
                    className="pt-icon-endorsed"
                  />
                } 
              />
            </Tooltip>
          }
        </div>
      </Dialog>
    );
  }
}

PositionDialog.propTypes = {
  position: PropTypes.object,
  isOpen: PropTypes.bool,
  toggleDialog: PropTypes.func
};

const styles = {
  h3: {
    color: '#106BA3',
    lineHeight: '1em'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: '10px'
  },
  icon: isBoardPosition => ({
    color: isBoardPosition ? '#F29D49' : '#15B371',
    marginRight: '5px'
  }),
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
  dialogContent: {
    padding: '0 10px'
  },
  dialogFooter: {
    padding: '0 10px 10px 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '20px'
  }
}

export default PositionDialog;