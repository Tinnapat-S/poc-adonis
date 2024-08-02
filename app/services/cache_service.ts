import redis from '@adonisjs/redis/services/main'
class CacheService {
  // #store: Record<string, any> = {}
  async has(...keys: string[]) {
    return redis.exists(keys)
    // return key in this.#store
  }
  async get(key: string) {
    const value = await redis.get(key)
    return value && JSON.parse(value)
    // return this.#store[key]
  }

  async set(key: string, value: any) {
    return redis.set(key, JSON.stringify(value))
    // return (this.#store[key] = value)
  }

  async delete(...keys: string[]) {
    return redis.del(keys)
    // delete this.#store[key]
  }

  async flushDb() {
    return redis.flushdb()
  }
}

const cache = new CacheService()

export default cache
