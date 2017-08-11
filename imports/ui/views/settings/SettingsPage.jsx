import { 
  Card,
  CardHeader,
} from 'material-ui'
import Lock from 'material-ui/svg-icons/action/lock'
import React, { Component } from 'react'

import ChangePasswordCard from './ChangePasswordCard'

const styles = {
  container: {
    padding: '30px 100px',
  },
};

const SettingsPage = ({ }) => (
  <div style={styles.container}>
    <ChangePasswordCard />
  </div>
);

export default SettingsPage
