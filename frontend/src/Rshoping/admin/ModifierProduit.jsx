import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function ModifierProduit(){

    const {id} = useParams();
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
        })
        .catch(err => console.log(err));
    }, []);

    function handelSubmit(e){
        e.preventDefault();

        const tailleN = newtaille.join(', ');

        axios.put("http://localhost:3001/modifierProduit/"+id, {
            nom, categorie, marque, description, prix, tailleN, quantite
        })
        .then(result => {
            console.log(result);
        })
        .then(err => console.log(err));
    
        url('/admin/Gerer Produits')
    }

    return(
        <div className="container-fluid p-0 m-0" style={{'backgroundColor': '#D9D9D9'}}>
            <div className="w-100 bg-white p-3">
                <span className="mx-1">
                    <Link className="text-dark fw-bold admin_link" to={'/'}>Acceuil</Link>
                </span>
                <span className="mx-1">
                    <Link className="text-dark fw-bold admin_link" to={'/admin/Gerer Produits'}>Gerer les produit</Link>
                </span>
                {/* <span>
                    <Link>Acceuil</Link>
                </span> */}
            </div>
            
            <div className="container p-5">
                <div className="w-75 border border-dark rounded bg-secondary mx-auto p-3">
                    <h1 className="text-center mb-3">Modifier un produit</h1>
                    <form onSubmit={handelSubmit}>
                        <div className="d-flex justify-content-around mb-3">
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="nomProd">Nom du produit : </label>
                                <input className="form-control" type="text" id="nomProd" value={nom} name="nomProd" onChange={e=>setNom(e.target.value)}/>
                            </div>
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="categorie">Categorie du produit : </label>
                                <input className="form-control" type="text" id="categorie" value={categorie} name="categorie" onChange={e=>setCategorie(e.target.value)}/>
                            </div>
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="marque">Marque du produit : </label>
                                <input className="form-control" type="text" id="marque" value={marque} name="marque" onChange={e=>setMarque(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="fs-5 fw-bold mb-1" htmlFor="description">Description du produit : </label>
                            <textarea className="form-control" value={description} name="description" id="description" cols="30" rows="3" onChange={e=>setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="d-flex justify-content-around mb-3">
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="prix">Prix du produit : </label>
                                <input className="form-control" type="text" id="prix" value={prix} name="prix" onChange={e=>setPrix(e.target.value)}/>
                            </div>
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="taille">Taille du produit : </label>
                                <select className="form-control" size={1} name="taille[]" onChange={e=>setNewtaille(Array.from(e.target.selectedOptions, (option) => option.value))} multiple>
                                    {
                                        (
                                            {
                                                ...taille.includes('S')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="S" selected>S</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="S">S</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('M')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="M" selected>M</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="M">M</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('L')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="L" selected>L</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="L">L</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('XL')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="XL" selected>XL</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="XL">XL</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('XXL')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="XXL" selected>XXL</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="XXL">XXL</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('3XL')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="3XL" selected>3XL</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="3XL">3XL</option>
                                                )
                                            }
                                        )
                                    }
                                    <option className="w-25 p-1 mx-1" value=""></option>
                                    {
                                        (
                                            {
                                                ...taille.includes('36')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="36" selected>36</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="36">36</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('38')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="38" selected>38</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="38">38</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('40')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="40" selected>40</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="40">40</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('42')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="42" selected>42</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="42">42</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('44')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="44" selected>44</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="44">44</option>
                                                )
                                            }
                                        )
                                    }
                                    {
                                        (
                                            {
                                                ...taille.includes('45')? (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="45" selected>45</option>
                                                ): (
                                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="45">45</option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            </div>
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="quantite">Quantite en stock : </label>
                                <input className="form-control" type="text" id="quantite" value={quantite} name="quantite" onChange={e=>setQuantite(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="fs-5 fw-bold mb-1" htmlFor="image">Image du produit : </label>
                            <div className="w-100 d-flex justify-content-center">
                                <img className="p-0 w-50" src={`http://localhost:3001/imagesProduit/${image}`} alt="produit image" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <input className="btn btn-primary w-75" type="submit" value="Modifier Produit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ModifierProduit