const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / recurso
 */

/**
 * Métodos HTTP:
 * 
 * 
 * GET: Buscar/listar informações do back-end
 * POST: criar informações no back-end
 * PUT: Alterar informações no back-end
 * DELETE: Deletar informações no back-end
 * 
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Rout Params: Parâmetrosutilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */


/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft, SQL server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * 
 */

 /**
  * Driver: SELECT * FROM users
  * Query builder: table('users').select('*').where();
  */


app.listen(3333);