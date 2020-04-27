
export function Contactformdata(bodyFormData){
    console.log("post data",bodyFormData);
    return dispatch => {
        console.log(bodyFormData);
       // dispatch(dataAdding("Adding"));
        return fetch('http://192.168.43.71/Society/api/contactinfo',{
            method:'post',
            body:bodyFormData,
         })
       .then(result=>result.json())
       .then((data)=>{
           console.log("Added",data);
       })



     //for axios method
    //  const axios = require('axios');
    //  axios('http://192.168.43.71/Society/api/contactinfo',{
    //                 method: 'post', 
    //                 data:bodyFormData, 
    //               headers:{'Content-Type': 'x-www-form-urlencoded'
    //             }
    //         })
    //     .then(function(response) {
    //         console.log(response);
    //         return response.json()
    //         })


       }
}

export function fetchstudent(){   
    return dispatch =>{
        dispatch(datafetchstart());
        // http://192.168.43.71/Society/api/studentdeatils
        return fetch("https://fakerestapi.azurewebsites.net/api/Books")
        .then(result=>result.json())
        .then((data)=>{
           console.log("Allfakedata", data)
           dispatch(datafetchsuccessfully(data))
        })
    }
}
export const datafetchstart=()=>({
    type:"DATA_FETCH_START",
 })

export const datafetchsuccessfully=(data)=>({
   type:"DATA_FETCH",
   payload:data
})