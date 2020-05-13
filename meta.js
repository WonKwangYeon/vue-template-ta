'use strict'
const path = require('path')
const fs = require('fs')
const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
  runScript
} = require('./utils')

module.exports = {
    /**
     * Add your own Prompt questions here!
     */
    prompts: {
      name: {
        type: 'string', // Question type
        required: true, // Is question Required
        message: 'Project name' // Question it's self
      },
      description: {
        type: 'string',
        required: false,
        message: '',
        default: 'Project'
      },
      author: {
        type: 'string',
        message: 'Author'
      },
      moment: {
          type: 'confirm',
          message : 'Install vue-moment?'
      },
      bootstrap: {
          type: 'confirm',
          message : 'Install vue-bootstrap?'
      },
      fontAwesome: {
          type: 'confirm',
          message : 'Install font-awesome?'
      },
      lint: {
        type: 'confirm',
        message: 'Use ESLint to lint your code?' 
      },
      lintConfig: {
        when: 'lint',
        type: 'list',
        message: 'Pick an ESLint preset',
        choices: [
          {
            name: 'Standard (https://github.com/standard/standard)',
            value: 'standard',
            short: 'Standard',
          },
          {
            name: 'Airbnb (https://github.com/airbnb/javascript)',
            value: 'airbnb',
            short: 'Airbnb',
          },
          {
            name: 'none (configure it yourself)',
            value: 'none',
            short: 'none',
          },
        ]
      },
      autoInstall: {
        type: 'list',
        message: 'Should we run `npm install` for you after the project has been created? (recommended)',
        choices: [{
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
          {
            name: 'Yes, use Yarn',
            value: 'yarn',
            short: 'yarn',
          },
          {
            name: 'No, I will handle that myself',
            value: false,
            short: 'no',
          },
        ]
      }
    },
  
    /**
     * You can add a custom complete message
     */
    complete: function(data, {
        chalk
      }) {
        const green = chalk.green
    
        sortDependencies(data, green)
        const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)
    
        if (data.autoInstall) {
          installDependencies(cwd, data.autoInstall, green)
            .then(() => {
              return runLintFix(cwd, data, green)
            })
            .then(() => {
              printMessage(data, green)
            })
            .catch(e => {
              console.log(chalk.red('Error:'), e)
            })
        } else {
          printMessage(data, chalk)
        }
        console.log([
          '\n---',
          '',
          'Project Complete!',
          '',
 
        ].join('\n'))
      }
  };