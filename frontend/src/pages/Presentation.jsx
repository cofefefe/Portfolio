import React, { useState, Component } from 'react';
import Nav from '../components/Nav';
// icons
import { FaFeatherAlt, FaDog, FaBookOpen } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';


function Presentation (){
    const [selected, setSelected] = useState('');

    const handleClick = (elem) => {
        setSelected(elem);
    }

    function Biography(){
        return(
            <h1>Biography</h1>
        )
    }

    function Hobbies(){
        return(
            <h1>Passion</h1>
        )
    }

    function Objectives(){
        return(
            <h1>Objectifs</h1>
        )
    }

    function Reference(){
        return(
            <h1>Références</h1>
        )
    }

    return(
        <>
        <Nav />
        <section className="presentation">
            <div className="presentation__nav d-flex justify-content-around">
                <button onClick={() => handleClick('Biography')} className="presentation__nav--bio d-flex mt-5 align-items-center">  
                    <p className="m-0">Biographie</p>
                    <FaFeatherAlt />
                </button>
                <button onClick={() => handleClick('Hobbies')} className="presentation__nav--hobbies d-flex mt-5 align-items-center">
                    <p className="m-0">Passions</p>
                    <FaDog />
                </button>
                <button onClick={() => handleClick('Objectives')} className="presentation__nav--goals d-flex mt-5 align-items-center">
                    <p className="m-0">Objectifs</p>
                    <FiTarget />
                </button>
                <button onClick={() => handleClick('Reference')} className="presentation__nav--ref d-flex mt-5 align-items-center">
                    <p className="m-0">Références</p>
                    <FaBookOpen />
                </button>   
            </div>
            <aside className="presentation__description mt-5" id="content">
                Voici un contenu plus personnel,<br/>pour apprendre à me connaître !
            </aside>
            {selected === 'Biography' && <section className="mt-2 Biography"> <Biography /> </section>}
            {selected === 'Hobbies' && <section className="mt-2 Hobbies"> <Hobbies /> </section>}
            {selected === 'Objectives' && <section className="mt-2 Objectives"> <Objectives /> </section>}
            {selected === 'Reference' && <section className="mt-2 Reference"> <Reference /> </section>}
        </section>
           </>
    )
}

export default Presentation