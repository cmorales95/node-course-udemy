const { createFile } = require( './helpers/multiply' );
const argv = require( './config/yargs' );

require( 'colors' );

console.clear();
createFile( argv.b, argv.p, argv.s, argv.e )
    .then( fileName => console.log( fileName.rainbow, 'created' ) )
    .catch( err => console.log( err ) );

