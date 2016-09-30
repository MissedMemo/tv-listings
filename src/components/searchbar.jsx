import React from 'react';
import styles from './searchbar.css';

export default () => <form className={ styles.searchbar }>
  <input type="text" placeholder="find all the stuffs..."/>
  <button type="submit">
    <div className={ styles.magnifyingglass }>
    </div>
  </button>
</form>