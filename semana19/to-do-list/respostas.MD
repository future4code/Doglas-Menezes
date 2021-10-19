Exercicio 1
*a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
strings são uma boa opção assim como números tambem são, porem um maesclado entre eles seria muito mais eficiente na geração de um id unico!

*B.CRIADO*

Exercicio 2

*a. Explique o código acima com as suas palavras.  
a parte de conexão com nosso banco de dados que é usada no arquivo connection, depois temos uma função que cria um usúario com id, email e password.*

*b. CREATE TABLE usuarios (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
)*



*c.	const userTableName = "usuarios";

	 const createUser = async ( id: string,
    name: string,
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
        name,
	      email,
	      password,
	    })
	    .into(userTableName);


