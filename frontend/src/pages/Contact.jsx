import React, { useState } from 'react';
import Nav from '../components/Nav';

import { AiFillPhone } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Contact() {
    return(
        <>
            <Nav />
            <main className="contact">
                <div className="contact__msg container d-flex">
                    <aside className="contact__sending">
                        <h3 className="contact__sending--title">Vous souhaitez me contacter ? </h3><br/>
                        <p>Envoyez moi un mail !  </p>
                        <form action="/send-message" method="post">
                            <label for="name">Nom :</label><br/>
                                <input type="text" id="name" name="name"/><br/>
                            <label for="email">Email :</label><br/>
                                <input type="email" id="email" name="email"/><br/>
                            <label for="message">Message :</label><br/>
                                <textarea id="message" name="message" rows="8"></textarea><br/>
                            <input type="submit" value="Envoyer le message"/>
                        </form>
                    </aside>
                    <aside className="contact__info">
                        <h3 className="contact__info--title">Contact</h3>
                        <ul>
                            <li>
                                <AiFillPhone className="contact__icon"/> 07 69 34 64 24
                            </li>
                            <li>
                                <AiFillLinkedin className="contact__icon"/> <a href="https://www.linkedin.com/in/mathieu-baugard-b2b377258/">Mon profil LinkedIn</a>
                            </li>
                            <li>
                                < AiFillMail className="contact__icon"/> mathieu.baugard.dev@gmail.com
                            </li>
                            <li>
                                < AiFillGithub className="contact__icon"/> https://github.com/cofefefe
                            </li>
                        </ul>
                    </aside>
                </div>
            </main>
        </>
    )
    
}

export default Contact;