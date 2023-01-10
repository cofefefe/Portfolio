import React, { useState } from 'react';
import Nav from '../components/Nav';
//icons
import { AiFillHtml5,AiFillGithub} from 'react-icons/ai';
import { SiCss3, SiJavascript, SiReact, SiSass, SiMongodb, SiBootstrap } from 'react-icons/si';


import booki from '../assets/projects/bookivisual.png'
import kanap from '../assets/projects/Kanap.PNG'
import omf from '../assets/projects/Ohmyfood.PNG'
import panthere from '../assets/projects/Lapanthère.PNG'

function Project({ name, image, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="project"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}


function Tools({name, image}){

  return(
    <>
    <div className="projects__tools--card d-flex justify-content-between align-items-center">
        {name + image}
    </div>
    </>
  )
}
function Projects(name, image){
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = [
    {name: "Booki - Intégration d'une maquette - HTML / CSS", image:booki },
    {name: "OhMyFood - Animation - CSS", image:omf },
    {name: "La Panthère - Audit & optimisation SEO - HTML / CSS", image:panthere },
    {name: "Kanap - Site e-commerce dynamique - HTML / CSS / JS", image:kanap },
    {name: "Piiquante - Backend ( inscription, post ) - Node / JS", image: "image1.jpg" },
    {name: "Groupomania - Reseau social d'entreprise - React / Node", image: "image1.jpg" }
  ]
  const tools = [
    {name: "HTML", image:<AiFillHtml5 className="projects__tools--card--html"/> },
    {name: "CSS", image:<SiCss3 className="projects__tools--card--css"/>},
    {name: "Bootstrap", image:<SiBootstrap className="projects__tools--card--bt"/> },
    {name: "Javascript", image: <SiJavascript className="projects__tools--card--js"/> },
    {name: "React", image: <SiReact className="projects__tools--card--react"/> },
    {name: "SASS", image: <SiSass className="projects__tools--card--sass"/> },
    {name: "Github", image: <AiFillGithub className="projects__tools--card--git"/> },
    {name: "MongoDB", image: <SiMongodb className="projects__tools--card--mongo"/> }
  ]
  return (
    <>
      <Nav />
      <main className="projects d-flex col-12 w-100 h-100 flex-row">
        <section className="projects__choice col-6 bg-light">
          <div className="projects__list d-flex justify-content-center flex-column align-items-center">
            <h4 className="text-center mt-5 mb-5 col-6">
              Selectionnez un projet, et parcourez le sur github
            </h4>
            {projects.map((project) => (
              <Project
                name={project.name}
                onMouseEnter={() => setSelectedProject(project.image)}
                onMouseLeave={() => setSelectedProject(null)}
              />
            ))}
            </div>
          <div className="projects__tools d-flex">
            <h5 className="mt-5 mb-4 projects__tools--title col-12">
              Outils maîtrisés
            </h5>
            {tools.map((tool) => (
              <Tools name={tool.name} image={tool.image} />
            ))}
          </div>
        </section>
        <section className="project__display col-6 bg-warning w-50 h-100">
        <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
              {selectedProject && (
                <img
                  src={selectedProject}
                  alt="project"
                  className="project-image"
                />
              )}
        </section>
      </main>
    </>
  );
}
export default Projects