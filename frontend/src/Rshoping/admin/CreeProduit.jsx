import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function CreeProduit(){

    const url = useNavigate();
    const [nom, setNom] = useState();
    const [categorie, setCategorie] = useState();
    const [marque, setMarque] = useState();
    const [description, setDescription] = useState();
    const [prix, setPrix] = useState();
    const [taille, setTaille] = useState([]);
    const [quantite, setQuantite] = useState();
    const [image, setImage] = useState();

    function handelSubmit(e){
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('nom', nom);
        formdata.append('categorie', categorie);
        formdata.append('marque', marque);
        formdata.append('description', description);
        formdata.append('prix', prix);
        formdata.append('taille', taille.join(', '));
        formdata.append('quantite', quantite);
        formdata.append('file', image);

        axios.post("http://localhost:3001/creerProduit", formdata)
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
                    <h1 className="text-center mb-3">Créer un produit</h1>
                    <form onSubmit={handelSubmit}>
                        <div className="d-flex justify-content-around mb-3">
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="nomProd">Nom du produit : </label>
                                <input className="form-control" type="text" id="nomProd" name="nomProd" onChange={e=>setNom(e.target.value)}/>
                            </div>
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="categorie">Categorie du produit : </label>
                                <input className="form-control" type="text" id="categorie" name="categorie" onChange={e=>setCategorie(e.target.value)}/>
                            </div>
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="marque">Marque du produit : </label>
                                <input className="form-control" type="text" id="marque" name="marque" onChange={e=>setMarque(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="fs-5 fw-bold mb-1" htmlFor="description">Description du produit : </label>
                            <textarea className="form-control" name="description" id="description" cols="30" rows="3" onChange={e=>setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="d-flex justify-content-around mb-3">
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="prix">Prix du produit : </label>
                                <input className="form-control" type="text" id="prix" name="prix" onChange={e=>setPrix(e.target.value)}/>
                            </div>
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="taille">Taille du produit : </label>
                                <select className="form-control w-100" size={1} name="taille[]" onChange={e=>setTaille(Array.from(e.target.selectedOptions, (option) => option.value))} multiple>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="S">S</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="M">M</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="L">L</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="XL">XL</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="XXL">XXL</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="3XL">3XL</option>
                                    <option className="w-25 p-1 mx-1" value=""></option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="36">36</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="38">38</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="40">40</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="42">42</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="44">44</option>
                                    <option className="w-25 d-inline border border-dark rounded p-1 mx-1" value="45">45</option>
                                </select>
                            </div>
                            <div>
                                <label className="fs-5 fw-bold mb-1" htmlFor="quantite">Quantite en stock : </label>
                                <input className="form-control" type="text" id="quantite" name="quantite" onChange={e=>setQuantite(e.target.value)}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="fs-5 fw-bold mb-1" htmlFor="image">Image du produit : </label>
                            <input className="form-control" type="file" name="image" id="image" onChange={e=>setImage(e.target.files[0])}/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <input className="btn btn-primary w-75" type="submit" value="Ajouter Produit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default CreeProduit