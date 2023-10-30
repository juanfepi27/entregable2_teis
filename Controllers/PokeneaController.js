const pokeneaModel = require('../Models/Pokeneas');
const os = require('os');

class PokeneaController{

    static index(req,res){
        let id = Math.floor( Math.random() * pokeneaModel.pokeneasList.length );
        let pokenea = pokeneaModel.pokeneasList[id]
        let response = {
            id : pokenea.getId,
            name : pokenea.getName,
            height : pokenea.getHeight,
            ability : pokenea.getAbility,
            containerId : os.hostname()
        }

        res.send( response );
    }

    static show(req,res){
        let id = Math.floor( Math.random() * pokeneaModel.pokeneasList.length );
        let pokenea = pokeneaModel.pokeneasList[id];
        let viewData = {
            image: pokenea.getImage,
            phrase: pokenea.getIconicPhrase,
            containerId : os.hostname()
        }

        res.render('showPokenea', viewData);
    }
}

module.exports = PokeneaController;