const Git = require('nodegit')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'url',
    message: 'Let\'s play. What\'s your git url?',
    default: () =>
      'https://github.com/kichooo/object-stream-tools'
  }
]

inquirer.prompt(questions)
  .then(({ url }) =>
    Git.Clone(url, './tmp')
      .then(console.log)
      .catch(console.error))
