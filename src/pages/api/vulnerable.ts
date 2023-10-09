import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
const mysql = require('mysql2/promise');


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const id = req.query.id
    if(typeof(id) !== 'string') {
        res.status(400).send({ message: 'Id inválido'})
        return
    }
    let con = await mysql.createConnection({
      host: "database.andreluizmelo.com",
      user: "username",
      password: "password",
      database: 'test',
      rowsAsArray: true
    });
    con.connect(function(err: any) {
      if (err) throw err;
      
    });
    const sql = `SELECT * FROM products WHERE id = ${id}`
    const [results] = await con.execute(sql);
    res.status(200).json({ fetchResult: JSON.stringify(results) })
  }