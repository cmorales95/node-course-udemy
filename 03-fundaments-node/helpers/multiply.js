const fs = require( 'fs' );
const colors = require( 'colors' );

const createFile = async ( base, list, startAt = 1, endAt = 10) => {
  try {
    let output = '';
    let consoleOutput = '';

    for ( let i = startAt; i <= endAt; i++ ) {
      output += `${ base } x ${ i } = ${ base * i }\n`;
      consoleOutput += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
    }


    if ( list ) {
      console.log( `Table of ${ base.yellow }` );
      console.log( consoleOutput );
    }

    const fileName = `table-${ base }.txt`;
    await fs.writeFileSync( `./output/${fileName}`, output );

    return fileName;
  } catch ( err ) {
    throw err;
  }
};

const createFilePromise = ( base = 5 ) => {
  return new Promise( ( resolve, reject ) => {
    let output, consoleOutput = '';

    for ( let i = 1; i <= 10; i++ ) {
      output += `${ base } x ${ i } = ${ base * i }\n`;
      consoleOutput += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
    }
    console.log( consoleOutput );

    const fileName = `table-${ base }.txt`;
    fs.writeFileSync( fileName, output );

    resolve( fileName );
  } );
};

module.exports = {
  createFile
};