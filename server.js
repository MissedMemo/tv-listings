import express from 'express';
const app = express();

// define directory to serve static files...
app.use( express.static( __dirname + '/public' ) );

const port = process.env.PORT || 3000;

app.listen( port, () => {
  console.log( 'listening on port #' + port );
});

