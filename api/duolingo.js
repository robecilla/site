import fetch from 'isomorphic-unfetch'

export default class DuolingoAPI {
  constructor() {
    this.username = 'roberto.vecilla'
    this.password = process.env.DUO_PASS
    this.jwt = null
  }

  async login() {
    let login_url = 'https://www.duolingo.com/login'
    const res = await fetch(login_url, {
      method: 'POST',
      body: JSON.stringify({
        login: `${this.username}@gmail.com`,
        password: this.password
      })
    });
  
    this.jwt = await res.headers.get('jwt');
  }

  async getUserStats(username) {
    const fields = ['username', 'id', 'language_data', 'learning_language', 'fullname', 'rupees', 'site_streak']
    const language_data_fields = ['points_ranking_data']

    let stats = {}
    let user_url = `https://duolingo.com/users/${username}`
    
    let res = await fetch(user_url, {
      method: 'GET',
      headers: { cookie:`jwt_token=${this.jwt};` }
    })
  
    let allStats = await res.json();
    
    for(let stat in allStats) {
      if(fields.includes(stat)) {
        stats[stat] = allStats[stat]
      }
    }
  
    for(let stat in stats.language_data[stats.learning_language]) {
      if(language_data_fields.includes(stat)) {
        let points = stats.language_data[stats.learning_language][stat].filter(f => f.self)[0]['points_data']['total']
        stats['points'] = points
      }
    }

    delete stats.language_data
    return stats
  }
}