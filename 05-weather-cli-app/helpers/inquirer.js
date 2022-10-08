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
        name: `${'1.'.green} Search City`,
      },
      {
        value: 2,
        name: `${'2.'.green} History`,
      },
      {
        value: 3,
        name: `${'3.'.green} Exit`,
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log('======================='.green);
  console.log('    WEATHER APP CLI    '.green);
  console.log('=======================\n'.green);

  // prompt: Launch the prompt interface (inquiry session)
  const { option } = await inquirer.prompt(questions);
  return option;
};

export const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'exit',
      message: `Press ${'ENTER'.green} to continue.`,
    },
  ];

  console.log('\n');
  const { exit } = await inquirer.prompt(question);
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
        if (value.length === 0) return 'Please, write a value';

        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

export const confirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

export const printPlaces = async (places = []) => {
  console.clear();
  const choices = places.map((place, i) => {
    const id = `${i + 1}`.green;
    return {
      value: place.id,
      name: `${id} ${place.name}`,
    };
  });

  choices.unshift({
    value: 0,
    name: `${'0'.green}. Cancel`,
  });

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Choose a place:',
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);
  return id;
};

export const chooseTasksChecked = async (tasks = []) => {
  console.clear();

  const choices = tasks.map((task, i) => {
    const id = `${i + 1}`.green;
    return {
      value: task.code,
      name: `${id} ${task.description}`,
      checked: !(task.finishedAt === null),
    };
  });

  const questions = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Choose',
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(questions);
  return ids;
};
