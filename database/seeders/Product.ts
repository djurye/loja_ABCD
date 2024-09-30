import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Product.createMany([
      {
        "name": "iPhone 14 Pro",
        "description": "Apple iPhone 14 Pro with A16 Bionic chip, 128GB storage, 6.1-inch display.",
        "price": 999.99,
        "stock": 50
      },
      {
        "name": "Samsung Galaxy S23",
        "description": "Samsung Galaxy S23 with Exynos 2200, 256GB storage, 6.1-inch AMOLED display.",
        "price": 849.99,
        "stock": 100
      },
      {
        "name": "Google Pixel 7",
        "description": "Google Pixel 7 with Google Tensor G2, 128GB storage, 6.3-inch OLED display.",
        "price": 699.99,
        "stock": 75
      },
      {
        "name": "OnePlus 11",
        "description": "OnePlus 11 with Snapdragon 8 Gen 2, 256GB storage, 6.7-inch AMOLED display.",
        "price": 749.99,
        "stock": 60
      },
      {
        "name": "Xiaomi 13 Pro",
        "description": "Xiaomi 13 Pro with Snapdragon 8 Gen 2, 512GB storage, 6.73-inch AMOLED display.",
        "price": 899.99,
        "stock": 80
      }
    ])
  }
}
