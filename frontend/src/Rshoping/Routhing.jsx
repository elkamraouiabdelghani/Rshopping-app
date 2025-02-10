import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './Accueil';
import Admin from './admin/admin';
import CreeProduit from './admin/CreeProduit';
import GererProduit from './admin/GererProduit';
import ModifierProduit from './admin/ModifierProduit';
import SeConnecter from './auth/SeConnecter';
import Produit from './Produit';
import ProduitCategorie from './produitCategorie';
import ProduitsMode from './produitsMode';

function Routhing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                {/* Admin */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/Gerer Produits" element={<GererProduit />} />
                <Route path="/admin/Gerer Produits/Creer" element={<CreeProduit />} />
                <Route path="/admin/Gerer Produits/Modifier/:id" element={<ModifierProduit />} />
                {/* Client-Produit */}
                <Route path="/:mode" element={<ProduitsMode />} />
                <Route path="/:mode/:categorie" element={<ProduitCategorie />} />
                <Route path="/Produit/:id" element={<Produit />} />
                {/* Client-Compte */}
                <Route path="/Se Connecter" element={<SeConnecter />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Routhing