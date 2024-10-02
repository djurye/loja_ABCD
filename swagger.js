const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
  info: {
    version: '1.0.0',            
    title: 'Loja_ABCD',             
    description: 'API to Loja_ABCD'         
  },
  servers: [
    {
      url: 'http://localhost:3333',         
      description: ''
    },
  ],
  tags: [
    {
      name: '',
      description: ''
    },
  ],
  components: {}
};

const outputFile = './swagger-output.json';
const routes = ['./start/routes.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);