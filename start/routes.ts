/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import RedisController from '#controllers/redis_controller'
import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'worldnaja',
  }
})

//middleware
router
  .post('posts', () => {
    return 'allposts'
  })
  .use((_, next) => {
    // pass the next middleware
    console.log('this is a middleware')
    return next()
  })

//routes group
router
  .group(() => {
    router.get('/', async () => {
      return { test: 'nothing' }
    })
    router.get('/test', async () => {
      return { test: 'test' }
    })
  })
  .prefix('api')

//use controller in route
router.post('/users', [UsersController])
router.delete('/redis/:slug', [RedisController, 'destroy']).as('redis.destroy')
router.delete('/redis/flush', [RedisController, 'flush']).as('redis.flush')

//or router.get('users', "#controllers/users_controller.testUser")
