Exercicio 1;

*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
o Salt adiciona aleatoriamente uma sequência de caracteres a senha, o has sempre será diferente mesmo a senha sendo igual.
o round é o valor de caracteres adicionado.

b*. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

import * as bcrypt  from "bcryptjs"

export const hash = async (s:string): 
Promise<string> =>{
  const rounds = Number(process.env.BCRYPTJS_COST);
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(s,salt);
  
  return result
}


*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

export const compare = async (s:string, hash:string):
Promise<boolean> =>{
  return bcrypt.compare(s,hash);
}

Exercicio 2;

*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
Cadastro pois é o primeiro endpoint que acontece.

*b. Faça a alteração do primeiro endpoint*
   const hashPassword = await hash(password);

*c. Faça a alteração do segundo endpoint*
     const correctpassword=await compare(password,user?.password)
     
    if (!user || !correctpassword) {
      res.statusCode = 401 // "Unauthorized"
      throw new Error("Credenciais inválidas")
    }

*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

não precisamos pois nosso endpoint de editar precisa somente do token, então digamos que numa aplicação normal ele peça primeiro pro usuario fazer o login assim temos acesso ao token e assim damos acesso ao editar perfil.

EXERCICIO 3;
*a. Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

ALTER TABLE To_do_List_users ADD COLUMN role ENUM("NORMAL","ADM") DEFAULT "NORMAL";

*b. Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

c. *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*

d*. Altere o login para criar o token com o `role` do usuário*

