<h1 align="center"> TrapperKeeper </h1>

<h5 align="center">  By:  <a href="https://github.com/zavadev">Nathan Zavala</a> - <a href="https://trapperkeeper-notes.herokuapp.com/"><i>Live site</i></h5>

#### Key Features
- Notebooks: user can create, read, and delete any of their notebooks
- Notes: user can add notes to a notebook, read all notes of a notebook, and edit and delete notes

#### Technology used
- ![alt text](https://github.com/abranhe/programming-languages-logos/blob/master/src/javascript/javascript_24x24.png) JavaScript
- ![alt text](https://github.com/abranhe/programming-languages-logos/blob/master/src/html/html_24x24.png) HTML
- ![alt text](https://github.com/abranhe/programming-languages-logos/blob/master/src/css/css_24x24.png) CSS
- ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg) Postgres
- ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg) Node.Js

![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/git.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/heroku.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/javascript.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/react.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)

#### How to use this application
1. Clone this repo.
  - git clone https://github.com/zavadev/trapper-keeper
2. Install dependencies from the root directory.
  - npm install
3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
  - CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
4. Create a .env file in the backend directory based on the .env.example found within the respective directory.
5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET and your desired PORT (preferably 5000).
6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
  - "proxy": "http://localhost:5000"
7. Create Database, Migrate, and Seed models.
  - npx dotenv sequelize db:create
  - npx dotenv sequelize db:migrate
  - npx dotenv sequelize db:seed:all
8. Start the services in the backend directory.
  - npm start
9. Start the services in the frontend directory, which whould open the project in your default browser. If not, navigate to http://localhost:3000
  - npm start
10. You can use the Demo user or create an account to being using .
