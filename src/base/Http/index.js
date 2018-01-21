/**
 * Created by zhangyi on 2017/11/22.
 */
import axios from 'axios'

axios.defaults.timeout = 2000
axios.defaults.withCredentials = true

class Http {
    constructor () {

    }

    _jsonToQueryString(json) {
        return '?' +
            Object.keys(json).map(function (key) {
                return encodeURIComponent(key) + '=' + (json[key]);
            }).join('&');
    }

    async get (options) {
        const { url, params } = options
        const paramsString = this._jsonToQueryString(params)
        const URL = `${url}${paramsString}`

        let response
        try {
            response = await axios.get(URL)
            console.log('get response.data:', response.data)
            return response.data;
        } catch(error) {
            console.log('get error:', error)
            return error
        }
    }

    async post (options) {
        const { url, params } = options

        let response
        try {
            console.log('post url:', url)
            console.log('post params:', params)

            response = await axios.post(url, params)
            console.log('post response.data:', response.data)
            return response.data
        } catch(error) {
            console.log('post error:', error)
            return error
        }
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new Http();
        }
        return this.instance;
    }
}

const http = Http.getInstance();
export default http;
