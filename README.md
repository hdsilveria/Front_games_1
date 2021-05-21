<h1>API_opinião</h1>

<h2>Requisitos</h2>
<p><i>- Node.js</i></p>


<h2> Instalação local</h2>
<p>Dentro do diretorio, Deve ser feito a instalação das dependencias com o seguinte comando:</p>
<p><i>- npm install;</i></p>

<br>

<h2>Iniciando servidor</h2>

<p>Após isso, para iniciar, deve ser executado o arquivo app.js;</p>
<p><i>- nodemon app.js;</i></p>


<h2> Orientações </h2>

<p>- Por padrão, no arquivo "app.js" a aplicação estará configurada para escutar a porta 3000, podendo ser customizada caso a porta já esteja sendo utilizada;</p><br>

<h3>Rotas</h3>

<p>- / - Esta rota que deve chamar por "localhost:3000/", renderiza a pagina inicial onde é apresentado os comentarios em blocos; O menu statico acima tem as opções de Inserir, buscar todos e filtrar por plataforma; </p>

<img src="./git_img/front_games_all.png">

<p>- /inserir - Pagina onde é apresentado o formulario para realizar um novo comnetario, onde todos os campos são obrigatorios, sendo tambem necessário enviar uma imagem para ilustrar o comentario.</p>

<img src="./git_img/front_games_insert.png">

<p>- /postar - Ao enviar o comentario, sera acessado esta rota, onde sera feito a conexão com a API e encaminhar os parametros para cadastro, alem disso, passa pelo middleware multer para upload da imagem, que ira salvar a imagem com o "nome do usuario" + "game" + "nota";</p>

<p> Ao postar, sera feito em bloco o comentario, onde ficará posicionado os dados preenchidos da seguinte forma:</p>

<img src="./git_img/front_games_tags.png">


<i> Projeto em constante mudança, avançando para melhoria e implementações de funcionalidas como: Delete de comentarios e buscas avançadas.</i>







