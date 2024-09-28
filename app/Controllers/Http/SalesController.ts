import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sale from 'App/Models/Sale'

export default class SalesController {
  public async index({}: HttpContextContract) {
        
    return await Sale.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const sale:Sale = await Sale.create(request.all())
    return sale
  }

  public async show({params}: HttpContextContract) {
    const sale = await Sale.find(params.id)
    
    if (!sale) {
      return { message: 'Sale not found' }
    }

    return sale

  }

  public async edit({}: HttpContextContract) {}

  public async update({request}: HttpContextContract) {
    const sale:Sale|null = await Sale.find(request.param('id'))

    if (!sale) {
      return { message: 'sale not found' }
    }

    sale.date = request.input('date')
    sale.total = request.input('total')
    await sale?.save()

    return sale
  }

  public async destroy({request}: HttpContextContract) {
    const sale:Sale|null = await Sale.find(request.param('id'))

    if (!sale) {
      return { message: 'sale not found' }
    }
    
    sale.delete()
  }
}
