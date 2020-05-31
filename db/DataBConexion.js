const DTB = require('sqlite3');

let DB = new DTB.Database('./db/database.');

DB.run('CREATE TABLE IF NOT EXISTS usuarios(email text PRIMARY KEY, pass text NOT NULL)');


function insert(email , password)
{
    DB.run('insert into usuarios(email,pass) values(?,?)',email, password, function(err)
    {
        if(err)
            console.log('error xd');
    });

    console.log('se insereto esa');
}
    
    module.exports.insert = insert;
