import { Col, Row } from 'jsxstyle'
import {
  Avatar,
  Card,
  CardHeader,
  CardTitle,
  Paper,
} from 'material-ui'
import React from 'react'

import { Colors } from '/imports/ui/styles';
import './searchResults.css'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    width: '100%',
  },
  header: {
    
  },
  textHeader: {
    marginLeft: '12px',
  },
  type: {
    color: Colors.mediumGrey,
    fontSize: '15px',
  },
  title: {
    color: Colors.darkGrey,
    fontSize: '20px',
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.mediumGrey,
    fontSize: '16px',
  },
};

const SearchResult = ({ avatar, onClick, subtitle, title, type }) => (
  <Paper className='resultItem' onClick={onClick} style={styles.container}>
    <Row style={styles.header}>
      <Avatar size={50} src={avatar} />
      <Col style={styles.textHeader}>
        <span style={styles.type}>{type}</span>
        <span style={styles.title}>{title}</span>
        <span style={styles.subtitle}>{subtitle}</span>
      </Col>
    </Row>
  </Paper>
)

export default SearchResult