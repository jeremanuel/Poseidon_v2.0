const DTB = require('sqlite3');

let DB = new DTB.Database('./db/database.');

DB.run('CREATE TABLE IF NOT EXISTS usuarios(email text PRIMARY KEY, pass text NOT NULL)');


function insert(email , password)
{
    DB.run('insert into usuarios(email,pass) values(?,?)',email, password, function(err)
    {
        if(err)
            console.log(err.message);
    });

    console.log('inserted');
}

var auth;
function authentication(email, pass)
{
    query = 'select * from usuarios where email = ? and pass = ?';

    
   
     

      DB.get(query, [email,pass], (err,row) => {
        if(err)
        {
            console.log(err.message);
            auth = false;
        }
        else
        { 
            console.log(row.email + '' + row.pass);
            
            if(row == undefined)
            auth = false;
            else
            auth=true;
        }
        
    }) 
    console.log(auth);
    return auth;;

}
    
    module.exports.insert = insert;
    module.exports.authentication = authentication;
