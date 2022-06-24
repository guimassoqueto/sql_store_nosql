# sql_store_nosql

Pure NodeJS web application. Technologies: NodeJS, prisma.io, MongoDB (Mongo Atlas), pug (templating engine), typescript, ExpressJS.

## How to run

1 - Clone the repo:
`git clone https://github.com/guimassoqueto/store_nosql.git`

2 - Install modules:
`npm install`

3 - Install typescript globally (optionl):
`npm install -g typescript`

4 - Tranpile to Javascript (if you have installed typescript globally):
`tsc build`

5 - Create an Mongo Atlas account and create a free database:  
[Click here to create an account](https://www.mongodb.com/atlas/database)

6 - Insert the database connection string in .env.example in the root, and remove the part '.example' of the file's name

7 - Generate the schemas:
`npx prisma generate`

8 - Run typescript in watch mode:
`npm run tsc`

9 - Move the static files:
`npm run cpfiles`

10 - Run nodemon:
`npm run nodemon`

11 - Open http://localhost:3000 to view the project
