import React from 'react';
//import classnames from 'classnames/bind';
import SearchBar from './searchbar';
import NavBar from './navbar';
import styles from './header.css'; 

export default () => <div className={ styles.header }>

  <div className={ styles.row1 }>
    <a href="#" className={ styles.infolink }>login</a>
    &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
    <a href="#" className={ styles.infolink }>about</a>
  </div>

  <div className={ styles.row2 }>

    <div className={ styles.logo }>
      What's<em>On!</em>
    </div>

    <div className={ styles.tagline }>
      "The best TV listings guide for the interwebs!"
    </div>

  </div>

  <div className={ styles.row3 }>
    <SearchBar />
  </div>

  <div className={ styles.row4 }>
    <NavBar />
  </div>

</div>;
