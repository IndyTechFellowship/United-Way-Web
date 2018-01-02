import _ from 'lodash'
import React, { Component } from 'react'
import { Popover } from '@blueprintjs/core'

import Tag from './Tag'

export default class TagPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  render() {
    const { loading, children, selectedTags, tags, onSelect } = this.props
    return (
      <Popover>
        <div>{children}</div>
        <div style={styles.tagPopover}>
          <div style={styles.tagSearch}>
            <div className="pt-input-group">
              <span className="pt-icon pt-icon-search"></span>
              <input 
                className="pt-input" 
                placeholder="Search tags" 
                dir="auto"
                onChange={(e) => this.setState({ filter: e.target.value.toLowerCase() })}
              />
            </div>
          </div>
          <div style={styles.tagContainer}>
            {_.filter(tags, tag => tag.name.toLowerCase().indexOf(this.state.filter) !== -1).map(tag => <Tag key={tag._id} tag={tag} selected={!!_.find(selectedTags, { _id: tag._id })} onSelect={onSelect} />)}
          </div>
        </div>
      </Popover>
    )
  }

}

const styles = {
  tagPopover: {
    background: 'white',
    padding: '8px',
    borderRadius: '5px'
  },
  tagContainer: {
    height: '300px',
    overflow: 'auto',
    border: '1px solid lightgray',
    width: '300px'
  },
  tagOption: {
    padding: '10px',
    borderBottom: '1px solid lightgray'
  },
  tagSearch: {
    marginBottom: '4px'
  }
}