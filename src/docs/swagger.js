import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentación',
      version: '1.0.0',
      description: 'Documentación de todas las rutas del proyecto',
    },
  },
  apis: [
    './src/routes/api/*.js', 
    './src/routes/*.js'
  ],
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);