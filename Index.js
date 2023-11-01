const express = require('express');
const Routes = require('./Routes');

class Index{
    static main(){
        const app = express();
        const port = 80;
        
        app.set('view engine' , 'ejs');
        
        app.use('/' , Routes.main());

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    }
}

Index.main();