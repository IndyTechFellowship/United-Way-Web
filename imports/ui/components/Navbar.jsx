import React, { Component } from 'react'
import {
  Toolbar, 
  ToolbarGroup,
  FlatButton,
  AutoComplete} from 'material-ui'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true} style={toolbarGroupStyle}>
            <img src="auw.png" height="45px" width="45px" />
            <FlatButton label="Feed" />
            <FlatButton label="About" />
            <AutoComplete
              hintText="Search"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
            />
            <FlatButton label="Agencies" />
            <FlatButton label="People" />
            <img src="account_circle.png" height="45px" width="45px" />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  handleFeedClick() {

  }

  handleAboutClicked() {

  }

  handleAgenciesClicked() {

  }

  handlePeopleClicked() {

  }

}

const toolbarGroupStyle = {
  margin: 'auto',
  width: '50%'
}

export default Navbar
