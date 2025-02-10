const mongoose = require('mongoose');

const ProduitsScheme =new mongoose.Schema({
    nom: String,
    description: String,
    categorie: String,
    marque: String,
    prix: Number,
    taille: String,
    quantiteStock: Number,
    image: String
});

const ProduitsModel = mongoose.model("produits", ProduitsScheme);
module.exports=ProduitsModel;