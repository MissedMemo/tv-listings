import React from 'react';
import classnames from 'classnames/bind';
import styles from './header.css'; 

export default () => <div className={ styles.header }>
  <div className={ styles.attention }>
    <div className={ styles.logo }>
      What's<em>On!</em>
    </div>
    <div className={ styles.tagline }>
      "The best TV listings guide for the interwebs!"
    </div>
    <div className={ styles.infobar }>
      <a href="#" className={ styles.infolink }>login</a>
      &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
      <a href="#" className={ styles.infolink }>about</a>
    </div>
  </div>
</div>;
