const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const ProduitsModel = require('./models/Produits');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/Rshoping');

/*******************************Lister Produits***********************************/
app.get("/", (req, res)=>{
    ProduitsModel.find({})
    .then(produits => res.json(produits))
    .catch(err => console.log(err))
});

/*******************************Admin***********************************/
// creer produits
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'public/imagesProduit')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage: storage
});

app.post("/creerProduit", upload.single('file'), (req, resp)=>{
    
    ProduitsModel.create({
        nom: req.body.nom,
        description: req.body.description,
        categorie: req.body.categorie,
        marque: req.body.marque,
        prix: req.body.prix,
        taille: req.body.taille,
        quantiteStock: req.body.quantite,
        image: req.file.filename
    })
    .then(produits => resp.json(produits))
    .catch(err => console.log(err))

});

// recuperer le produit pour modifier
app.get('/getProduit/:id', (req, resp)=> {
    const id= req.params.id;
    ProduitsModel.findById({_id:id})
    .then((data)=>resp.json(data))
    .catch(err=>console.log(err))
});

// modifier produit
app.put("/modifierProduit/:id", (req, res)=>{
    const id = req.params.id;
    ProduitsModel.findByIdAndUpdate({_id:id}, {
        nom: req.body.nom,
        description: req.body.description,
        categorie: req.body.categorie,
        marque: req.body.marque,
        prix: req.body.prix,
        taille: req.body.tailleN,
        quantiteStock: req.body.quantite,
    })
    .then(pro => res.json(pro))
    .catch(err=>console.log(err))
});

// supprimer produit
app.delete('/deleteProduit/:id', (req, resp)=> {
    const id = req.params.id;
    ProduitsModel.findByIdAndDelete({_id:id})
    .then(res => resp.json(res))
    .catch(err => console.log(err))
});

/*******************************Client***********************************/
// selectionner 6 nouveau produit
app.get("/nouveauProduit", (req, res)=>{
    ProduitsModel.find({}).sort({ _id: -1 }).limit(6)
    .then(produits => res.json(produits))
    .catch(err => console.log(err))
});

// selectionner 6 nouveau produit par mode
app.get("/nouveauProduit/:mode", (req, res)=>{
    ProduitsModel.find({categorie: req.params.mode}).sort({ _id: -1 }).limit(6)
    .then(produits => res.json(produits))
    .catch(err => console.log(err))
});

// selectionner par mode et categorie
app.get("/:mode/:categorie", (req, res)=>{
    if(req.params.categorie != "chaussaure"){
        ProduitsModel.find({categorie: req.params.mode, nom: { $ne: 'chaussaure' } })
        .then(produits => res.json(produits))
        .catch(err => console.log(err))
    }else{
        ProduitsModel.find({categorie: req.params.mode, nom: req.params.categorie})
        .then(produits => res.json(produits))
        .catch(err => console.log(err))
    }
});

// selectionner 6 nouveau produit par mode et categorie
app.get("/nouveauProduit/:mode/:categorie", (req, res)=>{
    if(req.params.categorie != "chaussaure"){
        ProduitsModel.find({categorie: req.params.mode, nom: { $ne: 'chaussaure' } }).sort({ _id: -1 }).limit(6)
        .then(produits => res.json(produits))
        .catch(err => console.log(err))
    }else{
        ProduitsModel.find({categorie: req.params.mode, nom: req.params.categorie}).sort({ _id: -1 }).limit(6)
        .then(produits => res.json(produits))
        .catch(err => console.log(err))
    }
});

/*******************************port***********************************/
app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})