module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'select directory',
    choices: ['atoms', 'molecules', 'organisms', 'templates'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'input component name (it must start from CAPITAL letter.)',
    validate: (input) => input !== '',
  },
  {
    type: 'confirm',
    name: 'have_props',
    message: 'Need Props?',
    choices: ['Yes', 'No'],
    initial: 'Yes',
  },
];
