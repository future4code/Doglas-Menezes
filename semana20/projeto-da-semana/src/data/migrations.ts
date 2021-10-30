// import {connection} from "../connection"
// import { postsTableName, userTableName } from "../model/tables"

// async function createTables(){
//   try{
//     await connection.raw(`
//     CREATE TABLE IF NOT EXISTS ${userTableName}(
//       id VARCHAR(255) PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) UNIQUE NOT NULL,
//       password VARCHAR(255) NOT NULL
//    );
//   `)
//     await connection.raw(`
//     CREATE TABLE IF NOT EXISTS ${postsTableName}(
//       id VARCHAR(255) PRIMARY KEY,
//       photo VARCHAR(255) NOT NULL,
//       description VARCHAR(255) NOT NULL,
//       type ENUM("normal","event") DEFAULT "normal",
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       author_id VARCHAR(255),
//       FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
//    )
//     `)
//     console.log("CREATE TABLE IN MYSQL COMPLETED!!")
// }catch (error){
//   console.log(error)
// }
// }

// createTables()
