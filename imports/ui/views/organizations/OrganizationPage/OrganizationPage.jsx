import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';

import AboutUsMission from '/imports/ui/views/organizations/AboutUsMission'
import Breadcrumbs from '/imports/ui/components/Breadcrumbs'
import Content from '/imports/ui/components/Content'
import Loading from '/imports/ui/components/Loading'
import OrganizationBasicInfo from '/imports/ui/views/organizations/OrganizationBasicInfo'
import OrganizationPositionsList from '/imports/ui/views/organizations/OrganizationPositionsList'
import OrganizationProfileButtons from '/imports/ui/views/organizations/OrganizationProfileButtons'
import PositionsList from '/imports/ui/views/positions/PositionsList'
import Title from '/imports/ui/components/Title'
import OrganizationInterests from '/imports/ui/views/organizations/OrganizationInterests'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  twoColumnLayout: {
    display: "flex",
    flexWrap: "wrap",
    width: '100%'
  },
  columnOne: {
    flex: 1,
    minWidth: 200,
    marginRight: '16px'
  },
  columnTwo: {
    flex: 1,
    minWidth: 300,
    marginLeft: '16px'
  },
  tabs: {
    display: 'flex',
    alignItems: 'left',
    width: 400,
    backgroundColor: '#0091ea'
  },
  tabContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '80%',
    maxWidth: '1440px',
    margin: 'auto'
  },
  tabBar: {
    width: '100%',
    position: 'absolute',
    background: '#0091ea',
    height: '48px'
  }
}

class OrganizationPage extends Component {
  render() {
    let { loading, organization, isMyOrganization, tags } = this.props
    console.log(loading, organization, isMyOrganization)
    if (isMyOrganization) {
      return (
        <div>
          <div style={styles.tabBar}></div>
          <Tabs tabItemContainerStyle={styles.tabs} style={styles.tabContainerStyle}>
            <Tab label="Profile">
              <OrganizationTab loading={loading} organization={organization} tags={tags} />
            </Tab>
            <Tab label="Interested">
              <Content><OrganizationInterests organization={organization} /></Content>
            </Tab>
          </Tabs>
        </div>
      )
    } else {
      return (
        <div>
          <OrganizationTab loading={loading} organization={organization} tags={tags} />
        </div>
      )
    }
  }
}

class OrganizationTab extends Component {
  render() {
    if(this.props.loading) {
      return <Loading />
    } else {
      let positionsQuery = { _id: { $in: this.props.organization.positions }}

      return (
        <Content>
          <div style={styles.container}>
            <div style={styles.twoColumnLayout}>
              <div style={styles.columnOne}>
                <Breadcrumbs crumbs={[
                    {text: 'Organizations', path: '/organizations'},
                    {text: this.props.organization.name, path: null}
                  ]}
                />
                <OrganizationBasicInfo organization={this.props.organization} tags={this.props.tags} />
              </div>
              <div style={styles.columnTwo}>
                <OrganizationProfileButtons />
                <AboutUsMission organization={this.props.organization} />
              </div>
            </div>
            <OrganizationPositionsList 
              organization={this.props.organization} 
              positions={this.props.organization.positions} 
            />
          </div>
        </Content>
      )
    }
  }

}

OrganizationPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  organization: PropTypes.object.isRequired,
  isMyProfile: PropTypes.bool.isRequired
}

export default OrganizationPage
