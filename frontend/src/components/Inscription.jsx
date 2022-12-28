import React, { useState } from 'react';

function Inscription() {
  // Création d'un état local pour stocker l'état du formulaire (affiché ou caché)
  const [formVisible, setFormVisible] = useState(false);
  // Création d'un état local pour stocker l'état du bouton (affiché ou caché)
  const [buttonVisible, setButtonVisible] = useState(true);

  // Fonction qui affiche ou cache le formulaire en fonction de l'état courant
  const toggleForm = () => {
    setFormVisible(!formVisible);
    if(!formVisible){
        setButtonVisible(false)
    }else{
        setButtonVisible(true)
    }
    // Masque le bouton lorsque le formulaire est affiché
  }

  return (
    <div>
      {/* Bouton "S'inscrire" qui affiche le formulaire lorsqu'il est cliqué */}
      {buttonVisible && (
        <button onClick={toggleForm} className="main__button">Inscription</button>
      )}
      {/* Formulaire d'inscription qui n'est affiché que si l'état du formulaire est "true" */}
      {formVisible && (
        <form className="form p-4 d-flex flex-column">
          {/* Croix qui permet de fermer le formulaire lorsqu'elle est cliquée */}
          <span onClick={toggleForm}>&times;</span>
          {/* Champ "Pseudo" */}
          <label>
            Pseudo:<br/>
            <input type="text" name="pseudo" placeholder="Minimum 3 caractères"/>
          </label>
          {/* Champ "Email" */}
          <label>
            Email:<br/>
            <input type="email" name="email"  placeholder="abdel@gmail.com" />
          </label>
          {/* Champ "Mot de passe" */}
          <label>
            Mot de passe:<br/>
            <input type="password" name="password" placeholder="6 caractères, une majuscule et un chiffre" />
          </label>
               {/* Champ "Confirmation mot de passe" */}
               <label>
            Confirmation mdp:<br/>
            <input type="password" name="confirm-password" className="form__input" placeholder="6 caractères, une majuscule et un chiffre"/>
          </label>
          {/* Bouton "S'inscrire" */}
          <button type="submit" className="main__button--secondary mt-2">S'inscrire</button>
        </form>
      )}
    </div>
  );
}

export default Inscription;