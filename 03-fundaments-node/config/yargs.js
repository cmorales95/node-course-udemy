const argv = require( 'yargs' )
    .options( {
      'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'multiplicand',
      },
      'p': {
        alias: 'print',
        type: 'boolean',
        default: false,
        describe: 'print on console',
      },
      's': {
        alias: 'start-at',
        type: 'number',
        default: 1,
        describe: 'number to initialize the iteration'
      },
      'e': {
        alias: 'end-at',
        type: 'number',
        default: 10,
        describe: 'number to finish the iteration'
      }
    } )
    .check( ( argv, options ) => {
      if ( isNaN( argv.b ) ) {
        throw '"base" must be a number';
      }

      if (argv.s >= argv.e) {
        throw '"start-at" must be less than "end-at"';
      }

      return true;
    } )
    .argv;

module.exports = argv;