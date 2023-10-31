const PokeneaController = require('./Controllers/PokeneaController');
const express = require('express');

class Routes{

    static main(){

        const router = express.Router();

        router.get( '/', PokeneaController.index );
        router.get( '/show', PokeneaController.show );

        return router;
    }

}

module.exports = Routes;