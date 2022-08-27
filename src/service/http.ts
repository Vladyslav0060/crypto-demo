import axios from 'axios'

interface IHttpService {
    get(data: any, headers?:any): any;
    post(data: any, headers?:any): void;
}

class HttpService implements IHttpService {
    get() {
        // return axios.get()
    }
    post(): void {
        
    }
}

export default new HttpService();