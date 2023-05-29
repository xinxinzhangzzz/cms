
enum cacheType {
	local,
  session
}

class cache {
  storage: Storage
  
  constructor(type: cacheType) {
    this.storage = type === cacheType.local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    if(value === null || value === "") return
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value: any = this.storage.getItem(key)

    if(!value) return

    return JSON.parse(value)
  }

  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const local = new cache(cacheType.local)
const session = new cache(cacheType.session)

export {
  local,
  session
}