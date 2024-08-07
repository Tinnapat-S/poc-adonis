import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import app from '@adonisjs/core/services/app'
import UserModal from '#models/user'
import Movie from '#models/movie'

interface User {
  title: string
  slug: string
  summary: string
}
@inject()
export default class UserService {
  constructor(protected ctx: HttpContext) {}
  respond() {
    return `user service respond ${this.ctx.request.method()}`
  }
  async findUser(): Promise<Movie[]> {
    // return [{ title: 'title1', slug: 'slug1', summary: 'summary1' }]
    return await Movie.all()
  }
  async createUser(user: User) {
    const newUser = UserModal.create(user)
    return newUser
  }
}
