import React, { useState } from 'react';


function Summary() {
    return(
        <>
            <div className="summary container">
                <ul className="summary__list d-flex row justify-content-center">
                    <li className="summary__list--projects w-75">Projets</li>
                    <li className="summary__list--presentation w-75">Présentation</li>
                    <li className="summary__list--contact w-75">Contact</li>
                    <li className="summary__list--goldenbook w-75">Livre d'or</li>
                </ul>
            </div>
        </>
    )
    
}

export default Summary;