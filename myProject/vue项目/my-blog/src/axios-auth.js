import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://wd7869756315ozmdzd.wilddogio.com'
})
// instance.defaults.headers.common['Authorization'] = 'Token'
// instance.defaults.headers.post['Content-type'] = 'application/urlencode'
// instance.defaults.headers.get['Accepts'] = 'application/json'

export default instance