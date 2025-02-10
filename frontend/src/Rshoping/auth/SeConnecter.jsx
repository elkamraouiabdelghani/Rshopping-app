import React from "react";
import Footer from "../Footer";
import Header from '../Header';

function SeConnecter(){
    return (

        <div className='p-0' style={{'backgroundColor': '#D9D9D9'}}>
            <Header />

            <div className="container-fluid m-0 p-5">
                <div className="w-50 p-3 mx-auto text-center rounded bg-white">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" className='mx-1'>
                            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#000000" stroke-width="1.5"/>
                            <path d="M14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25 11.0188 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5Z" stroke="#000000" stroke-width="1.5"/>
                            <path d="M5.5 19L6.0604 18.0193C6.95061 16.4614 8.60733 15.5 10.4016 15.5H13.5984C15.3927 15.5 17.0494 16.4614 17.9396 18.0193L18.5 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h1>Se Connecter</h1>
                    </div>
                    <div>
                        <form action="" method="post">
                            <div className="d-flex justify-content-between my-2">
                                <input className="form-control mx-1" type="text" name="Nom" id="" placeholder="Nom" />
                                <input className="form-control mx-1" type="text" name="Prenom" id="" placeholder="Prenom" />
                            </div>
                            <input className="form-control my-2 mx-1" type="text" name="numeroTele" id="" placeholder="Numero de Telephone"/>
                            <div className="d-flex justify-content-start m-1">
                                <div className="mx-1">
                                    <input className="mx-1" type="radio" name="genre" value='H' id="" />
                                    <label className="mx-1" htmlFor="H">Homme</label>
                                </div>
                                <div className="mx-1">
                                    <input className="mx-1" type="radio" name="genre" value='F' id="" />
                                    <label className="mx-1" htmlFor="F">Femme</label>
                                </div>
                            </div>
                            <input className="form-control my-2 mx-1" type="emil" name="email" placeholder="Adresse Email" />
                            <input className="form-control my-2 mx-1" type="password" name="MDP" placeholder="Mot de passe" />
                            <div className="w-100 mx-auto">
                                <input className="btn btn-outline-secondary" type="submit" value="se connecter" />
                            </div>
                        </form>
                        <hr />
                        <a href="#">Cree votre compte</a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
};

export default SeConnecter