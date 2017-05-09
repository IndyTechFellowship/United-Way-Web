import { Col, Row } from 'jsxstyle';
import { Avatar } from 'material-ui';
import React, { PropTypes } from 'react';

import { Colors } from '/imports/ui/styles';

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px',
  },
  label: {
    color: Colors.mediumGrey,
    fontSize: '13px',
    paddingBottom: '4px',
  },
  title: {
    color: Colors.darkGrey,
    fontSize: '19px',
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.mediumGrey,
    fontSize: '15px',
  },
};

const SearchResult = ({ avatar, label, onMouseOver, subtitle, title }) => (
  <Row style={styles.container}>
    <Col style={styles.leftContainer}>
      <span style={styles.label}>{label}</span>
      <span style={styles.title}>{title}</span>
      <span style={styles.subtitle}>{subtitle}</span>
    </Col>
    {avatar && <Avatar size={50} src={avatar} />}
  </Row>
);

SearchResult.propTypes = {
  avatar: PropTypes.string,
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SearchResult;