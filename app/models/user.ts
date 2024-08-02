import cache from '#services/cache_service'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import redis from '@adonisjs/redis/services/main'

export default class User {
  declare name: string
  declare email: string
  declare age: number
  declare attract?: string
  constructor() {}

  static async create(input) {
    if (await cache.has(input.name)) {
      console.log('chache hit', await cache.get(input.name))
      return await cache.get(input.name)
    }
    const user = new User()
    user.name = input.name
    user.email = input.email
    user.age = input.age

    await cache.set(input.name, user)
    return user
  }
}
