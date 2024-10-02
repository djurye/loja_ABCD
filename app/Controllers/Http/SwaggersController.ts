import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../../start/swagger.json')
const express = require('express')
const app = express()

export default class SwaggerController {
  public async index({ response }: HttpContextContract) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    // Sending raw HTML for the Swagger UI page
    const swaggerHtml = swaggerUi.generateHTML(swaggerDocument)
    return response.status(200).send(swaggerHtml)
  }
}
