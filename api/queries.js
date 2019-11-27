const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sr819db',
    password: 'Admin123',
    port: 5432,
  })

const createEvent = (request, response) => {
  var my_query = "insert into webhook_jira(id, date_created, json_data, event) values (nextval('webhook_jira_id_seq'), now(), $1, $2)"
  pool.query(my_query, [request.body, 'I'], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).json(request.body)
  })
}

module.exports = {
  createEvent
}