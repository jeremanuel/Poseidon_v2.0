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
    var pass = document.    getElementById('password').value;
    if(db.authentication(email,pass))
    {
        console.log('existe')
    }
    else
    (
        console.log('no existe')
    )

})

