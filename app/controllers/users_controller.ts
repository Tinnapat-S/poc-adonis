import type { HttpContext } from '@adonisjs/core/http'
import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'
import User from '#models/user'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}
  async handle(ctx: HttpContext) {
    // const user = new User()
    // user.name = ctx.request.body().name
    // user.email = ctx.request.body().email
    // user.age = ctx.request.body().age

    // return await this.userService.createUser(user)

    return await this.userService.findUser()
  }
  async testUser(ctx: HttpContext) {
    return [
      { id: 1, user: 'user1' },
      { id: 2, user: 'user2' },
    ]
  }
}
