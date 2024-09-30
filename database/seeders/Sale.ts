import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sale from 'App/Models/Sale'
import Product from 'App/Models/Product'
import { DateTime } from 'luxon'  // Importa o DateTime do luxon

export default class SalesSeeder extends BaseSeeder {
  public async run () {
    // Criar 3 vendas de exemplo
    const sales = await Sale.createMany([
      {
        date: DateTime.fromISO('2024-09-01'), // Usando DateTime para datas
        total: 1500.00,
      },
      {
        date: DateTime.fromISO('2024-09-10'), // Usando DateTime para datas
        total: 800.00,
      },
      {
        date: DateTime.fromISO('2024-09-15'), // Usando DateTime para datas
        total: 1200.00,
      },
    ])

    // Obter produtos já cadastrados (IDs 1 ao 6)
    const products = await Product.query().whereIn('id', [1, 2, 3, 4, 5, 6])

    // Associar produtos a vendas
    await sales[0].related('products').attach({
      1: { quantity: 2 },  // Produto 1 com quantidade 2
      2: { quantity: 1 },  // Produto 2 com quantidade 1
    })
    
    await sales[1].related('products').attach({
      3: { quantity: 1 },  // Produto 3 com quantidade 1
      4: { quantity: 2 },  // Produto 4 com quantidade 2
    })

    await sales[2].related('products').attach({
      5: { quantity: 3 },  // Produto 5 com quantidade 3
      6: { quantity: 1 },  // Produto 6 com quantidade 1
    })
  }
}
