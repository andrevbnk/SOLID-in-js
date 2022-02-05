
// Dependency inversion principle
// Грубо говоря, не нужно жёстко зависить от определённой реализации, а от некой абстракции, которую мы сможем легко поменять
// В данном случае у нас происходит внедрение зависимости через ассоциацию 

class Fetch {
    request(url) {
      // return fetch(url).then(r => r.json())
      return Promise.resolve('data from fetch')
    }
  }
  
  class LocalStorage {
    get() {
      const dataFromLocalStorage = 'data from local storage'
      return dataFromLocalStorage
    }
  }
  
  class FetchClient {
    constructor() {
      this.fetch = new Fetch()
    }
  
    clientGet() {
      return this.fetch.request('vk.com')
    }
  }
  
  class LocalStorageClient {
    constructor() {
      this.localStorage = new LocalStorage()
    }
  
    clientGet(key) {
      return this.localStorage.get(key)
    }
  }
  
  
  class Database {
    constructor(client) {
      this.client = client
    }
  
    getData(key) {
      return this.client.clientGet(key)
    }
  }
  
  
  const db = new Database(new LocalStorageClient())
  
  console.log(db.getData('rand'))
