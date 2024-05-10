const mongoose = require( 'mongoose' );

const dbConection = async () => {

    try {
        await mongoose.connect( process.env.DB_URI )

        console.log( 'la DB funcionaaaaa' );
    }
    catch( error ) {
        console.log(`DV... ${process.env.DB_URI}`)
        console.error( error );
        throw new Error( 'Error al inicializar la base de datos' );
    }
}
module.exports = {
    dbConection
};