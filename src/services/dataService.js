import axios from 'axios'

let dataServiceInstance=(()=>{
    const instance=axios.create({
        baseURL:"https://firestore.googleapis.com/v1/projects/project_id/databases/(default)/documents",
        withCredentials: false,
        timeout: 1 * 60 * 1000, // 60 seconds
    })

    return instance
})()

console.log(dataServiceInstance)

let get=async (endpoint)=>{
    try{
       let response= await dataServiceInstance.get()
       console.log(response)
       return response.data
    }
    catch(error){
        throw error
    }
}

export let dataService={
    get
}