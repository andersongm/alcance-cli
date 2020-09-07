module.exports = {
    name: 'generate:route',
    description: 'Create a new Route',
    alias: ['gr'],
    run: async toolbox => {
      const {
        parameters,
        template: { generate },
        print: { info }
      } = toolbox
  
      const name = parameters.first
  
      await generate({
        template: 'routes.js.ejs',
        target: `src/routes/${String(name).toLowerCase()}.js`,
        props: { name }
      })
  
      info(`Generated file at routes/${name}.js`)
    }
  }
  