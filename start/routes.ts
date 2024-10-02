/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/product','ProductsController.index')
Route.post('/product','ProductsController.store')
Route.put('/product','ProductsController.update')
Route.delete('/product','ProductsController.destroy')

Route.get('/sale','SaleController.index')
Route.get('/sale/:id','SaleController.index')
Route.post('/sale','SaleController.store')
Route.put('/sale/:id','SalesController.update')
Route.delete('/sale/:id','SalesController.destroy')

Route.get('/api-docs', 'SwaggersController.index')