const renameRoute = (name) => {
    
    let firstLetter = name.substr(0,1);
    let nameRoute = name.substr(1,name.length);
    
    return name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
    //return firstLetter.concat(nameRoute.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase());
}


module.exports = { renameRoute };