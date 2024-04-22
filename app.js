const express = require('express');
const app = express();
const cors = require('cors');
const { dbConection } = require('./src/config/mongo.config');
require( 'dotenv' ).config();                

const PORT = process.env.PORT || 3000


app.use( cors());
app.use( express.json());



dbConection();
app.listen( PORT, function() {
    console.log( `express funcionandoo en : ${ PORT }` );
} );
