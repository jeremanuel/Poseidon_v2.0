//DOM ELEMENTS

const btnReg = document.getElementById('registrar');
const btnLog = document.getElementById('ingresar')
const db = require('../db/dbLogin')

btnReg.addEventListener('click', () => {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    
    db.insert(email,pass);

    

});

btnLog.addEventListener('click', () => {

    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if(db.authentication(email,pass, function(result){

        if(result==true)
        {
            console.log('el usuario existe');
        }
        else
        {
            console.log('el usuario no existe');
        }


    }));
 

})

