import axios from 'axios';
import moment from 'moment';


const createQueryString = ( filter ) => {

  const date = moment( filter.datetime ).format('YYYY-MM-DD');

  return `http://api.tvmaze.com/schedule?country=US&date=${ date }&page=1`;
};


export const getListings = ( filter ) => {

  return axios.get( createQueryString( filter ) )
    .then( res => {
      /*
      console.log( 'record:', res.data[0], '(of #):', res.data.length );
      */
      return res.data.map( d =>({
        id: d.id,
        title: d.show.name,
        imageUrl: d.show.image ? d.show.image.medium || null : null,
        description: d.show.summary
      }) );

    });

};