
module.exports = {
  name: 'generate:model',
  description: 'Create a new Model',
  alias: ['gm'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const name = parameters.first

    await generate({
      template: 'model.js.ejs',
      target: `src/models/${name}/index.js`,
      props: { name }
    })

    info(`Generated file at models/${name}.js`)
  }
}
