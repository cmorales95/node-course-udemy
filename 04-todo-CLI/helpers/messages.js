require( 'colors' );

const showMenu = () => {
  return new Promise( resolve => {
    console.clear();
    console.log( '======================='.green );
    console.log( '    Choose an option   '.green );
    console.log( '=======================\n'.green );

    console.log( `${ '1.'.green } Create a task` );
    console.log( `${ '2.'.green } List all tasks` );
    console.log( `${ '3.'.green } List all completed tasks` );
    console.log( `${ '4.'.green } List all pending tasks` );
    console.log( `${ '5.'.green } Complete a task` );
    console.log( `${ '6.'.green } Delete task` );
    console.log( `${ '0.'.green } Exit` );

    const readline = require( 'readline' ).createInterface( {
      input: process.stdin,
      output: process.stdout,
    } );

    readline.question( 'Choose an option: ', opt => {
      readline.close();
      resolve( opt );
    } );
  } );

};

const pause = () => {
  return new Promise( resolve => {
    const readline = require( 'readline' ).createInterface( {
      input: process.stdin,
      output: process.stdout,
    } );

    readline.question( `Press ${ 'Enter'.green } to exit`, opt => {
      readline.close();
      resolve(opt)
    } );
  } );
};

module.exports = {
  showMenu,
  pause,
};
