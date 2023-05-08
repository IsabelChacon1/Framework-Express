//Cargue la conexion del grupo MySQL
const { request, response, Router } = require('express');
const pool = require('../data/config');
//Ruta de la app
const routes = app =>{
    //mostrar mensaje de bienvenida de root
    app.get('/',(request, response)=>{
        response.send({
            message:'Bienvenido a Node.js Express REST API!'
        });
    });
//Mostrar todos los usuarios
app.get('/users',(request, response)=>{
    pool.query('SELECT * FROM users', (error, result)=>{
        if (error) throw error;

        response.send(result);
    });
});

//Mostrar un solo usuario por ID
app.get('/users',(request, response)=>{
    pool.query('SELECT * FROM users where id=?', (error, result)=>{
        if (error) throw error;

        response.send(result);
    });
});

//Agregar un nuevo usuario 
app.get('/users',(request, response)=>{
    pool.query('INSERT INTO users SET ?', request.body, (error, result)=>{
        if (error) throw error;

        response.send(201).send(`User added with ID: ${result.insertId}`);
    });
});

};
module.exports = routes;