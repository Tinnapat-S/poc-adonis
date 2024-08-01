import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class UserService {
  constructor(protected ctx: HttpContext) {}
  respond() {
    return `user service respond ${this.ctx.request.method()}`
  }
}
