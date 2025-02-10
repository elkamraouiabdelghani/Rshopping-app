import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="container-fluid p-0">
            <div className="w-100" style={{'backgroundColor': 'black'}}>
                <div className="w-100 p-3 row">
                    <div className="mb-3 col-12 col-lg-6">
                        <h1 className="fw-bold text-white">Rshoping</h1>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className="text-white fw-bold">NOUVEAU SUR Rshoping? <br />Inscrivez-vous à nos communication pour recevoir nos meilleurs offres!</p>
                        <form action="">
                            <input className="p-3 border border-white rounded" type="email" name="email" id="" placeholder="Entrer votre adress e-mail   " />
                            <input className="p-3 btn border border-white text-white mx-2" type="submit" value="HOMME" />
                            <input className="p-3 btn border border-white text-white" type="submit" value="FEMME" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-100" style={{'backgroundColor': 'gray'}}>
                <div className="w-100 row p-4">
                    <div className="mb-3 col-12 col-md-6 col-lg-4 col-xl-4 row">
                        <div className="col-6">
                            <div className="w-100">
                                <span className="h4">
                                    <Link className="text-dark" to={'/homme'}>Mode Homme</Link>
                                </span>
                                <div className="mx-2 my-2 flink">
                                    <span className="d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9V16.6841C6 18.4952 6 19.4008 6.58579 19.9635C7.89989 21.2257 15.8558 21.4604 17.4142 19.9635C18 19.4008 18 18.4952 18 16.6841V9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M5.74073 12L3.04321 9.38915C2.34774 8.71602 2 8.37946 2 7.96123C2 7.543 2.34774 7.20644 3.04321 6.53331L5.04418 4.59664C5.39088 4.26107 5.56423 4.09329 5.77088 3.96968C5.97753 3.84607 6.21011 3.77103 6.67526 3.62096L8.32112 3.08997C8.56177 3.01233 8.68209 2.97351 8.76391 3.02018C8.84573 3.06686 8.87157 3.2013 8.92324 3.47018C9.19358 4.87684 10.4683 5.94185 12 5.94185C13.5317 5.94185 14.8064 4.87684 15.0768 3.47018C15.1284 3.2013 15.1543 3.06686 15.2361 3.02018C15.3179 2.97351 15.4382 3.01233 15.6789 3.08997L17.3247 3.62096C17.7899 3.77103 18.0225 3.84607 18.2291 3.96968C18.4358 4.09329 18.6091 4.26107 18.9558 4.59664L20.9568 6.53331C21.6523 7.20644 22 7.543 22 7.96123C22 8.37946 21.6523 8.71602 20.9568 9.38915L18.2593 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <Link className="text-decoration-none text-dark mx-1" to={'/homme/vetement'}>Vetement</Link>
                                    </span>
                                    <span className="d-block mt-1">
                                        <div className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M19.1012 18H7.96299C5.02913 18 3.56221 18 2.66807 16.8828C0.97093 14.7623 2.9047 9.1238 4.07611 7C4.47324 9.4 8.56152 9.33333 10.0507 9C9.05852 7.00119 10.3831 6.33413 11.0453 6.00059L11.0465 6C14 9.5 20.3149 11.404 21.8624 15.2188C22.5309 16.8667 20.6262 18 19.1012 18Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M2 14C6.16467 15.4294 8.73097 15.8442 12.0217 14.8039C13.0188 14.4887 13.5174 14.3311 13.8281 14.3525C14.1389 14.3739 14.7729 14.6695 16.0408 15.2608C17.6243 15.9992 19.7971 16.4243 22 15.3583" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
                                                <path d="M13.5 9.5L15 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.5 11L17 9.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <Link className="text-decoration-none text-dark mx-1" to={'/homme/chaussaure'}>Chaussaure</Link>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="w-100">
                                <span className="h4">
                                    <Link className="text-dark" to={'/femme'}>Mode Femme</Link>
                                </span>
                                <div className="mx-2 my-2 flink">
                                    <span className="d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9V16.6841C6 18.4952 6 19.4008 6.58579 19.9635C7.89989 21.2257 15.8558 21.4604 17.4142 19.9635C18 19.4008 18 18.4952 18 16.6841V9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M5.74073 12L3.04321 9.38915C2.34774 8.71602 2 8.37946 2 7.96123C2 7.543 2.34774 7.20644 3.04321 6.53331L5.04418 4.59664C5.39088 4.26107 5.56423 4.09329 5.77088 3.96968C5.97753 3.84607 6.21011 3.77103 6.67526 3.62096L8.32112 3.08997C8.56177 3.01233 8.68209 2.97351 8.76391 3.02018C8.84573 3.06686 8.87157 3.2013 8.92324 3.47018C9.19358 4.87684 10.4683 5.94185 12 5.94185C13.5317 5.94185 14.8064 4.87684 15.0768 3.47018C15.1284 3.2013 15.1543 3.06686 15.2361 3.02018C15.3179 2.97351 15.4382 3.01233 15.6789 3.08997L17.3247 3.62096C17.7899 3.77103 18.0225 3.84607 18.2291 3.96968C18.4358 4.09329 18.6091 4.26107 18.9558 4.59664L20.9568 6.53331C21.6523 7.20644 22 7.543 22 7.96123C22 8.37946 21.6523 8.71602 20.9568 9.38915L18.2593 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <Link className="text-decoration-none text-dark mx-1" to={'/femme/vetement'}>Vetement</Link>
                                    </span>
                                    <span className="d-block mt-1">
                                        <div className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M19.1012 18H7.96299C5.02913 18 3.56221 18 2.66807 16.8828C0.97093 14.7623 2.9047 9.1238 4.07611 7C4.47324 9.4 8.56152 9.33333 10.0507 9C9.05852 7.00119 10.3831 6.33413 11.0453 6.00059L11.0465 6C14 9.5 20.3149 11.404 21.8624 15.2188C22.5309 16.8667 20.6262 18 19.1012 18Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M2 14C6.16467 15.4294 8.73097 15.8442 12.0217 14.8039C13.0188 14.4887 13.5174 14.3311 13.8281 14.3525C14.1389 14.3739 14.7729 14.6695 16.0408 15.2608C17.6243 15.9992 19.7971 16.4243 22 15.3583" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
                                                <path d="M13.5 9.5L15 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.5 11L17 9.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <Link className="text-decoration-none text-dark mx-1" to={'/femme/chaussaure'}>Chaussaure</Link>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-100 mt-3">
                            <span className="h4">
                                <Link className="text-dark" to={'/enfant'}>Mode Enfant</Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <h4>MODES DE PAIMENT ET LIVRAISON</h4>
                            <div className="visa">
                                <span>VISA</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h4>RETROUVEZ-NOUS SUR</h4>
                            <div className="w-100 d-flex">
                                <div className="mx-1" style={{'width': '25px'}}>
                                    <img className="w-100" src="./icons/facebook.png" alt="" />
                                </div>
                                <div className="mx-1" style={{'width': '25px'}}>
                                    <img className="w-100" src="./icons/instagram.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="line" className="mx-auto"></div>
                <div className="p-4">
                    <span>@2024 - Rshoping (Cree par El kamraoui Abdel ghani)</span>
                </div>
            </div>
        </div>
    )
};

export default Footer