import React, {Component} from 'react'
import {Popover, Menu, MenuItem} from 'material-ui'

class UserDropDown extends Component {

	render() {
		return (
			<Popover
					open={this.state.open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'left', vertical: 'top'}}
					onRequestClose={this.handleRequestClose}
			>
				<Menu>
					<MenuItem primaryText="Refresh" />
					<MenuItem primaryText="Help &amp; feedback" />
					<MenuItem primaryText="Settings" />
					<MenuItem primaryText="Sign out" />
				</Menu>
			</Popover>
		)
	}
}