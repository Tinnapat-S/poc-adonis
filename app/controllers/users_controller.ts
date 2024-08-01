import type { HttpContext } from '@adonisjs/core/http'
import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}
  handle() {
    return this.userService.respond()
  }
  async testUser(ctx: HttpContext) {
    return [
      { id: 1, user: 'user1' },
      { id: 2, user: 'user2' },
    ]
  }
}
