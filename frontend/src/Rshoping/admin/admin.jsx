import React from "react";
import { Link } from "react-router-dom";

function Admin(){
    return(
        <div className="container-fluid p-0 m-0 admin" style={{'backgroundColor': '#D9D9D9'}}>
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
            <div className="w-100 my-5 py-5">
                <h1 className="text-center my-5 py-5">Espace d'administration</h1>
            </div>
        </div>
    )
};

export default Admin