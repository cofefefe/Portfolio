import { createPath, json } from "react-router-dom"

// add user 
export function addUser(params){
    return fetch('http://localhost:4000/api/user/signup', {
        method:'POST',
        body: JSON.stringify(params),
        headers :{ 'Content-Type' : 'application/json; charset=utf-8' },
    })
    .then(function(response){
        return response.json
    })
    .catch(function(err){
        console.log(err)
    })
}


// user log in
export function userLogin(params){
    return fetch('http://localhost:4000/api/user/signin', {
        method:'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type':'application/json; charset=utf-8'},
    })
    .then(function (response){
        return response.json()
    })
    .catch(function(err){
        console.log(err)
    })
}

// verify if user is connected
export async function userAuth() {
    if (!localStorage.getItem('token')) {
        return false;
    }
    return fetch('http://localhost:4000/api/user/auth', {
        method: 'POST',
        body: JSON.stringify({ token: localStorage.getItem('token') }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
        .then(function (response) {
            return response.json()
        })
        .catch(function (error) {
            console.warn(error)
        })

}

// retrieve articles
export function getPosts(params){

    return fetch('http://localhost:4000/api/post',{
        method:'GET',
        headers:{ 'Content-Type': 'application/json; charset=utf-8; image/pgn; image/jpg', 'Authorization': localStorage.getItem('token')}
    })
    .then(function (res){
        return res.json()
    })
    .catch(function(err){
        console.log(err)
    })
}

// export function addPost(params){

//     console.log(params)
//     let data = new FormData()
//     data.append('post', JSON.stringify(params.post))
//     // data.append('content', params.post.content)
//     // data.append('poster', params.post.poster)
    
//     // console.log('poster', params.post.poster)
//     // console.log('content', params.post.content)
//     console.log('post', JSON.stringify(params.post))

//     return fetch('http://localhost:4000/api/post/add',{
//         method:'POST',
//         body: JSON.stringify(data),
//         headers:{'Content-Type': 'application/json; charset=utf-8', 'Authorization': localStorage.getItem('token')}
//     })
//     .then(function(res){
//         console.log('dans le then')
//         return res.json()
//     })
//     .catch(function(err){
//         console.log('dans le catch   '+ err)
//     })
// }

export function addPost(params){
    console.log(params)
    return fetch('http://localhost:4000/api/post', {
        method:'POST',
        body:params,
        headers:{'Authorization' : localStorage.getItem('token')}
    })
    .then(function(res){
        console.log(res.json())
        return res.json()
    })
    .catch(function(err){
        console.log('dans le catch ==>' + err)
    })
}

