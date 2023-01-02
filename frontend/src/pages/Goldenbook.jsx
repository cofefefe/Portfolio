import React, { useState } from 'react';
import Nav from '../components/Nav';
import {AiFillWarning} from 'react-icons/ai'

function Goldenbook() {
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
                        <textarea rows="13"></textarea>
                        <button className=" goldenbook__sending--button mt-3">Envoyer</button>
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