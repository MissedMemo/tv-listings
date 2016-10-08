import React from 'react';
import styles from './program.css';


/* Facebook's recommended approach to convert string to html
  https://facebook.github.io/react/tips/dangerously-set-inner-html.html
*/

const extractMarkup = ( str ) => {
 return { __html: str };
}


export default ({data}) => <div className={ styles.program }>

  <div className={ styles.imageFrame }> {
    data.imageUrl ?
      <img src={ data.imageUrl } /> :
      <div className={ styles.noImageFound }>
        no<br/><br/>image<br/><br/>available
      </div>
  } </div>

  <div className={ styles.info }>

    <div className={ styles.row1 }>
      <div className={ styles.title }>{ data.title }</div>
    </div>

    <div className={ styles.row2 }
      dangerouslySetInnerHTML={ extractMarkup( data.description ) }
    />

    <div className={ styles.row3 }>
      row3 row3 row3 row3
    </div>

  </div>

</div>;