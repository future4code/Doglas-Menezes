1 Exercicio MSQL

id varchar(255) PRIMARY KEY,
name varchar(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6)
);

*a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
O 'VARCHAR' tem um tamanho varriavel por exemplo na tabela em Questão temos o tamanho de 255 não quer dizer que ele vá ocupar tal tamanho ou seja não há disperdicio algum.
Tambem no exemplo temos o comando 'PRIMARY KEY' que é utilizado como identificador unico de uma tabela( chaves primarias não podem ser nulas,cada registro de tabela deve possuir uma).
'Date' siginica uma data te4mos tambem 'DATE-TIME',Time,SMALLDATETIME...



*b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

Show DATA BASEs me apresenta todas as tabelas daquele servidos
já o Shos tables ma apresenta a tabela do arquivo aberto.

*c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
consigo ver a estrutura da tabela com alguns detalhes 

EXERCICO 2

INSERT INTO Actor (id,name,salary,birth_date,gender) VALUES(
"001",
'Tony Ramos',
90000000,
'1948-08-28',
'male'
);

A)
INSERT INTO Actor (id,name,salary,birth_date,gender) VALUES(
'002',
'GLoria Pires',
1200.00,
'1963-08-23',
'female'
);

B)
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'---como foi criado com o mesmo ID ele mostra a key duplicada. 

C)Error Code: 1136. Column count doesn't match value count at row 1--- um dos campos não foi chamado no momento de inserir o actor

D)Error Code: 1364. Field 'name' doesn't have a default value	----- o campo de nome não foi chamado e nem preenchido.

E)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1-----o valur da data está escrito errado falta as "aspas"

F)crie mais um ator e atriz usei os exemplos que ja estavam la 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Ju Paes",
  90000,
  "1999-05-26", 
  "female"
);


EXERICIO 3
*a. Escreva uma query que retorne todas as informações das atrizes*

*b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

Executados *

E)Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '"002' at line 1-----Erro de sintaxe é a falta do ";"  e tambem se boto o ; ele volta com o campo inesistente que seria o campo nome que está escrito como "name".

Exercicio 4
LIKE- par verificarmos uma string e usamos o % pra dizer que é uma string genérica  o ou usamos ele em ingles "OR".
depois o between :permite verificar se um valor está entre dois "BETWEEN VALOR1 and Valor2"
temos por fim o not -Not like or not between.


EXERCICIO 5
*a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.*
TEXT não tem limite de tamanho especifico alem do tamanho maximo do banco de dados porem a propria microsoft disse que futuramente em alguma atualização vão tirar esse comando então creio que seria melhor usar o VARCHAR(MAX) que é o mesmo que o TEXT.

CREATE TABLE Movie(
id varchar(255) PRIMARY KEY,
title TEXT NOT NULL,
synopsis TEXT NOT NULL,
date DATE NOT NULL,
evaluation text Not NULL
);

INSERT INTO Movie(id, title, synopsis, date, evaluation)
VALUES(
  "01", 
  "Se eu fosse você",
  'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
  "2006/01/06", 
  "7"
);

INSERT INTO Movie(id, title, synopsis, date, evaluation)
VALUES(
  "002", 
  "Doce Mãe",
  'Dona Picucha, uma animada senhora de 85 anos,
  sempre causa grandes confusões. 
  A vida dela e dos seus quatro filhos sofre uma 
  reviravolta depois que Zaida, empregada e amiga de 
  Dona Picucha, anuncia que vai se casar e não 
  poderá mais morar com ela',
  "2012/12/27", 
  "10"
);

INSERT INTO Movie(id, title, synopsis, date, evaluation)
VALUES(
  "003", 
  "Dona Flor e seus dois Maridos",
  'Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates.
  A vida de abusos acaba por acarretar sua morte precoce.',
  "2017/11/02", 
  "8"
);

INSERT INTO Movie(id, title, synopsis, date, evaluation)
VALUES(
  "004", 
  " O Tempo e o Vento",
  'A família Terra Cambará e sua principal opositora
  a família Amaral, viveram em conflito durante 150 anos,
  começando nas Missões até o final do século XIX. 
  A luta entre essas duas famílias atravessa a formação 
  do Rio Grande do Sul, a povoação do território brasileiro 
  e a demarcação de suas fronteiras, forjada a ferro 
  e espada pelas lutas entre as coroas portuguesa e espanhola. 
  Um dia, o sobrado dos Terra-Cambará é cercado pelos Amaral, 
  e eles são obrigados a se defenderem.',
  "2013/09/27", 
  "9"
);

Select *  From Movie where id>=002;
Select *  From Movie where ( title LIke "Doce mãe%");
Select *  From Movie where evaluation>=7;


