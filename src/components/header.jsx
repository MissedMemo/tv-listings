import React from 'react';
import classnames from 'classnames/bind';
import styles from './header.css'; 

export default () => <div className={ styles.header }>
  <div className={ styles.logo }>
    What's<em>On!</em>
  </div>
</div>;
