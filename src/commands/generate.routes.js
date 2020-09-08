module.exports = {
  name: 'generate:route',
  description: 'Create a new Route',
  alias: ['gr'],

  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info },
      adjustFile
    } = toolbox

    const fs = require('fs');

    const name = parameters.first

    const targetFile = await adjustFile(name);
    fs.writeFileSync('app.js',targetFile);
    
    info(`App.js was updated`)

    await generate({
      template: 'routes.js.ejs',
      target: `src/routes/${String(name).toLowerCase()}.js`,
      props: { name }
    })

    info(`Generated file at routes/${name}.js`)
  }
}
