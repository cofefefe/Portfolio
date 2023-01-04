import React, { useState } from 'react';
import Nav from '../components/Nav';
//icons
import { AiFillHtml5,AiFillGithub} from 'react-icons/ai';
import { SiCss3, SiJavascript, SiReact, SiSass, SiMongodb, SiBootstrap } from 'react-icons/si';

let aside1 = document.getElementsByClassName('test1')
let image1 = document.getElementById('image1')

console.log({aside1}+{image1})


function showImage(){
        image1.style.display='block'
}


function Projects() {
    return(
        <>
            <Nav />
            <main className="projects d-flex col-12 w-100 h-100r">
                <section className="projects__choice col-6 bg-light">
                    <h5 className="text-center mt-5 mb-5">Selectionnez un projet, et parcourez le sur mon Githbub.</h5>
                    <div className="projects__list d-flex justify-content-center flex-column align-items-center">
                        <aside id="aside1" onClick={showImage} className="projects__list--card test1">Booki - Intégration d'une maquette - HTML / CSS</aside>
                        <aside id="aside2" className="projects__list--card">OhMyFood - Animation - CSS</aside>
                        <aside id="aside3" className="projects__list--card">La Panthère - Audit & optimisation SEO - HTML / CSS</aside>
                        <aside id="aside4" className="projects__list--card">Kanap - Site e-commerce dynamique - HTML / CSS / JS</aside>
                        <aside id="aside5" className="projects__list--card">Piiquante - Backend ( inscription, post ) - Node / JS</aside>
                        <aside id="aside6" className="projects__list--card">Groupomania - Reseau social d'entreprise - React / Node</aside>
                    </div>
                <div className="projects__tools d-flex">
                    <h5 className="mt-5 mb-4 projects__tools--title col-12">Outils maîtrisés</h5>
                        <div className="projects__tools--card d-flex justify-content-between align-items-center">HTML <AiFillHtml5 className="icon projects__tools--card--html"/></div>
                        <div className="projects__tools--card d-flex justify-content-between align-items-center">CSS<SiCss3 className="icon projects__tools--card--css"/></div>
                        <div className="projects__tools--card d-flex justify-content-between align-items-center">JS<SiJavascript className="icon projects__tools--card--js"/></div>
                        <div className="projects__tools--card d-flex justify-content-between align-items-center">React<SiReact className="icon projects__tools--card--react"/></div>
                        <div className="projects__tools--card d-flex justify-content-between align-items-center">SASS<SiSass className="icon projects__tools--card--sass"/></div>
                        <div className="projects__tools--card d-flex justify-content-between align-items-center">Bootstrap<SiBootstrap className="icon projects__tools--card--bt"/></div>
                        <div className="projects__tools--card d-flex justify-content-between align-items-center">Github<AiFillGithub className="icon projects__tools--card--git"/></div>
                        <div className="projects__tools--card d-flex justify-content-between align-items-center">MongoDb<SiMongodb className="icon projects__tools--card--mongo"/></div>
                </div>
                </section>
                <section className="project__display col-6 bg-warning w-50 h-100">
                    {/* <img id="image1" data-image-url="" style={{display:'none'}}/>
                    <img id="image2" data-image-url="" style={{display:'none'}}/>
                    <img id="image3" data-image-url="" style={{display:'none'}}/>
                    <img id="image4" data-image-url="" style={{display:'none'}}/>
                    <img id="image5" data-image-url="" style={{display:'none'}}/>
                    <img id="image6" data-image-url="" style={{display:'none'}}/> */}
                    <div id="image1" data-image-url="" style={{display:'none', backgroundColor:'red'}}/>
                    <div id="image2" data-image-url="" style={{display:'none'}}/>
                    <div id="image3" data-image-url="" style={{display:'none'}}/>
                    <div id="image4" data-image-url="" style={{display:'none'}}/>
                    <div id="image5" data-image-url="" style={{display:'none'}}/>
                    <div id="image6" data-image-url="" style={{display:'none'}}/>

                </section>
            </main>
            
        </>
    )
    
}

export default Projects;