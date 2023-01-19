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
    console.log(params)
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

// add article
export function addPost(params){
    let data = new FormData()
    data.append('poster', JSON.stringify(params.post.poster))
    data.append('content', params.post.content)
    console.log('add post de l api')
    return fetch('http://localhost:4000/api/posts',{
        method:'POST',
        body: data,
        headers:{'Authorization': localStorage.getItem('token')}
    })
    .then(function(res){
        console.log('reussite' + res)
        return res.json()
    })
    .catch(function(err){
        console.log('echec' + err)
        console.log(err)
    })
}

