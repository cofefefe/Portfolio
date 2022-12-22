import {Link, Navigate, useRouteLoaderData} from 'react-router-dom';
import logo from '../assets/Logo_portfolio.webp'

function EntryPage() {

    return (
            <main className="main h-100 w-100 container-fluid p-0 m-0">
                <div className="main__text text-center">
                    <h1  className="main__text--titles pt-5">Bienvenue sur mon portfolio</h1>
                    <h2  className="main__text--titles pt-3">Baugard Mathieu</h2>
                    <Link to="/">
                        <p className="main__link pt-2">Visiter sans créer de compte</p>
                    </Link>
                </div>
                <section className="main__entry d-flex justify-content-around align-items-center container mt-5 w-50">
                    <button className="main__button--signin">Inscription</button>
                        <img className="" src={logo}></img>
                    <button className="main__button--signup">Connexion</button>
                </section>
                <div className="main__precision text-center mt-5">
                    <p className="main__precision--text">Une fonctionnalité est mise en place pour l'inscription,<br/>
                       elle répond aux normes RGPD et WCAG.<br/>
                       Aucune information demandée n'a vocation à être vraie</p>
                </div>
            </main>
    );
}

export default EntryPage