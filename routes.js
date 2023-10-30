const pokeneaController = require('./Controllers/PokeneaController');
const express = require('express');
const app = express();
const port = 3000;

app.set( 'view engine' , 'ejs' );

app.get( '/', pokeneaController.index );
app.get( '/show', pokeneaController.show );

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});