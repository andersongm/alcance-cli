const path = require('path');
const { renameRoute } = require('../util');

module.exports = toolbox => {
    toolbox.adjustFile = async (name) => {

        var fs = require('fs'),
            readline = require('readline');

        var rd = readline.createInterface({
            input: fs.createReadStream('app.js'),
            console: false
        });

        const search1 = /(<end_var_routes>)/g;
        const search2 = /(end_loading_routes)/g;

        const rota = renameRoute(name);

        console.log('ROTA:', rota);

        const nameRoute = "'/" + rota + "'," + name + "Router";
        const varRoute = "var " + name + "Router = require('./src/routes/" + name.toLowerCase() + "');";

        console.log(nameRoute);

        return new Promise(resolve => {
            let lines = "";
            rd.on('line', (line) => {
                if (search1.test(line)) {
                    //console.log(varRoute);
                    lines += varRoute.concat(' // Automatically generated').concat('\n');
                }

                if (search2.test(line)) {
                    //console.log(`app.use(${nameRoute});`);
                    lines += `app.use(${nameRoute});`.concat(' // Automatically generated').concat('\n');
                }

                lines += line + '\n'
            });
            rd.on('close', _ => resolve(lines));
        });

    }

}
