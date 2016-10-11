import React from 'react';
import Datetime from 'react-datetime';
import styles from './filterbar.css';


export default ({ settings, callback }) => (

  <div className={ styles.filterbar }>

    <button>
      <div className={ styles.triangleleft }/>
    </button>

    <div className={ styles.filtersection }>
      <select>{ genres.map(
        genre => <option value={ genre.value } key={ genre.value }>
          { genre.text }
        </option>
      )}</select>
      <select>{ types.map(
        type => <option value={ type.value } key={ type.value }>
          { type.text }
        </option>
      )}</select>
    </div>

    <div className={ styles.filtersection }>
      <Datetime className={ styles.timepicker }
        defaultValue={ settings.datetime }
        dateFormat={ false }
        timeFormat={ 'h:mm A' }
        closeOnSelect = { true }
      />
      <Datetime className={ styles.datepicker }
        defaultValue={ settings.datetime }
        dateFormat={ 'ddd, MMM D' }
        timeFormat={ false }
        closeOnSelect = { true }
        onChange={ (date) => {
          let clone = Object.assign( {}, settings );
          clone.datetime = date;
          callback( clone );
        }}
      />
    </div>

    <button className={ styles.next }>
      <div className={ styles.triangleright }/>
    </button>

  </div>
);


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