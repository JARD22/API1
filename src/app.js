//declaramos una variable para instanciar el modulo de express

const express = require('express');

//inicializar Express
const app = express();

//importamos el modulo pg
const { Pool } = require('pg')

//Instanciamos un nuevo pool de clientes para acceder a la base de datos.
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5433,
  });

//declarando la primera ruta de nuestra API


app.get('/estados',async (req,res)=>{

let estados;
let query;

//Hacemos la consulta a la base de datos
query = await pool.query('SELECT * FROM FN_MOSTRAR_ESTADOS()')
//filtramos los datos de la consulta
estados= query.rows;

  return res.status(200).json({
       ok: true,
       //Retornando el objeto con los estado de la tabla estados.
       estados
   }); 

});


app.post('/registro',(req,res)=>{

    return res.status(201).json({
        ok:true,
        msg:'Este es un método post'
    });
 
});


app.delete('/registro',(req, res)=>{

    return res.status(200).json({
        ok:true,
        msg:'Este es un metodo delete'
    });
});   

app.put('/registro',(req,res)=>{

    return res.status(200).json({
        ok:true,
        msg:'Este es un metodo put'
    });
})

//Inicializamos el servidor en el puerto que especifiquemos
app.listen(3000,()=>{
    console.log('servidor en el puerto 3000');
}
);


