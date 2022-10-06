import inquirer from 'inquirer';
import 'colors';

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Create Task`
      },
      {
        value: 2,
        name: `${'2.'.green} Show all task`
      },
      {
        value: 3,
        name: `${'3.'.green} Show completed task`
      },
      {
        value: 4,
        name: `${'4.'.green} Show pending task`
      },
      {
        value: 5,
        name: `${'5.'.green} Complete task`
      },
      {
        value: 5,
        name: `${'5.'.green} Delete task`
      },
      {
        value: 0,
        name: `${'0.'.green} Exit`
      }
    ]
  }
];

export const inquirerMenu = async () => {
  console.clear();
  console.log( '======================='.green );
  console.log( '      TODO CLI APP     '.green );
  console.log( '=======================\n'.green );

  // prompt: Launch the prompt interface (inquiry session)
  const { option } = await inquirer.prompt( questions );
  return option;
};

export const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'exit',
      message: `Press ${ 'ENTER'.green } to continue.`
    }
  ];

  console.log( '\n' );
  const { exit } = await inquirer.prompt( question );
  return exit;
};

export const readInput = async (message) => {
  console.clear();
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if ( value.length === 0 ) return 'Please, write a value';

        return true;
      }
    }
  ]

  const { description } = await inquirer.prompt( question );
  return description;
}