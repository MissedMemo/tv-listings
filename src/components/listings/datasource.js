import axios from 'axios';
import moment from 'moment';

/*
  Any benefits to encapsulating all this in an ES6 class?
  (As an ES6 module, this file's contents already inaccessible)
*/

const categories = {
  genres: { 'All Genres': true },
  types: { 'Any Type': true }
};

const addCategories = ( genres, type ) => {

  genres.forEach( g => {
    categories.genres[g] = true;
  });
  
  categories.types[ type ] = true;
};

export const getCategories = () => {
  return {
    genres: Object.keys( categories.genres ),
    types: Object.keys( categories.types )
  };
};


/*
  Displayed data should always be a filtered subset
  of listings for a specified DATE, so we should
  only issue ajax queries on program start, and
  if the filter date changes. Other filter changes
  should be applied to CACHED listings data.
*/

const listings = {
  date: null,
  data: []
};

export const getListings = ( filter ) => {

  const date = moment(filter.datetime).startOf('date');

  if( date.isSame( listings.date ) ) { // use CACHED DATA!
    return new Promise( function( fullfil, reject ) {
      fullfil( filtered( listings.data, filter ) );
    });
  }
  else return axios.get( createQueryString( filter ) )
    .then( res => {

      listings.date = date;

      /*console.log( 'record:', res.data[0], '(of #):', res.data.length );*/

      listings.data = res.data.map( d => {

        /* extract genres & types from actual listings (not hard-coded) */
        addCategories( d.show.genres, d.show.type );

        return {
          id: d.id,
          title: d.show.name,
          imageUrl: d.show.image ? d.show.image.medium || null : null,
          description: d.show.summary,
          genres: d.show.genres,
          type: d.show.type
        };

      });
      
      return filtered( listings.data, filter );
    });

};

const createQueryString = ( filter ) => {

  const date = moment( filter.datetime ).format('YYYY-MM-DD');

  return `http://api.tvmaze.com/schedule?country=US&date=${ date }&page=1`;
};

const filtered = ( allListings, filter ) => {

  return allListings.filter( listing =>
       (filter.type === 'Any Type' || listing.type === filter.type )
    && (filter.genre === 'All Genres' || listing.genres.indexOf( filter.genre ) > -1 )
  );

};
