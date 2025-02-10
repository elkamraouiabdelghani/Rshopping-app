import React, { useEffect, useState } from "react";
import Footer from './Footer';
import Header from './Header';
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function ProduitsMode(){
    
    const {mode} = useParams();
    const [produits, setProduits] = useState([]);
    const [nouveau, setNouveau] = useState([]);
    document.title = `Mode ${mode}`;

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(result => setProduits(result.data))
        .catch(err => console.log(err));
    }, []);

    useEffect(()=>{
        axios.get(`http://localhost:3001/nouveauProduit/${mode}`)
        .then(result => setNouveau(result.data))
        .catch(err => console.log(err));
    }, [mode]);

    // let premierObj;
    // produits.filter(prod => {
    //     if(prod.categorie==mode && prod.nom=='veste'){
    //         premierObj = prod;
    //     }
    // });
    // console.log(premierObj)

    return (
        <div className='container-fluid p-0' style={{'backgroundColor': '#D9D9D9'}}>
            <Header />

            <div className='w-100 p-2'>
                <span className='mx-2'>
                    <Link className="text-decoration-none text-dark" to={'/'}>Accueil </Link>
                    {'> Mode '+ mode.substring(0, 1).toUpperCase()+mode.substring(1)}
                </span>
                
            </div>

            <div className="container p-0 px-2 mx-auto">

                {
                        mode=='homme'?(
                            <div className='w-100 rounded my-2 bg-white'>
                                <div className='w-100 py-2 px-3 d-flex justify-content-center bg-secondary tete-courser'>
                                    <h5 className='fw-bold'>Nos Categorie - Mode pour {mode.substring(0, 1).toUpperCase()+mode.substring(1)+'s'}</h5>
                                </div>
                                <div className='w-100 d-flex justify-content-center p-2'>
                                    <Link to={`/${mode}/vetement`} className='col-2 nouveauPro'>
                                        <img className='w-100' src='./images/vetement_homme.jpg' alt="produit image" />
                                        <p>Vetement</p>
                                    </Link>
                                    <Link to={`/${mode}/chaussaure`} className='col-2 nouveauPro'>
                                        <img className='w-100' src='./images/chaussure_homme.jpg' alt="produit image" />
                                        <p>Chaussure</p>
                                    </Link>
                                    <Link to={`/`} className='col-2 nouveauPro'>
                                        <img className='w-100 p-4' src='./images/go_back.png' alt="retour image" />
                                        <p>Retour</p>
                                    </Link>
                                </div>
                            </div>
                        ):mode=='femme'?(
                            <div className='w-100 rounded my-2 bg-white'>
                                <div className='w-100 py-2 px-3 d-flex justify-content-center bg-secondary tete-courser'>
                                    <h5 className='fw-bold'>Nos Categorie - Mode pour {mode.substring(0, 1).toUpperCase()+mode.substring(1)+'s'}</h5>
                                </div>
                                <div className='w-100 d-flex justify-content-center p-2'>
                                    <Link to={`/${mode}/vetement`} className='col-2 nouveauPro'>
                                        <img className='w-100' src='./images/vetement_femme.jpg' alt="produit image" />
                                        <p>Vetement</p>
                                    </Link>
                                    <Link to={`/${mode}/chaussaure`} className='col-2 nouveauPro'>
                                        <img className='w-100' src='./images/chaussure_femme.jpg' alt="produit image" />
                                        <p>Chaussure</p>
                                    </Link>
                                    <Link to={`/`} className='col-2 nouveauPro'>
                                        <img className='w-100 p-4' src='./images/go_back.png' alt="retour image" />
                                        <p>Retour</p>
                                    </Link>
                                </div>
                            </div>
                        ):(
                            <></>
                        )
                }

                <div className='w-100 rounded my-3 bg-white'>
                    <div className='w-100 py-2 px-3 d-flex justify-content-between bg-secondary tete-courser'>
                        <span className='fw-bold'>Les derniers 6 nouvelles produits</span>
                    </div>
                    <div className='w-100 p-1'>
                        {
                            nouveau.length>0 ? (
                                <div className='row p-1 mx-1'>
                                    {
                                        nouveau.map((produit) => (
                                            <Link to={`/Produit/${produit._id}`} className='col-4 col-md-2 nouveauPro'>
                                                <img className='w-100' src={`http://localhost:3001/imagesProduit/${produit.image}`} alt="produit image" />
                                                <p>{produit.nom}</p>
                                            </Link>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p>aucun nouvelle produit maintenet...</p>
                            )
                        }
                    </div>
                </div>

                <div className="w-100 bg-white rounded my-3">
                    <div className="w-100 p-3 d-flex justify-content-between">
                        <h5 className="fw-bold">Mode {mode.substring(0, 1).toUpperCase()+mode.substring(1)}</h5>
                        <span className="fw-bold">{produits.filter(pro=>pro.categorie==mode).length} Resultats</span>
                    </div>
                    <hr />
                    <div className="w-100 px-5 py-3 row">
                        {
                            produits.map(produit => 
                                produit.categorie == mode?(
                                    <Link to={`/Produit/${produit._id}`} className='col-7 col-md-3 my-2 mx-auto nouveauPro'>
                                        <div>
                                            <img className='w-100' src={`http://localhost:3001/imagesProduit/${produit.image}`} alt="produit image" />
                                        </div>
                                        <div className="text-start mt-3 mx-3 proInf">
                                            <p className="proDec">{produit.description}</p>
                                            <p className="fw-bold">Prix: <span style={{'color': '#00afaa'}}>{produit.prix} Dhs</span></p>
                                        </div>
                                    </Link>
                                ):(<></>)
                            )
                        }
                    </div>
                </div>
                
                <div className='w-100 rounded my-2 bg-white'>
                    <div className='w-100 py-2 px-3 d-flex justify-content-center bg-secondary tete-courser'>
                        <span className='fw-bold'>Vos marque preferer</span>
                    </div>
                    <div className='w-100 p-2'>
                        <p>aucun marque maintenet...</p>
                    </div>
                </div>
                
            </div>

            <Footer />
        </div>
    )
};

export default ProduitsMode