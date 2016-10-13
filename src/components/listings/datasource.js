import axios from 'axios';
import moment from 'moment';

const categories = {
  genres: { 'All Genres': true },
  types: { 'Any Type': true }
};


const createQueryString = ( filter ) => {

  const date = moment( filter.datetime ).format('YYYY-MM-DD');

  return `http://api.tvmaze.com/schedule?country=US&date=${ date }&page=1`;
};


const initCategories = ( genres, type ) => {

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
  Displayed data will always be a filtered subset
  of listings for a specified DATE, so we should
  only issue a new ajax query on program start, and
  when the filter date changes, clients applying
  filters to CACHED data otherwise.
*/

export const getListings = ( filter ) => {

  return axios.get( createQueryString( filter ) )
    .then( res => {

      /*console.log( 'record:', res.data[0], '(of #):', res.data.length );*/

      return res.data.map( d => {

        /* limit genres & types to those actually contained in current listings */
        initCategories( d.show.genres, d.show.type );

        return {
          id: d.id,
          title: d.show.name,
          imageUrl: d.show.image ? d.show.image.medium || null : null,
          description: d.show.summary
        };

      });
      
    });

};    
