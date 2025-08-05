import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params:{
        key: '79508bb754cb49398935210f7524c7e9'
    }
})