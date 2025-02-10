import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

function Produit(){
    document.title = 'Produit';

    const {id} = useParams();
    const [produit, setProduit] = useState({});
    const [likeProduit, setLikeProduit] = useState([]);
    const url = useNavigate();
    const [nom, setNom] = useState();
    const [categorie, setCategorie] = useState();
    const [marque, setMarque] = useState();
    const [description, setDescription] = useState();
    const [prix, setPrix] = useState();
    const [taille, setTaille] = useState('');
    const [newtaille, setNewtaille] = useState([]);
    const [quantite, setQuantite] = useState();
    const [image, setImage] = useState();

    useEffect(()=>{
        axios.get("http://localhost:3001/getProduit/"+id)
        .then(result => {
            setNom(result.data.nom);
            setCategorie(result.data.categorie);
            setMarque(result.data.marque);
            setDescription(result.data.description);
            setPrix(result.data.prix);
            setTaille(result.data.taille);
            setNewtaille(result.data.taille.split(', '));
            setQuantite(result.data.quantiteStock);
            setImage(result.data.image);
            setProduit(result.data);
        })
        .catch(err => console.log(err));
    }, [id]);

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(result => setLikeProduit(result.data))
        .catch(err => console.log(err));
    }, []);

    console.log(likeProduit)

    return(
        <div className='p-0' style={{'backgroundColor': '#D9D9D9'}}>
            <Header />

            <div className='w-100 p-2'>
                <span className='mx-2'>
                    <Link className="text-decoration-none text-dark" to={'/'}>Accueil</Link>
                    {' > '}
                    {
                        produit.categorie == 'homme'? (
                            <Link className="text-decoration-none text-dark" to={'/homme'}>Mode Homme</Link>
                            // <span> Mode Homme </span>
                        ): produit.categorie == 'femme'? (
                            <Link className="text-decoration-none text-dark" to={'/femme'}>Mode Homme</Link>
                            // <span> Mode Femme </span>
                        ): (
                            <Link className="text-decoration-none text-dark" to={'/enfant'}>Mode Homme</Link>
                            // <span> Mode Enfant </span>
                        )
                    }
                    {' > '}
                    {
                        nom == 'chaussaure'? (
                            <span> Chaussaure </span>
                        ):(
                            <span> Vetement </span>
                        )
                    }
                    {'> '+ produit.nom}
                </span>
            </div>

            <div className="container p-0">
                <div className="row p-3 my-3">
                    <div className="col-md-5 p-3">
                        <img className="w-100" src={`http://localhost:3001/imagesProduit/${produit.image}`} alt="produit image" />
                    </div>
                    <div className="col-md-6 p-3">
                        <div className="mb-2">
                            {
                                produit.quantiteStock>0? (
                                    <div className="d-flex">
                                        <div className="disponible">
                                            <div></div>
                                        </div>
                                        <span>Disponible</span>
                                    </div>
                                ): (
                                    <div className="d-flex">
                                        <div className="destocke">
                                            <div></div>
                                        </div>
                                        <span>Destocke</span>
                                    </div>
                                )
                            }
                        </div>
                        <h2>{produit.description}</h2>
                        <h4>{produit.nom}</h4>
                        <div className="mb-3">
                            <p className="m-0 fw-bold">Marque: <span style={{'color': '#00afaa'}}>{produit.marque}</span></p>
                            <div className="my-2">
                                <p className="p-2 bg-secondary text-white">+ Livraison entre Lundi et Jeudi, et gratuite pour tous le Maroc</p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <p style={{'marginRight': '10px'}} className="my-auto fw-bold">Les tailles disponible: </p>
                                <select className="form-control taillePro" size={1} name="taille[]" multiple>
                                    {
                                        newtaille.map(taille=>(
                                            <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value={`${taille}`}>{taille}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <p className="m-0 fw-bold">Prix: <span style={{'color': '#00afaa'}}>{produit.prix} Dhs</span></p>
                        </div>
                        <input className="btn text-white" style={{'backgroundColor': '#00afaa'}} type="submit" value="Ajouter au panier" />
                    </div>
                </div>
            </div>
            <hr className="mx-auto" style={{'width': '99%'}} />
            <div className="container mx-auto">
                <div className='w-100 rounded my-3 bg-white'>
                    <div className='w-100 py-2 px-3 d-flex justify-content-between bg-secondary tete-courser'>
                        <span className='fw-bold'>Les produits comme ce produit :</span>
                    </div>
                    <div className='w-100 row p-1 mx-1'>
                        {
                            likeProduit.map(pro=>{
                                if(pro.categorie==produit.categorie && pro.nom==produit.nom){
                                    if(pro._id != produit._id){
                                        return (
                                            <Link to={`/Produit/${pro._id}`} className='col-4 col-md-2 nouveauPro'>
                                            <img className='w-100' src={`http://localhost:3001/imagesProduit/${pro.image}`} alt="produit image" />
                                            <p>{pro.nom}</p>
                                        </Link>
                                        )
                                    }else{
                                        <p>Aucun produit...</p>
                                    }
                                }
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
};

export default Produit