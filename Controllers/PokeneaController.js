const Pokenea = require('../Models/Pokenea');
const os = require('os');

class PokeneaController{

    static index(req,res){
        let id = Math.floor( Math.random() * Pokenea.pokeneasList.length );
        let pokenea = Pokenea.pokeneasList[id]

        let response = {
            id : pokenea.getId(),
            name : pokenea.getName(),
            height : pokenea.getHeight(),
            ability : pokenea.getAbility(),
            containerId : os.hostname()
        }

        res.json( response );
    }

    static show(req,res){
        let id = Math.floor( Math.random() * Pokenea.pokeneasList.length );
        let pokenea = Pokenea.pokeneasList[id];
        
        let viewData = {
            image: pokenea.getImage(),
            phrase: pokenea.getIconicPhrase(),
            containerId : os.hostname()
        }

        res.render('showPokenea', viewData);
    }
}

module.exports = PokeneaController;