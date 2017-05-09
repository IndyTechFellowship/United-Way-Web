import _ from 'lodash';
import React, { PropTypes } from 'react'

import SearchResult from './SearchResult';

const UserResult = ({ onMouseOver, user }) => (
  <SearchResult 
    avatar={_.get(user, 'profile.avatar.original')}
    label='Person'
    subtitle={user.profile.tagline}
    title={`${user.profile.firstName} ${user.profile.lastName}`} />
);

UserResult.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserResult;