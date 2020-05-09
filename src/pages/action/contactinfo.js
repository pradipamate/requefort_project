import Axios from "axios";
export function Contactformdata(bodyFormData) {
    console.log("post data", bodyFormData);
    return dispatch => {
        console.log(bodyFormData);
        //dispatch(dataAdding("Adding"));
        return fetch('http://192.168.43.71/Society/api/contactinfo', {
            method: 'post',
            body: bodyFormData,
        })
            .then(result => result.json())
            .then((data) => {
                console.log("Added", data);
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

export function fetchstudent() {
    return dispatch => {
        dispatch(datafetchstart());
                    // http://192.168.43.71/Society/api/studentdeatils
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then((result) => {
                console.log("Allfakedata", result)
                dispatch(datafetchsuccessfully(result))
            })
            .catch((err) => {
                console.error('err', err);
            });
     }
 }
 
export const datafetchstart = () => ({
    type: "DATA_FETCH_START",
})

export const datafetchsuccessfully = (data) => ({
    type: "DATA_FETCH",
    payload: data
})

export const deleteData = (id) => {
     console.log(id);
        return dispatch => {
             console.log('deleting Start')
               fetch('http://192.168.43.71/Society/api/delete_contactinfodetails/' + id,{
                method: 'post',
              })
            .then(result => result.json())
            .then((result) => {
                console.log('deleting data', result);
                result.json()
                console.log("done");
            })
            .catch((err)=>{
               console.log("error")
            })
        }

    // //for axios method not working
    //      const axios = require('axios');
    //        console.log('deleting Start');
    //             axios('http://192.168.43.71/Society/api/delete_contactinfodetails/' + id,{
    //                     method: 'post', 
    //                 }
    //             )
    //         .then(function(response) {
    //             console.log(response);
    //             return response.json()
    //             })

}

// export const StartDeleteData = () => ({
//     type = "DELETE_START",
// })
// export const DeleteDatacompleted = (id) => ({
//     type="DELETE_START",
//     payload: data
// })