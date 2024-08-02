import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import app from '@adonisjs/core/services/app'
import User from '#models/user'

@inject()
export default class UserService {
  constructor(protected ctx: HttpContext) {}
  respond() {
    return `user service respond ${this.ctx.request.method()}`
  }
  async findUser() {
    return Promise.resolve({ id: 1, user: 'user1' })
  }
  async createUser(user) {
    const newUser = User.create(user)
    return newUser
  }
}
