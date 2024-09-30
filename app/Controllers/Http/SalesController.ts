import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sale from 'App/Models/Sale'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SalesController {
  
  public async index({ response }: HttpContextContract) {
    try {
      const sales = await Sale.query().preload('products')
      return response.status(200).json(sales) 
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao buscar vendas', error })
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ request,response }: HttpContextContract) {
    try {
      const { id_product, ...data } = request.only(['date', 'total', 'id_product', 'amount'])
      const sale = await Sale.create(data)
    
      if (id_product && id_product.length > 0) {
        await sale.related('products').attach(id_product)
        await sale.load('products')
      }

      return response.status(201).json(sale)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao adicionar venda', error })
    }
  }

  public async show({params, response}: HttpContextContract) {
    try {
      const sale = await Sale.query().where('id', params.id).preload('products').first()

      if (!sale) {
        return response.status(404).json({ message: 'Venda não encontrada' })
      }

      return response.status(200).json(sale)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao buscar venda', error })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const sale = await Sale.findOrFail(params.id)
      const { id_product, ...data } = request.only(['date', 'total', 'id_product', 'amount'])
    
      if (!sale) {
        return response.status(404).json({ message: 'Venda não encontrada' })
      }

      sale.merge(data)
      await sale.save()
    
      if (id_product && id_product.length > 0) {
        await sale.related('products').sync(id_product)
      }
    
      await sale.load('products') 
      return response.status(200).json(sale)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao atualizar produto', error })
    }
  }

  public async destroy({request,response}: HttpContextContract) {
    try {
      const sale:Sale|null = await Sale.find(request.param('id'))

      if (!sale) {
        return response.status(404).json({ message: 'Venda não encontrada' })
      }
      
      sale.delete()
      return response.status(200).json({ message: 'Produto deletado com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao deletar produto', error })
    }
  }
}
