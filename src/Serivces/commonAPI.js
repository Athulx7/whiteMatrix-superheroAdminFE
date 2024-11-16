import { data } from "autoprefixer";
import axios from "axios";

export const commonAPI = async(httpreq,url,reqBody,reqHeader)=>{
    const reqConfig = {
        method:httpreq,
        url:url,
        data:reqBody,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}