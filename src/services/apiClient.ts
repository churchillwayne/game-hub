import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '79508bb754cb49398935210f7524c7e9'
    }
});

class ApiClient<T> {
        
    endPoint:string;

    constructor(endPoint:string){
        this.endPoint = endPoint;
    }

    getAll = (config: AxiosRequestConfig) =>{
        return axiosInstance
            .get<FetchResponse<T>>(this.endPoint, config)
            .then(res => res.data);
    }

    // post = (data: T) => {
    //     return axiosInstance
    //     .post<T>(this.endPoint, data)
    //     .then(res => res.data);
    // }
    
}

export default ApiClient;