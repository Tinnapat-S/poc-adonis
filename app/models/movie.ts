import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import UserService from '#services/user_service'
import { LucidModel } from '@adonisjs/lucid/types/model'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare statusId: number

  @column()
  declare writerId: number

  @column()
  declare directorId: number

  @column()
  declare title: string

  @column()
  declare slug: string

  @column()
  declare summary: string

  @column()
  declare abstract: string

  @column()
  declare posterUrl: string

  @column.dateTime()
  declare releasedAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  static async all(): Promise<Movie[]> {
    try {
      const moviePromises: Promise<Movie>[] = []

      for (let i = 0; i < 2; i++) {
        const movie = new Movie()
        movie.title = 'title' + i
        movie.slug = 'slug' + i
        movie.summary = 'summary' + i

        moviePromises.push(Promise.resolve(movie))
      }

      const movies = await Promise.all(moviePromises)

      return movies
    } catch (error) {
      console.log('An error occurred while trying to fetch movies from the database.')
      console.log('this is the error', error)
      return []
    }
  }
}
