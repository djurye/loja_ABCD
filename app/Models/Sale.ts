import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Sale extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public date: DateTime

  @column()
  public total: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Product, {
    pivotTable: 'sales_products',
    pivotColumns: ['quantity'],
    localKey: 'id',
    pivotForeignKey: 'id_sale',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'id_product',
  })
  declare products: ManyToMany<typeof Product>
}
