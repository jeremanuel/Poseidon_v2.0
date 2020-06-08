const DTB = require('sqlite3');

let DB = new DTB.Database('./db/database.');

DB.run('CREATE TABLE IF NOT EXISTS usuarios(email text PRIMARY KEY, pass text NOT NULL)');


function insert(email , password){
    DB.run('insert into usuarios(email,pass) values(?,?)',email, password, function(err)
    {
        if(err)
            console.log(err.message);
    });

    console.log('inserted');
}


function authentication(email, pass, fn)
{
    query = 'select * from usuarios where email = ? and pass = ?';

      DB.get(query, [email,pass], function(err,row){
        if(err)
        {
            console.log(err.message);
            fn(false);
        }
        else
        { 
           if(row == undefined)
                fn(false);
            else
                fn(true); 
        }
        
    }) 
}

function delet(email, password){
    if ((authentication(email,password))) {
        DB.run('delete from usuarios where email =' + email, function(err){
            if(err)
                console.log('error xd');
        });
    }
    console.log('se elimino ');
}

    module.exports.insert = insert;
    module.exports.authentication = authentication;
    module.exports.delet = delet;
