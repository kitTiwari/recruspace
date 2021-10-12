import axios from 'axios'
import jsonp from 'axios-jsonp'
export const AirelineService = () => {
  // let jsonpAdapter = require('axios-jsonp')
  const url = `https://www.kayak.com/h/mobileapis/directory/airlines/homework`

  return {
    getAirlines: async () => {
      const response = await axios({
        url: url,
        adapter: jsonp,
        callbackParamName: 'jsonp'
      }).then(res => {
        return res.data
      })
      return response
    }
  }
}
