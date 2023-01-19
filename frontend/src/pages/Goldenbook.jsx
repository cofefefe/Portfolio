import React, { useState, useContext } from 'react';
import Nav from '../components/Nav';
import {AiFillWarning} from 'react-icons/ai'
import { addPost, getPosts } from '../utils/apicalls';
import { UserContext } from '../utils/userContext';

function Goldenbook() {
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState([]);
    const [user] = useContext(UserContext);



    const refreshPosts = () => {
        getPosts().then((postsResult) => {
            setPosts(postsResult)
        })
    }

    const createPost = (req,res,next) => {
        let params = {
            post: {
                content:content,
                poster: user.pseudo
            },
        }
        addPost(params).then(function () {
            console.log('on add post dans golden book')
            refreshPosts()
        });
    }
        return(
        <>
            <Nav />
            <main className="goldenbook d-flex justify-content-around">
                <div className="goldenbook__sending d-flex flex-column mt-5">
                    <div className="goldenbook__sending--advert d-flex align-items-center">
                        <AiFillWarning className="goldenbook__icon"/>
                        <p className="m-0">Pour poster un message, connectez vous !</p>
                    </div>
                    <aside className="goldenbook__sending--write d-flex flex-column mt-5 align-items-center">
                        <h4 className="mb-4">Votre message pour le livre d'or</h4>
                        <textarea rows="13" onChange={(e)=>{setContent(e.target.value)}}></textarea>
                        <button className=" goldenbook__sending--button mt-3" onClick={createPost}>Envoyer</button>
                    </aside>
                </div>
                <section className="goldenbook__msg mt-5">
                    <div className="goldenbook__msg--title">
                        Vos messages
                    </div>
                    <aside>

                    </aside>
                </section>
            </main>
        </>
    )
    
}

export default Goldenbook;