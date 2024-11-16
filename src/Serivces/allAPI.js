import { BASEURL } from "./baseURL";
import { commonAPI } from "./commonAPI";



export const loginAPI = async(logindata)=>{
    return await commonAPI("POST",`${BASEURL}/user/login`,logindata,'')
}

//user details 

export const getUserDetailsAPI = async()=>{
    return await commonAPI("GET",`${BASEURL}/shero/usedetails`,'','')
}



//for search 

export const getGrievanceDetailsAPI = async(searchKey)=>{
    return await commonAPI("GET",`${BASEURL}/shero/grievancedetails?search=${searchKey}`,'','')
}


//for count 
export const getGrievanceDetailsAPIForCount = async()=>{
    return await commonAPI("GET",`${BASEURL}/shero/countgrei`,'','')
}


//get selected

export const getSelectedGrie = async(gid)=>{
    return await commonAPI("GET",`${BASEURL}/shero/selectGrie/${gid}`,'','')
}
