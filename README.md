# gamelog-API

Este pequeno projeto conta com uma simples API para que possamos manter um controle dos minutos jogados em cada jogo, em todas as plataformas.

# Setup:

Primeiramente, devemos clonar o repositório na pasta desejada.

Após feito isso, deve-se dar o comando `npm i` para instalar todas as dependências necessárias para a API.

É necessário, então, que seja criada a database que o projeto irá usar. Para isso, deve-se criar uma databse com o nome que desejar (recomenda-se gamelog), e então na pasta raiz do projeto executar o seguinte comando: `psql -U postgres_role database_name < dump.sql`, trocando `postgres_role` pelo seu nome de usuário do postgres, e `database_name` pelo nome da database que foi criada anteriormente. Caso dê erro de autenticação, consulte: https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge

Com isso, deve-se criar um arquivo .env na raiz do projeto e copiar o que está em .env.example, trocando os campos `YourUserName`, `YourPassword`, `YourHostName` e `YourDatabaseName` pelos seus respectivos valores corretos.

Concluído esses passos, o projeto está pronto para rodar com `npm run dev`.

# Rotas:

POST: /genres </br>
Body: `{ "genre": "Ação" }`

GET: /genres </br>
Response: `[{ "id": 1, "genre": "Aventura" }, { "id": 2, "genre": "Ação" }]`

POST: /games </br>
Body: `{ "title": "Stardew Valley", "playtime": 7628, "genre_id": 1}` </br>
OBS: playtime nesse caso se dá em minutos

GET: /games </br>
Response: [{ "id": 1, "title": "Grand Theft Auto V", "playtime": 37572, "genre": "Mundo Aberto" }, { "id": 2, "title": "StardewValley", "playtime": 7628, "genre": "Aventura" }]

GET: /genres?genre=corrida </br>
Response: `[{ "id": 5, "title": "BeamNG.drive", "playtime": 9564, "genre": "Corrida"}, { "id": 7 , "title": "Trackmania 2020", "playtime": 20090, "genre": "Corrida"}]` </br>
OBS: funciona para qualquer gênero, o "corrida" foi apenas um exemplo. Não necessita capslock no começo.

PATCH: /games/:id </br>
Body: {"playtime": 7658}

DELETE: /games/:id </br>

GET: /games/playtime-avg
Response: "Your average playtime is: 13245.43 minutes"
