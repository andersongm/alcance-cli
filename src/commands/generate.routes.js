const fs = require('fs');
const path = require('path');

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

    const name = parameters.first

    //console.log('Iniciou Ajuste File App');
    //const caminho = path.join(__dirname, '..', 'testeFolder');
    const caminho = path.join(__dirname, '..', '..');

    console.log(caminho);
    const targetFile = await adjustFile(name);
    fs.writeFileSync(caminho+'/app.js',targetFile);
    
    info(`App.js was updated`)

    await generate({
      template: 'routes.js.ejs',
      target: `src/routes/${String(name).toLowerCase()}.js`,
      props: { name }
    })

    info(`Generated file at routes/${name}.js`)
  }
}
