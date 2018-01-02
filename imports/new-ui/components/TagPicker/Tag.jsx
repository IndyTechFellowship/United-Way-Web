import _ from 'lodash'
import React, { Component } from 'react'

export default class Tag extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  render() {
    const { onSelect, tag, selected } = this.props
    return (
      <div 
        style={selected ? styles.selectedTagOption : styles.tagOption(this.state.hover)}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        onClick={selected ? null : () => onSelect(tag)}
      >
        {tag.name}
      </div>
    )
  }

}

const styles = {
  tagOption: hover => ({
    padding: '10px',
    borderBottom: '1px solid lightgray',
    background: hover ? '#EBF1F5' : 'white',
    cursor: hover ? 'pointer' : 'default'
  }),
  selectedTagOption: {
    padding: '10px',
    borderBottom: '1px solid lightgray',
    background: '#F5F8FA',
    color: '#A7B6C2'
  }
}