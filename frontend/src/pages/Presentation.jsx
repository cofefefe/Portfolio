import React, { useState } from 'react';
import Nav from '../components/Nav';
// icons
import { FaFeatherAlt, FaDog, FaBookOpen } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';


function Presentation() {

    function updateContentBiography() {
        // Récupération de la div
        let contentDiv = document.getElementById('content');
        console.log(contentDiv)
        // contentDiv.innerHtml = '<aside>EST CE QUE CA MARCHE PTN<aside/>'
        // contentDiv.style.color='red'

      }

    return(
        <>
            <Nav />
            <section className="presentation">
                <div className="presentation__nav d-flex justify-content-around">
                    <button onClick={updateContentBiography} className="presentation__nav--bio d-flex mt-5 align-items-center">  
                        <p className="m-0">Biographie</p>
                        <FaFeatherAlt />
                    </button>
                    <button onClick="" className="presentation__nav--hobbies d-flex mt-5 align-items-center">
                        <p className="m-0">Passions</p>
                        <FaDog />
                    </button>
                    <button onClick="" className="presentation__nav--goals d-flex mt-5 align-items-center">
                        <p className="m-0">Objectifs</p>
                        <FiTarget />
                    </button> 
                    <button onClick="" className="presentation__nav--ref d-flex mt-5 align-items-center">
                        <p className="m-0">Références</p>
                        <FaBookOpen />
                    </button>                    
                </div>
                <aside className="presentation__description mt-5" id="content">
                    <p className="m-0" >Voici un contenu plus personnel,<br/>pour apprendre à me connaître !</p>
                </aside>
            </section>
        </>
    )
    
}

export default Presentation;