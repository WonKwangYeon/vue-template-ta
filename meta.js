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
        default: 'My Awesome Project'
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
    completeMessage: 'Project Complete!'
  };