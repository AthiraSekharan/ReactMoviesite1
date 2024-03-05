
import { commonAPI } from './commonAPI'
import { SERVER_URL } from './sever_url'



export const uploadVideoAPI =async(video)=>{
    //send request to add compomnent
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}


export const getAllVideosAPI =async()=>{
    
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")

}



export const removeVideoAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}



//save Category to category component
export const addCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)

}


//get Category to category component
export const getCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")

}
//remove category api
export const removeCategoryAPI = async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})

}
//get single video api
export const getVideoAPI = async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")

}

//update category API
export const UpdateCategoryAPI = async(categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)

}
//get single category api
export const getSingleCategoryAPI = async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")

}