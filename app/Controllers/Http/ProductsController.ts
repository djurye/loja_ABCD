import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    try {
      const products = await Product.all()
      return response.status(200).json(products)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao buscar produtos', error })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['name', 'description', 'price', 'amount'])
      const product = await Product.create(data)
      return response.status(201).json(product)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao criar produto', error })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const product = await Product.find(params.id)
      if (!product) {
        return response.status(404).json({ message: 'Produto não encontrado' })
      }
      return response.status(200).json(product)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao buscar produto', error })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const product = await Product.find(params.id)
      if (!product) {
        return response.status(404).json({ message: 'Produto não encontrado' })
      }

      const data = request.only(['name', 'description', 'price', 'amount'])
      product.merge(data)
      await product.save()

      return response.status(200).json(product)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao atualizar produto', error })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const product = await Product.find(params.id)
      if (!product) {
        return response.status(404).json({ message: 'Produto não encontrado' })
      }

      await product.delete()
      return response.status(200).json({ message: 'Produto deletado com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao deletar produto', error })
    }
  }
}
