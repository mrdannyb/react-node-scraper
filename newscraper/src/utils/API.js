const axios = require('axios');

export default {
  getArticles: function () {
    return axios.get('/api/search')
  }
}
