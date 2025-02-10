import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function ProduitCategorie(){

    const {mode} = useParams();
    const {categorie} = useParams();
    const [produits, setProduits] = useState([]);
    const [nouveau, setNouveau] = useState([]);
    document.title = `Mode ${mode} / Categorie ${categorie}`;

    useEffect(()=>{
        axios.get(`http://localhost:3001/${mode}/${categorie}`)
        .then(result => setProduits(result.data))
        .catch(err => console.log(err));
    }, [mode, categorie]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/nouveauProduit/${mode}/${categorie}`)
        .then(result => setNouveau(result.data))
        .catch(err => console.log(err));
    }, [mode, categorie]);

    console.log(produits);

    return (
        <div className='container-fluid p-0' style={{'backgroundColor': '#D9D9D9'}}>
            <Header />

            <div className='w-100 p-2'>
                <span className='mx-2'>
                    <Link className="text-decoration-none text-dark" to={'/'}>Accueil</Link>
                    {' > '}
                    <Link className="text-decoration-none text-dark" to={`/${mode}`}>{'Mode '+ mode.substring(0, 1).toUpperCase()+mode.substring(1)}</Link>
                    {' > '+ categorie.substring(0, 1).toUpperCase()+categorie.substring(1)}
                </span>
            </div>

            <div className="container p-0 px-2 mx-auto">
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

export default ProduitCategorie