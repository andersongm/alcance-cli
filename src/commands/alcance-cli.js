const fs = require('fs');

const command = {
  name: 'generate:full',
  description: 'Generate Model, Controller and Route',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info },
      adjustFile
    } = toolbox

    const name = parameters.first

    await generate({
      template: 'model.js.ejs',
      target: `src/models/${name}/index.js`,
      props: { name }
    })

    await generate({
      template: 'controller.js.ejs',
      target: `src/controllers/${name}/index.js`,
      props: { name }
    })

    const targetFile = await adjustFile(name);
    fs.writeFileSync('app.js',targetFile);
    
    info(`App.js was updated`)

    await generate({
      template: 'routes.js.ejs',
      target: `src/routes/${String(name).toLowerCase()}.js`,
      props: { name }
    })

    info(`Generated All Files`)
  }
}

module.exports = command
