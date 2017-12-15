import React from 'react';
import { ClipLoader } from 'halogen'

const Loader = () => {
  return (
    <div style={styles.loader}>
      <ClipLoader color="#394B59" />
    </div>
  );
};

const styles = {
  loader: {
    height: '100%',
    minHeight: '200px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Loader;