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

    //USUARIOS

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

//Actualizar un usuario existente
app.get('/users/:id',(request, response)=>{
    const id = request.params.id;
    pool.query('UPDATE users SET ? WHERE id=?', [request.body, id], (error, result)=>{
        if (error) throw error;

        response.send('User updated successfully. ');
    });
});

//Eliminar un usuario existente
app.get('/users/:id',(request, response)=>{
    const id = request.params.id;
    pool.query('DELETE FROM users WHERE id=?', id, (error, result)=>{
        if (error) throw error;

        response.send('User deleted successfully. ');
    });
});

//PRODUCTOS

//Mostrar todos los productos
app.get('/productos',(request, response)=>{
    pool.query('SELECT * FROM productos', (error, result)=>{
        if (error) throw error;

        response.send(result);
    });
});

//Mostrar un solo productos por ID
app.get('/users',(request, response)=>{
    pool.query('SELECT * FROM productos where id=?', (error, result)=>{
        if (error) throw error;

        response.send(result);
    });
});

//Agregar un nuevo productos 
app.get('/productos',(request, response)=>{
    pool.query('INSERT INTO productos SET ?', request.body, (error, result)=>{
        if (error) throw error;

        response.send(201).send(`Products added with ID: ${result.insertId}`);
    });
});

//Actualizar un usuario existente
app.get('/productos/:id',(request, response)=>{
    const id = request.params.id;
    pool.query('UPDATE productos SET ? WHERE id=?', [request.body, id], (error, result)=>{
        if (error) throw error;

        response.send('Products updated successfully. ');
    });
});

//Eliminar un productos existente
app.get('/productos/:id',(request, response)=>{
    const id = request.params.id;
    pool.query('DELETE FROM productos WHERE id=?', id, (error, result)=>{
        if (error) throw error;

        response.send('Products deleted successfully. ');
    });
});

};
module.exports = routes;