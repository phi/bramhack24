import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "gudurdum",
    database: "bikes_app",
    
}).promise()

export async function createLocation(age,gender,postal_code,coment,latt,lott) {
    const {result} = await pool.query("INSERT INTO posible_locations (age, gender,postal_code,comment,lat,lon) VALUES (?,?,?,?,?,?)", [age,gender,postal_code,coment,latt,lott])
    return result
}