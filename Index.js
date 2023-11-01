const express = require('express');
const Routes = require('./Routes');
const path =  require('path');

class Index{
    static main(){
        const app = express();
        const port = 80;
        
        app.set("views", path.join(__dirname, "Views"));
        app.set('view engine' , 'ejs');
        
        app.use('/' , Routes.main());

        app.listen(port, () => {
            console.log(`Example app listening on port:  ${port}`);
        });
    }
}

Index.main();