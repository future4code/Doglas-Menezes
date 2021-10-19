import {Request ,Response} from 'express'
import app from './app'
import connection from './connection'

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

  // (async () => {
  //   console.log(await getActorById("001") )
  // })()

  // app.get("/users/:id", async (req: Request, res: Response) => {
  //   try {
  //     const id = req.params.id
  
  //     console.log(await getActorById(id))
  
  //     res.end()
  //   } catch (error:any) {
  //     console.log(error.message)
  //     res.status(500).send("Unexpected error")
  //   }
  // })

  //A) a Resposta que tenho usando RAW é um objeto.

  //B) 
  app.get("/users/:name", async (req: Request, res: Response) => {
    try {
      const name = req.params.name
  
      console.log(await searchActor(name))
  
      res.end()
    } catch (error:any) {
      console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })