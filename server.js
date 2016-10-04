import express from 'express';
const app = express();

// define directory to serve static files...
app.use( express.static( __dirname + '/public' ) );

/*
Typing URLs directly into the browser, or refreshing the browser
results in a server request, while react-router serves up locations
already available on the client. To support these scenarios, we
have to explicitly handle all get requests via the code below. 
*/

app.get( '*', function (req, res) {
  res.sendFile( path.resolve( __dirname, 'public', 'index.html' ) );
});

const port = process.env.PORT || 3000;

app.listen( port, () => {
  console.log( 'listening on port #' + port );
});

