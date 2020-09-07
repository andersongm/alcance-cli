module.exports = {
    name: 'generate:controller',
    description: 'Create a new Controller',
    alias: ['gc'],
    run: async toolbox => {
      const {
        parameters,
        template: { generate },
        print: { info }
      } = toolbox
  
      const name = parameters.first
  
      await generate({
        template: 'controller.js.ejs',
        target: `controllers/${name}/index.js`,
        props: { name }
      })
  
      info(`Generated file at controllers/${name}/index.js`)
    }
  }
  