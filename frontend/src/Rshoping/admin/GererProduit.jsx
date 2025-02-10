import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function GererProduit(){

    const [produits, setProduits] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(result => setProduits(result.data))
        .catch(err => console.log(err));
    }, []);

    function deleteProduit(id){
        axios.delete('http://localhost:3001/deleteProduit/'+id)
        .then(res => {
            console.log(res);
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="container-fluid p-0 mx-0" style={{'backgroundColor': '#D9D9D9'}}>
            <div className="w-100 bg-white p-3 mb-3">
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
            <div className="container-fluid pb-3">
                <h1 className="text-center">Tous les produits</h1>
                <div className="d-flex justify-content-between my-2">
                    <Link to={'/admin/Gerer Produits/Creer'} className="btn btn-outline-primary my-2">Créer Produit</Link>
                    <h4 className="text-primary">Nombre des produits: <span className="text-dark">{produits.length}</span></h4>
                </div>
                <table class="mx-auto w-100">
                    <tr>
                        <th>Nom Produit</th>
                        <th>Description</th>
                        <th>Categorier</th>
                        <th>Marque</th>
                        <th>Prix</th>
                        <th>Taille</th>
                        <th>Quantite Stock</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    {
                        produits.map(produit=>(
                            <tr className="my-1">
                                <td>{produit.nom}</td>
                                <td className="w-25">{produit.description}</td>
                                <td>{produit.categorie}</td>
                                <td>{produit.marque}</td>
                                <td>{produit.prix} Dh</td>
                                <td>{produit.taille}</td>
                                <td>{produit.quantiteStock}</td>
                                <td>
                                    <img className="p-0" width={'80px'} src={`http://localhost:3001/imagesProduit/${produit.image}`} alt="produit image" />
                                </td>
                                <td>
                                    <Link className="btn btn-outline-success" to={`/admin/Gerer Produits/Modifier/${produit._id}`}>Modifier</Link>
                                    <button onClick={e=>deleteProduit(produit._id)} className="btn btn-outline-danger" style={{'marginLeft': '5px'}}>Supprimer</button>
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
};

export default GererProduit