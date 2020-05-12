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
    
        // if(data.needCertGenerate) {
        //   await runScript('generate_cert.sh')
        // }
    
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