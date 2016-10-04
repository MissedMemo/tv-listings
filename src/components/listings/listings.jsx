import React from 'react';
import FilterBar from './filterbar';
import styles from './listings.css';

export default () => <div className={ styles.listings }>
  <FilterBar />
  <div className={ styles.message }>
    <h3>this is our default LISTINGS view...</h3>
  </div>
</div>;