import React from 'react';
import Datetime from 'react-datetime';
import styles from './filterbar.css';

import { getCategories } from './datasource';


export default ({ filter, callback }) => {

  const categories = getCategories(); /* Pass via props? */
  
  return <div className={ styles.filterbar }>

    <button>
      <div className={ styles.triangleleft }/>
    </button>

    <div className={ styles.filtersection }>

      <select onChange={ e => {
        filter.genre = e.target.value;
        callback( filter );
      }}> {
        categories.genres.map( g =>
          <option value={ g } key={ g }>{ g }</option>
        )
      } </select>

      <select onChange={ e => {
        filter.type = e.target.value;
        callback( filter );
      }}> {
        categories.types.map( t =>
          <option value={ t } key={ t }>{ t }</option>
        )
      } </select>
      
    </div>

    <div className={ styles.filtersection }>
      <Datetime className={ styles.timepicker }
        defaultValue={ filter.datetime }
        dateFormat={ false }
        timeFormat={ 'h:mm A' }
        closeOnSelect = { true }
      />
      <Datetime className={ styles.datepicker }
        defaultValue={ filter.datetime }
        dateFormat={ 'ddd, MMM D' }
        timeFormat={ false }
        closeOnSelect = { true }
        onChange={ date => {
          filter.datetime = date;
          callback( filter );
        }}
      />
    </div>

    <button className={ styles.next }>
      <div className={ styles.triangleright }/>
    </button>

  </div>
}
