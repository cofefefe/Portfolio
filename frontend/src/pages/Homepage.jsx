import React, { useState } from 'react';
import Nav from '../components/Nav';
import Summary from '../components/Summary'

function Homepage() {
    return(
        <>
        <Nav />
        <section className="homepage">
            <Summary />
        </section>
        </>
    )
    
}

export default Homepage;