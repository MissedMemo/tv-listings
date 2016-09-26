import React from 'react';
import classnames from 'classnames/bind';
import style from './app.css';

let cx = classnames.bind(style);

export default ({greeting}) => <div className={ cx('greeting') }>
  { greeting }
</div>;
