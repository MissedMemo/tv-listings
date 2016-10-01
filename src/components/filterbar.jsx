import React from 'react';
import styles from './filterbar.css';

export default () => <div className={ styles.filterbar }>
  <button>&lt;</button>
  <div className={ styles.filtersection }>
    <select>
      <option value="all-types">All Program Types</option>
      <option value="documentaries">Documentaries</option>
      <option value="films">Films</option>
      <option value="sports">Sporting Events</option>
    </select>
    <select>
      <option value="all-genres">All Genres</option>
      <option value="comedy">Comedy</option>
      <option value="drama">Drama</option>
      <option value="science">Science</option>
      <option value="politics">Politics</option>
    </select>
  </div>
  <div className={ styles.filtersection }>
    <input type='date' />
    <input type='time' />
  </div>
  <button>&gt;</button>
</div>;