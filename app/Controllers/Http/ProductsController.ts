import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    
    return await Product.all()
  }

  public async create({}: HttpContextContract) {

  }

  public async store({request}: HttpContextContract) {
    const product:Product = await Product.create(request.all())
    return product
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({request}: HttpContextContract) {
    const product:Product|null = await Product.find(request.param('id'))

    if (!product) {
      return { message: 'Product not found' }
    }

    product.name = request.input('name')
    product.description = request.input('description')
    product.price = request.input('price')
    product.stock = request.input('stock')
    await product?.save()
  }

  public async destroy({request}: HttpContextContract) {
    const product:Product|null = await Product.find(request.param('id'))

    if (!product) {
      return { message: 'Product not found' }
    }
    
    product.delete()
  }
}
