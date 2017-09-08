import _ from 'lodash';

export function CloudinaryTransformToAvatar(url, width=400) {
  return _.replace(url, '/upload/', `/upload/c_fill,h_${width},w_${width}/`);
};