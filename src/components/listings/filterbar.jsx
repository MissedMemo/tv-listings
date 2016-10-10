import React from 'react';
import styles from './filterbar.css';


export default () => <div className={ styles.filterbar }>
  <button>
    <div className={ styles.triangleleft }/>
  </button>
  <div className={ styles.filtersection }>
    <select>{ genres.map(
      genre => <option value={ genre.value }>{ genre.text }</option>
    )}</select>
    <select>{ types.map(
      type => <option value={ type.value }>{ type.text }</option>
    )}</select>
  </div>
  <div className={ styles.filtersection }>
    <input type='date' />
    <input type='time' />
  </div>
  <button className={ styles.next }>
    <div className={ styles.triangleright }/>
  </button>
</div>;


{/* we can pass options via props for testing etc. */}

const genres = [
  { text: 'All Genres', value: 'all'     },
  { text: 'Comedy',     value: 'comedy'  },
  { text: 'Drama',      value: 'drama'   },
  { text: 'Science',    value: 'science' },
  { text: 'Sci-Fi',     value: 'sci-fi'  },
  { text: 'Horror',     value: 'horror'  }
];

const types = [
  { text: 'Any Program Type', value: 'any'            },
  { text: 'Movie',            value: 'movie'          },
  { text: 'Talk Show',        value: 'talk-show'      },
  { text: 'Documentary',      value: 'documentary'    },
  { text: 'Sporting Event',   value: 'sporting-event' }
];