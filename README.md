# Project-CRUD-Angular-Spring

Este é um projeto de exemplo de um sistema de gerenciamento de cursos e suas respectivas aulas, desenvolvido com Spring Boot (Java) para o backend e Angular para o frontend. Ele também utiliza o PostgreSQL como banco de dados. O projeto inclui testes unitários para o backend e tem a intenção de adicionar testes de integração e testes unitários para o frontend no futuro.

## Funcionalidades

- Cadastro, atualização e exclusão de cursos.
- Visualização da lista de cursos e seus detalhes.
- Gerenciamento dos cursos.
- Testes unitários para o backend.

## Tecnologias Utilizadas

- **Backend**:
  - Spring Boot (Java): Framework Java para desenvolvimento de aplicativos web.
  - PostgreSQL: Banco de dados relacional para armazenar informações de cursos e aulas.
  - DBeaver: Uma ferramenta de gerenciamento de banco de dados que oferece uma interface gráfica para visualizar, editar e administrar bancos de dados PostgreSQL e outras bases de dados. O DBeaver é utilizado para facilitar o gerenciamento e a interação com o banco de dados PostgreSQL, tornando mais fácil a administração e visualização dos dados da aplicação.
  - Spring Security e JWT: Para a camada de segurança da aplicação em Backend, utilizei o Spring Security em conjunto com JWT (JSON Web Tokens) para autenticação e autorização.

- **Frontend**:
  - Angular: Framework JavaScript/TypeScript para construção de interfaces de usuário.

- **Testes**:
  - Jasmine e Karma: Frameworks de teste para testes unitários em Angular.(Pelo menos 'e o que eu quero para o projeto)
  - JUnit e Mockito: Frameworks de teste para testes unitários em Spring Boot.

- **Containerização**:
  - Docker: Utilizado para criar containers isolados para o banco de dados PostgreSQL e outras possíveis partes do projeto.

## Como Executar o Projeto

Siga as etapas abaixo para executar o projeto localmente:


### Rodando Localmente:

1. Clone o repositório do GitHub:

	```bash
	git clone https://github.com/seu-usuario/seu-projeto.git
	cd seu-projeto
	```

2. Inicialize o Backend:

  - Certifique-se de ter o Java JDK 11 instalado (ou use o Dockerfile para criar uma imagem e depois execute o Docker).
  - Apos isso, pode rodar a aplicação, o servidor estará disponível em http://localhost:8080.

3. Inicialize o Frontend:

  - Certifique-se de ter instalado o Angular CLI (ou use o Dockerfile para criar uma imagem e depois execute o Docker).
  - Depois de ter certeza disso, navegue até o diretório onde está o projeto crud_angular (ou o nome que preferir, mas onde está a aplicação frontend) e execute o seguinte comando:
  
	```bash
	cd projeto_angular
	npm run start/ng serve
	```

  - O aplicativo estará disponível em http://localhost:4200.

4. Banco de Dados PostgreSQL:

  - Certifique-se de ter o Docker instalado.
  - Em seguida, vá para o diretório /database-docker e execute o seguinte comando:
  
	```bash
	cd projeco_backend
	cd database-docker
	sudo docker-compose up -d
	```
	
  - Isso iniciará um contêiner que executa a imagem do PostgreSQL, que é usada para executar a aplicação com o banco de dados.
  
### Rodando com Docker:
Você também pode executar a aplicação usando Docker. Certifique-se de ter o Docker instalado em sua máquina.

1. Clone o repositório do GitHub:

	```bash
	git clone https://github.com/seu-usuario/seu-projeto.git
	cd seu-projeto
	```
	
2. Inicialize o Backend com Docker:

	```bash
	cd projeto_spring
	docker build -t meu-projeto-spring .
	docker run -p 8080:8080 meu-projeto-spring
	```
	
- O servidor estará disponível em http://localhost:8080.

3. Inicialize o Frontend com Docker:

	```bash
	cd projeto_angular
	docker build -t meu-projeto-angular .
	docker run -p 80:80 meu-projeto-angular
	```
	
- O aplicativo estará disponível em http://localhost.

4. Banco de Dados PostgreSQL com Docker:

	```bash
	cd projeto_backend
	cd database-docker
	docker-compose up -d
	```
	
- Isso iniciará um contêiner que executa a imagem do PostgreSQL, que é usada para executar a aplicação com o banco de dados.


## Documentação com Swagger
A documentação completa da API pode ser encontrada no Swagger. Para acessar a documentação, siga as etapas abaixo:

1. Certifique-se de que o projeto backend está em execução.

2. Abra um navegador da web e vá para a seguinte URL:

   [Swagger API Documentation](http://localhost:8080/swagger-ui/index.html)

3. Isso abrirá a interface do Swagger, onde você pode explorar e testar os endpoints da API.

## Segurança com JWT e Spring Security

Para garantir a segurança da aplicação, utilizamos o JSON Web Token (JWT) em conjunto com o Spring Security. A aplicação foi configurada com dois níveis de acesso: ADMIN e USER.

- **ADMIN**: Tem permissão total para todas as operações.
- **USER**: Pode listar os cursos, mas não pode realizar operações de criação, atualização e exclusão.

### Usuários para Testes

Durante o desenvolvimento, criamos dois usuários de teste para demonstrar a autenticação:

- **Usuário Administrador (ADMIN)**
  - **Login**: thallyscezar
  - **Senha**: 123456789

- **Usuário Padrão (USER)**
  - **Login**: thallyscezarUser
  - **Senha**: 123456789
  
  ## Geração de Token de Acesso

Para obter um token de acesso, siga estas etapas:

1. Acesse o endpoint de login em sua aplicação:
   - [http://localhost:8080/auth/login](http://localhost:8080/auth/login)

2. Insira seu nome de usuário e senha (por exemplo, `thallyscezar` e `123456789`) e envie a solicitação.

3. Após a autenticação bem-sucedida, a resposta conterá um token JWT.

4. Copie o token JWT gerado.

## Enviando o Token nas Requisições

Para acessar as rotas protegidas em sua aplicação, você deve incluir o token JWT no cabeçalho de autorização da solicitação HTTP. Você deve formatar o token como um "Bearer Token".

Ao incluir o token JWT no cabeçalho, você terá acesso às operações permitidas com base no nível de acesso do seu usuário. Caso contrário, a solicitação resultará em um status HTTP 403 (Proibido).

## Imagens do Projeto

<!-- <p align="center">
  <span>Imagem da Página Incial</span>
  <img src="./asserts/imgs/../../assets/imgs/home.jpeg" alt="Project Image, Imagem da Página Incial">
</p> -->
#### Imagem da Página Inicial
![Imagem da Página Inicial](./assets/imgs/home.jpeg)

- *A Página Inicial é onde você encontrará a lista de cursos disponíveis. Aqui você pode adicionar novos cursos, remover cursos existentes e editar as informações dos cursos, como nome e categoria.*

<!-- <p align="center">
  <span>Imagem da Página de Edição</span>
  <img src="./asserts/imgs/../../assets/imgs/edit.jpeg" alt="Project Image, Imagem da Página Incial">
</p> -->
#### Imagem da Página de Edição
![Imagem da Página de Edição](./assets/imgs/edit.jpeg)

- *A Página de Edição permite que você faça edições detalhadas nos cursos. Você pode alterar o nome, a categoria e também gerenciar as aulas associadas a cada curso, incluindo adicionar, editar e remover aulas.*

<!-- <p align="center">
  <span>Imagem da Página de Add Cursos</span>
  <img src="./asserts/imgs/../../assets/imgs/create.jpeg" alt="Project Image, Imagem da Página Add Cursos">
</p> -->
#### Imagem da Página de Adicionar Curso
![Imagem da Página de Adicionar Curso](./assets/imgs/create.jpeg)

- *A Página de Adicionar Curso oferece a funcionalidade de criar novos cursos. Você pode especificar o nome, a categoria do curso e, além disso, adicionar, editar e remover aulas diretamente durante o processo de criação do curso.*